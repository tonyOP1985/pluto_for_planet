<template>
  <section class="pluto_for_planet_contact_form">
    <div class="pluto_for_planet_contact_intro">
      <h1>Contact Us</h1>
      <p>Pluto For Planet would love to play at your event or venue! They are prepared to play a 4 or 5 piece electric show with full PA or an acoustic duo.  Check out thier playlist and contact them for booking via the form below.</p>
    </div>

    <form>
      <div class="form form_name">
        <label for="name">Name</label>
        <input type="text">
      </div>
      <div class="form form_email">
        <label for="email">Email</label>
        <input type="email">
      </div>
      <div class="form form_phone">
        <label for="phone">Phone</label>
        <input type="phone">
      </div>
      <div class="form form_message">
        <label for="message">Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="form form_button">
        <button class="form_submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.pluto_for_planet_contact_form {
  width: 80rem;
  margin: 4rem auto 0 auto;
}

.pluto_for_planet_contact_intro {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  h1 {
    margin: 0 auto;
    font-size: 5rem;
    font-family: $rajdhani;
    letter-spacing: 1rem;
    text-transform: uppercase;
    color:$text-primary;
  }

  p {
    margin: 0 auto;
    font-size: 1.5rem;
    color: $text-primary;
    text-align: center;
  }
}

.form {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2rem auto 0 auto;

  label {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    font-family: $open-sans;
    font-weight: bold;
    letter-spacing: .1rem;
    font-size: 1.4rem;
    color: $text-primary;
  }

  input {
    height: 4rem;
    padding: 1rem;
    font-size: 1.4rem;
    font-family: $open-sans;
  }

  textarea {
    padding: 1rem;
    font-family: $open-sans;
    font-size: 1.4rem;
  }
}

.form_submit {
  height: 4rem;
  width: 10rem;
  font-size: 1.4rem;
  letter-spacing: .1rem;
  border: none;
  background-color: $purple-primary;
  color: $white;
  font-family: $open-sans;
  text-transform: uppercase;
  transition: .5s;

  &:hover {
    background-color: darken($purple-primary, 20%);
  }
}
</style>
