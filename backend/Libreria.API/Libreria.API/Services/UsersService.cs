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
    }
}
