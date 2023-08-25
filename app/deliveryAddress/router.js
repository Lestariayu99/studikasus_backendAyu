const { police_check} = require('../../middlewares');
const deliveryAddressController = require('./controller');

const router = require('express').Router();

router.post(
    '/delivery-addresses',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
);

router.put('delivery-addresses/:id', deliveryAddressController.update);
router.delete('./delivery-addresses/:id', deliveryAddressController.destroy);
router.delete('/delivery-addresses/:id', deliveryAddressController.destroy);

router.get(
    '/delivery-addresses',
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.index

)

module.exports = router;