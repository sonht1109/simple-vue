<script lang="ts"></script>
<template>
  <main>
    <div class="login">
      <h1>Sign in</h1>
      <form>
        <label class="form-input">
          <span>Username</span><br />
          <input />
        </label>

        <label class="form-input">
          <span>Password</span><br />
          <input type="password" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  </main>
</template>
<style scoped lang="less">
main {
  h1 {
    background-color: green;
    color: white;
    text-align: center;
    padding: 10px;
  }

  display: flex;
  width: 100vw;
  .login {
    min-width: 600px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    margin: 0 auto;
    form {
      padding: 40px;
      .form-input {
        display: block;
        font-size: 1.2rem;
        input {
          width: 100%;
          height: 40px;
          margin-top: 6px;
          padding: 4px;
          padding-left: 12px;
        }
        &:not(:first-child) {
          margin-top: 16px;
        }
      }

      button {
        width: 100%;
        height: 56px;
        color: white;
        background-color: rgb(5, 25, 115);
        margin-top: 24px;
        border-radius: 4px;
        outline: none;
        border: none;
        font-size: 1rem;
      }
    }
  }
}
</style>
