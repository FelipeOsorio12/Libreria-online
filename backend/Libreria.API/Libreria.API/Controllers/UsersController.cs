namespace Libreria.API.Controllers
{
    using Libreria.API.DTOs;
    using Libreria.API.Services;
    using Microsoft.AspNetCore.Mvc;
    using System.Net;

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

        [HttpGet("{id}")]
        public async Task <IActionResult> getUserById (int id)
        {
            var users = await _usersService.getUserById(id);

            if (users == null)
            {
                return NotFound(new { message = "No se encontro el usuario" });
            }

            return Ok(users);

        }

        [HttpPatch("{id}")]

        public async Task <IActionResult> editUser (int Id, EditUserDTO editUserDTO)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    message = "Hubo errores en la validación.",
                    errors = ModelState.Values.SelectMany(v => v.Errors)
                               .Select(e => e.ErrorMessage)
                });
            }

            var users = await _usersService.editUserById(Id, editUserDTO);

            if (users == 0)
            {
                return NotFound(new { message = "Usuario no encontrado" });
            }

            return Ok(new { message = "Datos del usuario actualizados" });

        }

        [HttpPost]

        public async Task <IActionResult> AddUser(CreateUserDTO createUserDTO)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    message = "Hubo errores en la validación.",
                    errors = ModelState.Values.SelectMany(v => v.Errors)
                               .Select(e => e.ErrorMessage)
                });
            }

            var users = await _usersService.addUser(createUserDTO);

            if( users == 0)
            {
                StatusCode(500, "No se puedo crear el nuevo usuario");
            }

            return Ok(new { message = "Usuario creado correctamente" });

        }

        [HttpDelete("{id}")]

        public async Task <IActionResult> deleteUser (int id)
        {
            var users = await _usersService.deleteUser(id);

            if(users == 0)
            {
                return NotFound(new { message = "Usuario no encontrado" });
            }

            return Ok(new { message = "Usuario eliminado correctamente" });


        }
    }
}
