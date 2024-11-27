/**
 * cupon controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::cupon.cupon',({strapi})=>({
    async findOne(ctx) {
        const { c_code } = ctx.params;  
        console.log(ctx.params)
        const cupon = await strapi.db.query('api::cupon.cupon').findOne({
          where: { c_code },  
        });
        if (!cupon) {
          return ctx.notFound('Cupón no encontrado');
        }
        return ctx.send({ ok: true, cupon });
      },
}));