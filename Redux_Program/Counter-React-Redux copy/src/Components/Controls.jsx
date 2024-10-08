import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../Store/Counter";
import { privacyActions } from "../Store/Privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add({ num: elementRef.current.value }));
    elementRef.current.value = "";
  };

  const handleSubstract = () => {
    dispatch(counterActions.substract(elementRef.current.value));
    elementRef.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-gap">
        <input
          type="text"
          placeholder="Enter Number"
          className="control-input"
          ref={elementRef}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
