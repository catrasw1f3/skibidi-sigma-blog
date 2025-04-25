---
layout: base
title: API
permalink: /gamify/API
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Currency Converter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 2rem;
      text-align: center;
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
  </script>
</body>
</html>
