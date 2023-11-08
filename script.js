// Array to hold the names of participants
const participants = [];

// Function to add a participant's name and preferences
function addParticipant(name, preferences) {
  if (participants.length >= 25) {
    alert('Sorry, the Secret Santa list is full!');
    return;
  }
  participants.push({ name, preferences });
  blurTakenSlots();
}

// Function to generate slots
function generateSlots() {
  const slotsContainer = document.getElementById('slotsView');
  for (let i = 0; i < 20; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.innerText = 'Slot ' + (i + 1);
    slot.onclick = function() { selectSlot(i); };
    slotsContainer.appendChild(slot);
  }
}

// Function to select a slot
function selectSlot(index) {
  // Check if the slot is already taken
  if (participants[index]) {
    alert('This slot is already taken!');
    return;
  }
  // Logic to handle slot selection
  // ...
}

// Function to blur taken slots
function blurTakenSlots() {
  const slots = document.getElementsByClassName('slot');
  for (let i = 0; i < slots.length; i++) {
    if (participants[i]) {
      slots[i].style.filter = 'blur(4px)';
    }
  }
}

// Function to play shmooda sound
function playShmooda() {
  document.getElementById('shmoodaAudio').play();
}

// Function to play fart sound
function playFart() {
  document.getElementById('fartAudio').play();
}

// Function to close the intro page
function closeIntro() {
  document.getElementById('introPage').style.display = 'none';
  document.getElementById('slotsView').style.display = 'block';
  playFart(); // Play fart sound on closing intro
}

// Call generateSlots on window load
window.onload = function() {
  generateSlots();
  blurTakenSlots();
};
