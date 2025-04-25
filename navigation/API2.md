---
layout: base
title: API2
permalink: /gamify/API2
---
# Currency converter + toggle theme
### for the API + local storage hacks

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>money yumyum</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 2rem;
      margin: 0;
      background:rgb(255, 255, 255);
      transition: background 0.3s, color 0.3s;
    }
    .converter {
      background: rgb(0, 0, 0);
      color: rgb(0, 0, 0);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      max-width: 400px;
      margin: 2rem auto;
      transition: background 0.3s, color 0.3s;
    }
    .converter h2 {
    color: black;
    }
    input, select, button {
      width: 100%;
      padding: 0.5rem;
      margin-top: 1rem;
      font-size: 1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    #result {
      margin-top: 1.5rem;
      font-weight: bold;
      color: black;
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
      background:rgb(0, 0, 0);
      color: white;
    }
  </style>
</head>
<body>

<div class="converter">
  <h2>Currency Converter</h2>
  <input type="number" id="amount" placeholder="Enter amount" />
  
  <select id="fromCurrency">
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="JPY">JPY</option>
    <option value="GBP">GBP</option>
  </select>

  <select id="toCurrency">
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="JPY">JPY</option>
    <option value="GBP">GBP</option>
  </select>

  <button onclick="convertCurrency()">Convert</button>

  <div id="result"></div>

  <div class="theme-toggle">
    <button onclick="toggleTheme()">try a new color!</button>
  </div>
</div>

<script>
  const API_KEY = 'fca_live_MxqIPPaw49D6iSgbAj766jQLtEfUUvP5pUnBQsDY';

  async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");

    if (!amount || isNaN(amount)) {
      resultDiv.textContent = "Please enter a valid amount.";
      return;
    }

    try {
      const res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${from}`);
      const data = await res.json();

      if (!data.data || !data.data[to]) {
        resultDiv.textContent = "Error: Invalid response or currency.";
        return;
      }

      const rate = data.data[to];
      const converted = amount * rate;

      resultDiv.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    } catch (error) {
      resultDiv.textContent = "Error fetching exchange rate.";
      console.error(error);
    }
  }

  function getRandomColor() {
  const r = Math.floor(Math.random() * 156) + 100; // 100–255 to avoid too dark
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return `rgb(${r}, ${g}, ${b})`;
}

function toggleTheme() {
  const bgColor = getRandomColor();
  const textColor = getRandomColor();
  const converterColor = getRandomColor();

  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;

  const converter = document.querySelector('.converter');
  if (converter) {
    converter.style.backgroundColor = converterColor;
    converter.style.color = textColor;
  }

  // Save for reloads (optional)
  localStorage.setItem('randomTheme', JSON.stringify({ bgColor, textColor, converterColor }));
}

// Load saved theme on page load
(function applySavedTheme() {
  const saved = localStorage.getItem("randomTheme");
  if (saved) {
    const { bgColor, textColor, converterColor } = JSON.parse(saved);
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    const converter = document.querySelector('.converter');
    if (converter) {
      converter.style.backgroundColor = converterColor;
      converter.style.color = textColor;
    }
  }
})();
</script>

</body>
</html>