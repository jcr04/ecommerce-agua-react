using System.ComponentModel.DataAnnotations;

namespace UserLogin.Models
{
    public class UserLoginModel
    {
        [Required(ErrorMessage = "O campo Usuário é obrigatório")]
        public string Username { get; set; }

        [Required(ErrorMessage = "O campo Senha é obrigatório")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
