

export default function Counter({onDecrement, onIncrement}) {



  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => onIncrement(1)}
        >
          + 1
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => onDecrement(1)}
        >
          - 1
        </button>
                <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => onIncrement(3)}
        >
          + 3
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => onDecrement(3)}
        >
          - 3
        </button>
      </div>
    </>
  );
}

/* Lift the `people` state up so that:


You can follow these hints as a guideline:

- Move the `people` state to the `App` component.
- In the `App` component, create two helper functions to handle adding and subtracting a person from the `people` state.
- Pass these `handle` functions to the `Counter` component:
  - Use a separate prop for each function.
  - Name the props starting with `on` instead of `handle` (e.g., `onDelete={handleDelete}`).
- In the `Counter` component:
  - Receive the two new props.
  - Assign them to the appropiate button's `onClick` prop. You do **not** need to use an anonymous function here. 
  Instead of writing `onClick={() => onSomeEvent()}`, you can pass the function directly, like this: `onClick={onSomeEvent}`. */