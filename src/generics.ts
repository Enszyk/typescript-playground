// Basic
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<string> = identity;

let output = myIdentity("myString");
let output2: string = myIdentity("myString");
