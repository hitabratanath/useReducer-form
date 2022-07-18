import { useReducer } from "react";
const ACTIONS = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  EMAIL: "email"
};
const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: ""
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.FIRST_NAME:
      return { ...state, firstName: payload.firstName };
    case ACTIONS.LAST_NAME:
      return { ...state, lastName: payload.lastName };
    case ACTIONS.EMAIL:
      return { ...state, email: payload.email };
    default:
      return state;
  }
};
function CustomForm() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  function handleSubmit(s) {
    s.preventDefault();
  }
  console.log(state.lastName);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="item-wrapper">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              placeholder="name"
              id="firstName"
              value={state.firstName}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.FIRST_NAME,
                  payload: { firstName: e.target.value }
                })
              }
            />
          </div>
          <div className="item-wrapper">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              placeholder="name"
              id="lastName"
              value={state.lastName}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.LAST_NAME,
                  payload: { lastName: e.target.value }
                })
              }
            />
          </div>
          <div className="item-wrapper">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              id="email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.EMAIL,
                  payload: { email: e.target.value }
                })
              }
            />
          </div>
        </div>
      </form>
      <h4>
        Hello this is {state.firstName} {state.lastName} and my email address is{" "}
        {state.email}
      </h4>
    </div>
  );
}
export default CustomForm;
