import './signup.css';

function Signup() {
  return (
    <div className='signup'>
      <form className='signup__formulario' action='' method='POST'>
        <h1 className='signup__titulo'>Registrate</h1>

        <label>Usuario *</label>
        <input type='text' placeholder='Introduce tu usuario...' required />

        <label>Contraseña *</label>
        <input
          type='password'
          placeholder='Introduce una contraseña'
          required
        />

        <label>Repite contraseña *</label>
        <input type='password' placeholder='Repite la contraseña' required />

        <label>Email *</label>
        <input type='email' placeholder='Introduce tu email...' required />
        <div className='terms'>
          <input className='terms__check' type='checkbox' />
          <p>
            Acepta los{' '}
            <span>
              <a href=''>terminos y condiciones?</a>
            </span>
            ?
          </p>
        </div>

        <input type='submit' value='Registrarte' />
      </form>
      <div className='main__content--newuser'>
        <p>¿Ya tienes cuenta?</p>
        <button className='main__btn' disable id='btn__registrar'>
          <a href='./login'>Iniciar sesión</a>
        </button>
      </div>
    </div>
  );
}

export default Signup;
