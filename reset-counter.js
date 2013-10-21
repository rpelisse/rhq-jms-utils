var DEBUG = false

if (args.length != 1) {
    throw "Missing required argument - Queue ID";
}

var queueId=args[0]

var conf = new Configuration()
OperationManager.scheduleResourceOperation(queueId, "resetMessageCounter", 10000, 100, 1, 10000, conf, "Reset Message Counter")
pretty.print("Queue's message [" + queueId + "] counter has been reset.")
