import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="my-cards">
        {/* My Cards component */}
        <div className="card">
          Card 1 Content
        </div>
        <div className="card">
          Card 2 Content
        </div>
      </div>
      
      <div className="recent-transactions">
        {/* Recent Transactions component */}
        <ul>
          <li>Transaction 1</li>
          <li>Transaction 2</li>
          <li>Transaction 3</li>
        </ul>
      </div>
      
      <div className="weekly-activity-chart">
        {/* Weekly Activity Chart component */}
        {/* Bar diagram for each day of the week */}
      </div>
      
      <div className="expense-statistics">
        {/* Expense Statistics component */}
        {/* Pie chart showing distribution of amount spent in different categories */}
      </div>
      
      <div className="quick-transfer">
        {/* Quick Transfer component */}
        {/* Three users at the start */}
        {/* Button to show next three users */}
        {/* Input for amount to be transferred */}
        {/* Send button */}
      </div>
      
      <div className="balance-history">
        {/* Balance History component */}
        {/* Diagram showing monthly spending */}
      </div>
    </div>
  );
}

export default Home;