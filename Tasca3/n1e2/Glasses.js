
db.createCollection( 'Glasses', {validator: {$jsonSchema: {bsonType: 'object',title:'Glasses',required: [         'Brand',          'Provider',          'Price',          'Graduation',          'Frame_type',          'Frame_colour',          'Glass_colour',          'Sale'],properties: {Brand: {bsonType: 'string'},Provider: {bsonType: 'object',
title:'object',required: [         'Name',          'Adress',          'PhoneNumber',          'Fax',          'NIF'],properties: {Name: {bsonType: 'string'},Adress: {bsonType: 'object',
title:'object',required: [         'Street',          'Num',          'Floor',          'Door',          'City',          'Country',          'PostalCode'],properties: {Street: {bsonType: 'string'},Num: {bsonType: 'int'},Floor: {bsonType: 'int'},Door: {bsonType: 'int'},City: {bsonType: 'string'},Country: {bsonType: 'string'},PostalCode: {bsonType: 'int'}}},PhoneNumber: {bsonType: 'int'},Fax: {bsonType: 'int'},NIF: {bsonType: 'string'}}},Price: {bsonType: 'double'},Graduation: {bsonType: 'object',
title:'object',required: [         'Left',          'Right'],properties: {Left: {bsonType: 'double'},Right: {bsonType: 'double'}}},Frame_type: {enum: ('metalica','pasta','flotant')},Frame_colour: {bsonType: 'string'},Glass_colour: {bsonType: 'object',
title:'object',required: [         'Left',          'Right'],properties: {Left: {bsonType: 'string'},Right: {bsonType: 'string'}}},Sale: {bsonType: 'object',
title:'object',required: [         'Client'],properties: {Client: {bsonType: 'object',
title:'object',required: [         'Name',          'Adress',          'Phone',          'Email',          'Register'],properties: {Name: {bsonType: 'string'},Adress: {bsonType: 'array',items: {
title:'object',required: [         'Street',          'Num',          'Floor',          'Door',          'City',          'Country',          'PostalCode'],properties: {Street: {bsonType: 'string'},Num: {bsonType: 'int'},Floor: {bsonType: 'int'},Door: {bsonType: 'int'},City: {bsonType: 'string'},Country: {bsonType: 'string'},PostalCode: {bsonType: 'int'}}}},Phone: {bsonType: 'int'},Email: {bsonType: 'string'},Register: {bsonType: 'date'}}}}}}         }      }});  