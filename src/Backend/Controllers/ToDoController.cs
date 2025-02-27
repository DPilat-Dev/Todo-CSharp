using Microsoft.AspNetCore.Mvc;
using ToDoApi.Models;
using ToDoApi.Services;

namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoController : ControllerBase
    {
        private readonly ToDoTasksService _todoTasksService;

        public ToDoController(ToDoTasksService todoTasksService)
        {
            _todoTasksService = todoTasksService;
        }

        [HttpGet]
        public async Task<List<ToDoTask>> Get() => await _todoTasksService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<ToDoTask>> Get(string id)
        {
            var task = await _todoTasksService.GetAsync(id);

            if (task is null)
                return NotFound();

            return task;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ToDoTask newTask)
        {
            await _todoTasksService.CreatAsync(newTask);

            return CreatedAtAction(nameof(Get), new { id = newTask.Id }, newTask);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, ToDoTask updatedTask)
        {
            var task = await _todoTasksService.GetAsync(id);

            if (task is null)
                return NotFound();

            updatedTask.Id = task.Id;

            await _todoTasksService.UpdateAsync(id, updatedTask);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var task = await _todoTasksService.GetAsync(id);

            if (task is null)
                return NotFound();

            await _todoTasksService.RemoveAsync(id);

            return NoContent();
        }
    }
}