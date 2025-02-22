namespace ToDoApi.Models
{
    public class ToDoDatabaseSettings
    {
        public string ConnectionString { get; set; } = null;

        public string DatabaseName { get; set; } = null;

        public string TaskCollectionName { get; set; } = null;
    }
}