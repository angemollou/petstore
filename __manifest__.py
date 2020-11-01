# -*- coding: utf-8 -*-
{
    'name': 'Odoo Pet Store',
    'version': '1.0',
    'summary': 'Sell pet toys',
    'description':
        """
Odoo Pet Store
=================

A wonderful application to sell pet toys.
        """,
    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/11.0/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Extra Tools',
    'installable': True,
    'application': False,
    'auto_install': False,
    'depends': ['sale_stock'],

    # any module necessary for this one to work correctly
    'depends': ['base', 'product'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        "data/petstore_data.xml",
        "data/petstore.message_of_the_day.csv",
    ],
    'qweb': ['static/src/xml/*.xml', ],

    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
