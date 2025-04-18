// Simulate fetching data every 2 seconds
setInterval(() => {
  updateSystemData();
}, 2000);

// Update system data on dashboard
function updateSystemData() {
  // Fetch data from your JSON (using static example data for now)
  fetch('mock-data.json')
    .then(response => response.json())
    .then(data => {
      const randomData = data[Math.floor(Math.random() * data.length)];

      // CPU update
      const cpuCircle = document.getElementById("cpuCircle");
      const cpuPercent = document.getElementById("cpuPercent");
      cpuCircle.style.background = `conic-gradient(#4caf50 ${randomData.cpu}%, #1e293b ${randomData.cpu}%)`;
      cpuPercent.textContent = `${randomData.cpu}%`;

      // Memory update
      const memCircle = document.getElementById("memCircle");
      const memPercent = document.getElementById("memPercent");
      memCircle.style.background = `conic-gradient(#ffeb3b ${randomData.memory}%, #1e293b ${randomData.memory}%)`;
      memPercent.textContent = `${randomData.memory}%`;

      // Disk update
      const diskCircle = document.getElementById("diskCircle");
      const diskPercent = document.getElementById("diskPercent");
      diskCircle.style.background = `conic-gradient(#2196f3 ${randomData.disk}%, #1e293b ${randomData.disk}%)`;
      diskPercent.textContent = `${randomData.disk}%`;

      // Alert if memory is high
      if (randomData.memory > 80) {
        memCircle.style.boxShadow = "0 0 15px rgba(255, 0, 0, 0.7)";
        memPercent.style.color = "#f44336";
      } else {
        memCircle.style.boxShadow = "inset 0 0 8px #64748b";
        memPercent.style.color = "#f1f5f9";
      }
    })
    .catch(err => console.error('Error fetching data:', err));
}




  
  
