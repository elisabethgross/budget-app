import React from 'react';

export default () => (
  <form>
    <h4>Add a transaction</h4><br/>
    <input type="text" placeholder="name"/><br/>
    $<input type="text" placeholder="amount"/><br/>
    <button>Add Transaction</button>
  </form>
);