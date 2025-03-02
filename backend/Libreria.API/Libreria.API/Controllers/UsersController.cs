namespace Libreria.API.Controllers
{
    using Libreria.API.Services;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _usersService;
        public UsersController (UsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpGet]
        public async Task <IActionResult> getAllUsers()
        {
            var users = await _usersService.getAllUser();

            if (users.Count == 0)
            {
                return NotFound(new { message = "No hay usuarios registrados" });

            }

            return Ok(users);
        }
    }
}
