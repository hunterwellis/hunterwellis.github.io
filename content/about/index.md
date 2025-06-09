+++
title = "About"
+++

# Info
<img src="/images/pfp.jpeg" alt="profile picture" style="margin-left: auto; margin-right: auto; display: block; width: 300px;">

I am a <span id="ageDisplay"></span> year old Electrical & Computer Engineer who is interested in the intersection of control systems, robotics, and autonomy.

# Skills & Interests
- Electrical & Computer Engineering
    - Control Theory
    - Signal processing
    - Embedded Systems
    - [GNU/Linux](https://github.com/hunterwellis/dotfiles)
    - Autonomous Systems
    - [Neovim](https://github.com/hunterwellis/nvim-config)
- Swimming
- Fly Fishing
- Ultra Running

# Fun Pictures

<img src="/images/about_pfp.jpg" alt="welding picture" style="float:left; display: block; margin: 5 5; height: 300px;">
<img src="/images/boat_sit.jpg" alt="boat picture" style="float:left; display: block; margin: 5 5; height: 300px;">
<img src="/images/fastrac.jpg" alt="fastrac picture" style="float:left; display: block; margin: 5 5; height: 300px;">

<div style="clear: both;"></div>

# Contact

Email: [elliswhunter@gmail.com](mailto:elliswhunter@gmail.com)  
LinkedIn: [@ellishw](https://www.linkedin.com/in/ellishw)  
Website: [ellishw.tech](https://ellishw.tech)


# Resume

<embed src="/pdfs/Ellis-Hunter-Resume.pdf" type="application/pdf" width=100% height=1122px>

<br>


<script>
  const birthDate = new Date("2001-11-20T00:00:00Z");

  function updateAge() {
    const now = new Date();
    const ageInMilliseconds = now - birthDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.2425; // accounts for leap years
    const age = ageInMilliseconds / millisecondsInYear;

    document.getElementById("ageDisplay").textContent = age.toFixed(11);
    
    requestAnimationFrame(updateAge);
  }

  updateAge();
</script>

