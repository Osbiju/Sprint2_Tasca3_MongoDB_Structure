

db.createCollection( 'Clients', {validator: {$jsonSchema: {bsonType: 'object',title:'Clients',required: [         'FirstName',          'LastName',          'PhoneNumber',          'Email',          'RegisterDate',          'Purchases'],properties: {FirstName: {bsonType: 'string'},LastName: {bsonType: 'string'},Adress: {bsonType: 'array',items: {
title:'object',required: [         'Street',          'Number',          'Floor',          'City',          'postal_code',          'Country'],properties: {Street: {bsonType: 'string'},Number: {bsonType: 'int'},Floor: {bsonType: 'int'},Door: {bsonType: 'int'},City: {bsonType: 'string'},postal_code: {bsonType: 'int'},Country: {bsonType: 'string'}}}},PhoneNumber: {bsonType: 'int'},Email: {bsonType: 'string'},RegisterDate: {bsonType: 'date'},Purchases: {bsonType: 'array',items: {
title:'object',properties: {Glasses: {bsonType: 'array',items: {
title:'object',required: [         'Frame_Type',          'Frame_colour',          'Glass_Colour',          'Glass_Graduation',          'Price',          'brand'],properties: {Frame_Type: {enum: ('pasta','metalica','flotant')},Frame_colour: {bsonType: 'string'},Glass_Colour: {bsonType: 'object',
title:'object',required: [         'Left',          'Right'],properties: {Left: {bsonType: 'string'},Right: {bsonType: 'string'}}},Glass_Graduation: {bsonType: 'object',
title:'object',required: [         'Left',          'Right'],properties: {Left: {bsonType: 'double'},Right: {bsonType: 'double'}}},Price: {bsonType: 'double'},brand: {bsonType: 'objectId'}}}}}}}}         }      }});  
