import "./EmptyInvoices.css";

function EmptyInvoices() {
  return (
    <div className="emptyList">
      <img src={"/static/images/illustration-empty.svg"} alt="" />

      <span>
        <h1>There is nothing here</h1>
        <p>Create on invoice by clicking the New button and get started</p>
      </span>
    </div>
  );
}

export default EmptyInvoices;
