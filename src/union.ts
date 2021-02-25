let value: string | number | boolean;

value = "val"

interface Car {
  drive(): void;
  refuel(): void;
}

interface Bike {
  drive(): void
}

declare function getVehicle(): Car | Bike;

let vehicle = getVehicle();

vehicle.drive()
// Property 'refuel' does not exist on type 'Car | Bike'
// vehicle.refuel()

type LoadingState = {
  state: "loading"
}

type FailedState = {
  state: "failed"
  errorCode: number
}

type SuccesState = {
  state: "succes"
  response: {
    data: object
  }
}

type State = LoadingState | FailedState | SuccesState

// Intersection types 

interface handleError {
  success: boolean
  errorMsg?: string
}

interface data {
  data: {
    someNumbers: number[],
    someStrings: string[]
  }
}

type networkResponse = data & handleError

let response: networkResponse;

// response.data
// response.success