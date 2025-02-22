using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ToDoApi.Models;

namespace ToDoApi.Services
{
    public class ToDoTasksService
    {
        private readonly IMongoCollection<ToDoTask> _toDoTasksCollection;

        public ToDoTasksService(IOptions<ToDoDatabaseSettings> toDoDatabaseSettings)
        {
            var mongoClient = new MongoClient(toDoDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(toDoDatabaseSettings.Value.DatabaseName);

            _toDoTasksCollection = mongoDatabase.GetCollection<ToDoTask>(toDoDatabaseSettings.Value.TaskCollectionName);
        }

        public async Task<List<ToDoTask>> GetAsync() => await _toDoTasksCollection.Find(_ => true).ToListAsync();

        public async Task<ToDoTask?> GetAsync(int id) => await _toDoTasksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreatAsync(ToDoTask newTask) => await _toDoTasksCollection.InsertOneAsync(newTask);

        public async Task UpdateAsync(int id, ToDoTask updatedTask) => await _toDoTasksCollection.ReplaceOneAsync(x => x.Id == id, updatedTask);

        public async Task RemoveAsync(int id) => await _toDoTasksCollection.DeleteOneAsync(x => x.Id == id);
    }
}