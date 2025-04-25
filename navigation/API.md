---
layout: base
title: API
permalink: /gamify/API
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>currency convert api thing</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 2rem;
      text-align: center;
    }
    .dark-mode {
      background:rgb(248, 0, 0);
      color: #f5f5f5;
    }
    .converter {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      max-width: 400px;
      margin: 2rem auto;
    }
    .dark-mode .converter {
      background:rgb(0, 0, 255);
      color: #f5f5f5;
    }
    input, select, button {
      padding: 10px;
      margin: 10px;
      font-size: 1rem;
    }
    .result {
      margin-top: 20px;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .theme-toggle {
      text-align: center;
      margin-top: 1rem;
    }
    .theme-toggle button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 4px;
      border: none;
      background:rgb(150, 167, 74);
      color: white;
    }
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <h1>Currency Converter</h1>

  <div>
    <input type="number" id="amount" placeholder="Amount" />
    <select id="fromCurrency"></select>
    <span>to</span>
    <select id="toCurrency"></select>
    <button onclick="convertCurrency()">Convert</button>
  </div>

  <div id="result" class="result"></div>
  <div id="error" class="error"></div>

  <div class="theme-toggle">
    <button onclick="toggleTheme()">Toggle Dark/Light Mode</button>
  </div>
</div>

  <script>
    let rates = {};

    document.addEventListener('DOMContentLoaded', () => {
      fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RIfHoAk31ds9vw02fAwjF7QrzyRlgRCsBdXTUR8t')
        .then(res => res.json())
        .then(data => {
          rates = data.data;
          populateCurrencyOptions(Object.keys(rates));
        })
        .catch(err => {
          document.getElementById('error').textContent = 'Failed to load exchange rates: ' + err.message;
        });
    });

    function populateCurrencyOptions(currencies) {
      const fromSelect = document.getElementById('fromCurrency');
      const toSelect = document.getElementById('toCurrency');

      currencies.forEach(code => {
        const option1 = new Option(code, code);
        const option2 = new Option(code, code);
        fromSelect.add(option1);
        toSelect.add(option2);
      });

      fromSelect.value = 'USD';
      toSelect.value = 'EUR';
    }

    function convertCurrency() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('fromCurrency').value;
      const to = document.getElementById('toCurrency').value;

      if (!amount || !rates[from] || !rates[to]) {
        document.getElementById('error').textContent = 'Please enter a valid amount and select currencies.';
        return;
      }

      const converted = (amount / rates[from]) * rates[to];
      document.getElementById('result').textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
      document.getElementById('error').textContent = '';
    }
     function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("preferredTheme", isDark ? "dark" : "light");
  }

  // On Load: Apply Theme
  (function applySavedTheme() {
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
    console.log("Theme changed")
  })();
  </script>
</body>
</html>
