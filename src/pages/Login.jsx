import { Link, useNavigate } from 'react-router';
import '../assets/css/login.css';
import login from '../assets/images/login.jpg';
import homely from '../assets/images/homely-logo.png';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { loginAccount } from '../service/auth';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const onsubmit = async (data) => {
    try {
      const res = await loginAccount(data);
      setTimeout(() => {
        navigate('/');
      }, 1000);
      toast.success('Đăng nhập thành công');
      localStorage.setItem('Token', res.accessToken);
      localStorage.setItem('UserId', res.user.id);
      localStorage.setItem('User', JSON.stringify(res.user));
    } catch (error) {
      console.log(error);
      reset();
      setTimeout(() => {
        setFocus('email');
      }, 0);
      toast.error('Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <>
      <section className="bg-light p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-11">
              <div className="card border-light-subtle shadow-sm">
                <div className="row g-0">
                  <div className="col-12 col-md-6">
                    <img
                      className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                      loading="lazy"
                      src={login}
                      alt="Welcome back you've been missed!"
                    />
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                      <div className="card-body p-3 p-md-4 p-xl-5">
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-5">
                              <div className="text-center mb-4">
                                <a href="#!">
                                  <img
                                    src={homely}
                                    alt="BootstrapBrain Logo"
                                    width={170}
                                    height={67}
                                  />
                                </a>
                              </div>
                              <h4 className="text-center">
                                Chào mừng bạn trở về, chúng tôi rất nhớ bạn!
                              </h4>
                            </div>
                          </div>
                        </div>

                        <form onSubmit={handleSubmit(onsubmit)} noValidate>
                          <div className="row gy-3 overflow-hidden">
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="name@example.com"
                                  required
                                  {...register('email', {
                                    required: 'Không được bỏ trống Email',
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: 'Địa chỉ email không hợp lệ',
                                    },
                                  })}
                                />
                                {errors?.email && (
                                  <small className="text-danger">
                                    {errors.email.message}
                                  </small>
                                )}
                                <label htmlFor="email" className="form-label">
                                  Email
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  id="password"
                                  placeholder="Password"
                                  required
                                  {...register('password', {
                                    required: 'Không được bỏ trống mật khẩu',
                                    minLength: {
                                      value: 6,
                                      message: 'Mật khẩu phải ít nhất 6 kí tự',
                                    },
                                  })}
                                />
                                {errors?.password && (
                                  <small className="text-danger">
                                    {errors?.password?.message}
                                  </small>
                                )}
                                <label
                                  htmlFor="password"
                                  className="form-label"
                                >
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <Link
                                to={'/register'}
                                className="link-secondary text-decoration-none"
                              >
                                Bạn chưa có tài khoản?
                              </Link>
                            </div>
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  className="btn btn-dark btn-lg"
                                  type="submit"
                                >
                                  Đăng nhập
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}
export default Login;
