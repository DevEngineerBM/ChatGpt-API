document.getElementById("submit").addEventListener("click", sendToChatGPT);

async function sendToChatGPT() {
  let value = document.getElementById('input').value;

  let body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: value }],
    temperature: 0.7,
  };

  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ****************************'
  };

  try {
    let response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let data = await response.json();
      let reply = data.choices[0].message.content;
      document.getElementById('replay').textContent = reply;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
