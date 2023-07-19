using System.Web.Mvc;
using UserLogin.Models;

namespace UserLogin.Controllers
{
    public class UserController : Controller
    {
        // GET: User/Login
        public ActionResult Login()
        {
            return View();
        }

        // POST: User/Login
        [HttpPost]
        public ActionResult Login(UserLoginModel user)
        {
            if (ModelState.IsValid)
            {
                // Lógica de autenticação do usuário
                if (user.Username == "admin" && user.Password == "admin123")
                {
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    ModelState.AddModelError("", "Usuário ou senha inválidos");
                }
            }

            return View(user);
        }
    }
}
