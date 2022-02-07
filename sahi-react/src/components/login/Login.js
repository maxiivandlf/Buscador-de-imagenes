import './login.css';

function Login() {
  return (
    <div className='login'>
      <form className='login__formulario' action='' method='GET'>
        <h2 className='login__titulo'>Iniciar Sesión</h2>
        <label>Usuario *</label>
        <input type='text' placeholder='Introduce tu usuario...' required />
        <label>Contraseña *</label>
        <input
          type='password'
          placeholder='Introduce tu contraseña...'
          required
        />
        <input
          className='login__button'
          type='submit'
          value='Ingresar'
          id='login'
        />
      </form>
      <div className='new__user'>
        <p>¿Nuevo Usuario?</p>
        <button className='login__button' id='login'>
          <a href='./signup'>Registrarse</a>
        </button>
      </div>
    </div>
  );
}

export default Login;
