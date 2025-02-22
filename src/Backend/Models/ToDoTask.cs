using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ToDoApi.Models
{
    public class ToDoTask
    {
        [BsonId]
        public int Id { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Description")]
        public string? Description { get; set; }

        [BsonElement("Priority")]
        public Priority Priority { get; set; }

        [BsonElement("Status")]
        public Status Status { get; set; }

        [BsonElement("DueDate")]
        public DateTime? DueDate { get; set; }

        [BsonElement("CreatedAt")]
        public DateTime? CreatedAt { get; set; }
    }

    public enum Priority
    {
        Low,
        Medium,
        High
    }

    public enum Status
    {
        Pending,
        Complete
    }
}