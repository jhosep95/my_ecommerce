export default {
    routes: [
        { 
            method: 'GET',
            path: '/cupons/:c_code',
            handler: 'cupon.findOne',
            config: {
                auth: false
            }
        },
    ]
}