// union type
type Id = number | string;

// union tye pitfall
function swapIdType(id: Id): Id {
   // Can only use props and methods common to both number and string types

   // parseInt(id);  this is not allowed

   return id;
}

swapIdType('24');
