using Libreria.API.DTOs;
using Libreria.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Libreria.API.Services
{
    public class UsersService
    {
        public readonly libreraryContext _libreraryContext;

        public UsersService (libreraryContext libreraryContext)
        {
            _libreraryContext = libreraryContext;
        }

        public async Task <List<Users>> getAllUser()
        {
            return await _libreraryContext.users.ToListAsync();
        }

        //encontrar usuario por id

        public async Task <Users?> getUserById (int Id)
        {
            return await _libreraryContext.users.FindAsync(Id);
        }

        //agregar usuario

        public async Task <int> addUser(CreateUserDTO createUserDTO)
        {
            var createUserEntity = new Users
            {
                dni = createUserDTO.dni,
                nombre = createUserDTO.nombre,
                apellidos = createUserDTO.apellidos,
                fechaNacimiento = createUserDTO.fechaNacimiento,
                lugarNacimento = createUserDTO.lugarNacimento,
                genero = createUserDTO.genero,
                correoElectronico = createUserDTO.correoElectronico,
                usuario = createUserDTO.usuario,
                cotrasenia = createUserDTO.cotrasenia
            };

            var user = await _libreraryContext.users.AddAsync(createUserEntity);


            return await _libreraryContext.SaveChangesAsync();
            
        }


        //eliminar usuario

        public async Task <int> deleteUser (int Id)
        {
            var user = await _libreraryContext.users.FindAsync(Id);

            if(user == null)
            {
                return 0;
            }

            _libreraryContext.Remove(user);

            return await _libreraryContext.SaveChangesAsync();
        }

        //editar usuario por id

        public async Task <int> editUserById (int Id, EditUserDTO editUserDTO)
        {
            var user = await _libreraryContext.users.FindAsync(Id);

            if(user == null)
            {
                return 0;
            }

            if (editUserDTO.nombre != null) editUserDTO.nombre = user.nombre;

            if (editUserDTO.apellidos != null) editUserDTO.apellidos = user.apellidos;

            if (editUserDTO.genero != null) editUserDTO.genero = user.genero;

            if (editUserDTO.correoElectronico != null) editUserDTO.correoElectronico = user.correoElectronico;

            if (editUserDTO.usuario != null) editUserDTO.usuario = user.usuario;

            if (editUserDTO.cotrasenia != null) editUserDTO.cotrasenia = user.cotrasenia;

            return await _libreraryContext.SaveChangesAsync();

        }
    }
}
