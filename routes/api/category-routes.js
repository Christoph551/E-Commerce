const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCat = await Category.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Product }],
    });

    if (!singleCat) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(singleCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create(
      req.body,
    );
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update product data
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      
      return Category.findAll({ where: { category_id: req.params.id } });
    })
    .then((catID) => {

      const newcatID = req.body.category_id
        .filter((cat_id) => !newcatID.includes(cat_id))
        .map((cat_id) => {
          return {
            category_id: req.params.id,
          };
        });
      // figure out which ones to remove
      const catIDToRemove = catID
        .filter(({ cat_id }) => !req.body.category_id.includes(cat_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        Category.destroy({ where: { id: catIDToRemove } }),
        Category.bulkCreate(newcatID),
      ]);
    })
    .then((updatedCategory) => res.json(updatedCategory))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// router.put('/:id', async (req, res) => {
//   try {
//     const updateCat = await Category.update({
//       where: {
//         category_id: req.body.category_id,
//       },
//     });
//     res.status(200).json(updateCat);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteCat) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(deleteCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
