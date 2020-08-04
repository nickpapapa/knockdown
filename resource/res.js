let questions = [
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AES-256 encryption of data stored on any shared storage device",
      "B.Decommissioning of storage devices using industry-standard practices",
      "C.Background virus scans of EBS volumes and EBS snapshots",
      "D.Replication of data across multiple AWS Regions",
      "E.Secure wiping of EBS data when an EBS volume is un-mounted"
    ],
    "detail": "Which is an operational process performed by AWS for data security?",
    "explanation": [
      "Correct answer is B",
      "Refer AWS Security Whitepaper",
      "Option A is wrong as it is User responsibility",
      "Option B is wrong as No virus scan is performed by AWS on User instances",
      "Option C is wrong as AWS does not replicate data across regions unless done by User",
      "Option D is wrong as data is not wiped off on EBS volume when unmounted and it can be remounted on other EC2 instance"
    ],
    "id": 1,
    "saved_answer": "01000",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.ELB DNS record’s TTL is set too high.",
      "B.The new instances are not being added to the ELB during the Auto Scaling cooldown period.",
      "C.The website uses the dynamic content feature of Amazon CloudFront which is keeping connections alive to the ELB.",
      "D.ELB is continuing to send requests with previously established sessions to the same backend instances rather than spreading them out to the new instances. "
    ],
    "detail": "A customer has a web application that uses cookie-based sessions to track logged-in users. It is deployed on AWS using Elastic Load Balancing and Auto Scaling. When load increases, Auto Scaling launches new instances, but the load on the other instances does not decrease; this causes all existing users to have a slow experience. What could be the cause of the poor user experience?",
    "explanation": [
      "Correct answer is D as ELB is stateful and uses cookie-based sessions. So it might be continuing to send requests to previously established sessions and hence existing users having a poor experience.",
      "Option A is wrong as Elastic Load Balancing uses a TTL setting on the DNS record of 60 seconds and there is no mention of what is the configuration.",
      "Option B is wrong as instances would still be added to reduce a load and only new instances after those would depend on the cooldown period.",
      "Option C is wrong as CloudFront will route traffic back to the origin servers depending on the TTL"
    ],
    "id": 2,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Glacier",
      "B.AWS Elastic Transcoder",
      "C.AWS Simple Notification Service",
      "D.AWS Simple Queue Service "
    ],
    "detail": "A user has created a photo editing software and hosted it on EC2. The software accepts requests from the user about the photo format and resolution and sends a message to S3 to enhance the picture accordingly. Which of the below mentioned AWS services will help make a scalable software with the AWS infrastructure in this scenario?",
    "explanation": [
      "Correct answer is D as SQS can be used to build scalable & decoupled software. SQS can be used to store messages, with files in S3 and process and scale accordingly.",
      "Option A is wrong as Glacier is an archival storage solution.",
      "Option B is wrong as Elastic Transcoder is a managed service for transcoding videos in different format.s",
      "Option C is wrong as SNS is publish/subscribe messaging service."
    ],
    "id": 3,
    "saved_answer": "0011",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Access the data through an Internet Gateway.",
      "B.Access the data through a VPN connection.",
      "C.Access the data through a NAT Gateway.",
      "D.Access the data through a VPC endpoint for Amazon S3. "
    ],
    "detail": "An application running on EC2 instances processes sensitive information stored on Amazon S3. The information is accessed over the Internet. The security team is concerned that the Internet connectivity to Amazon S3 is a security risk. Which solution will resolve the security concern?",
    "explanation": [
      "Correct answer is D as VPC endpoints allows EC2 instances to access S3 without traversing through internet.",
      "Refer AWS documentation - VPC Endpoints",
      "A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.",
      "Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.",
      "Option A and C are wrong as NAT Gateways and Internet Gateways route traffic over the Internet to the public endpoint for Amazon S3.",
      "Option B is wrong as there is no way to connect to Amazon S3 via VPN."
    ],
    "id": 4,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a lifecycle hook for your Auto Scaling group",
      "B.Add a scaling-specific cooldown period to the scaling policy",
      "C.Adjust the CPU threshold that triggers a scaling action",
      "D.Attach a new launch configuration to the Auto Scaling group "
    ],
    "detail": "Your Auto Scaling group is configured to launch one new Amazon EC2 instance if the overall CPU load exceeds 65% over a five-minute interval. Occasionally, the Auto Scaling group launches a second Amazon EC2 instance before the first is operational. The second instance is not required and introduces needless compute costs. How can you prevent the Auto Scaling group from launching the second instance?",
    "explanation": [
      "Correct answer is B as you need to adjust the cool down period for the newly added instance to startup and handle traffic.",
      "Refer AWS documentation - Auto Scaling Cooldowns",
      "The Auto Scaling cooldown period is a configurable setting for your Auto Scaling group that helps to ensure that Auto Scaling doesn't launch or terminate additional instances before the previous scaling activity takes effect. After the Auto Scaling group dynamically scales using a simple scaling policy, Auto Scaling waits for the cooldown period to complete before resuming scaling activities. When you manually scale your Auto Scaling group, the default is not to wait for the cooldown period, but you can override the default and honor the cooldown period. If an instance becomes unhealthy, Auto Scaling does not wait for the cooldown period to complete before replacing the unhealthy instance."
    ],
    "id": 5,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Multi-Factor Authentication for your AWS root account.",
      "B.Assign an IAM role to the Amazon EC2 instance",
      "C.Store the AWS Access Key ID/Secret Access Key combination in software comments.",
      "D.Assign an IAM user to the Amazon EC2 Instance. "
    ],
    "detail": "A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure that AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?",
    "explanation": [
      "Correct answer is B as IAM role can be used by EC2 instance to access other AWS services, which help generate temporary short lived credentials",
      "Refer AWS documentation - IAM Role",
      "An IAM role is similar to a user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. Also, a role does not have any credentials (password or access keys) associated with it. Instead, if a user is assigned to a role, access keys are created dynamically and provided to the user.",
      "Option A is wrong as MFA is to enable two factor authentication",
      "Option C is wrong as storing credentials is not recommended",
      "Option D is wrong as IAM user cannot be assigned to EC2 instance"
    ],
    "id": 6,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Lambda function",
      "B.SQS queue",
      "C.EC2 instance",
      "D.DynamoDB table "
    ],
    "detail": "A web application allows customers to upload orders to an S3 bucket. The resulting Amazon S3 events trigger a Lambda function that inserts a message to an SQS queue. A single EC2 instance reads messages from the queue, processes them, and stores them in a DynamoDB table partitioned by unique order ID. Next month traffic is expected to increase by a factor of 10 and a Solutions Architect is reviewing the architecture for possible scaling problems. Which component is MOST likely to need re-architecting to be able to scale to accommodate the new traffic?",
    "explanation": [
      "Correct answer is C as a single EC2 instance is not scalable and the architecture needs to be improved using Auto Scaling to scale up or down as the demand changes.",
      "Option B and D are AWS managed services and scale as per the configuration and demand.",
      "Option A is wrong as Lambda function scales as per the incoming demand."
    ],
    "id": 7,
    "saved_answer": "0010",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable AWS CloudTrail to audit all Amazon S3 bucket access.",
      "B.Enable server access logging for all required Amazon S3 buckets",
      "C.Enable the Requester Pays option to track access via AWS Billing",
      "D.Enable Amazon S3 event notifications for Put and Post. "
    ],
    "detail": "A customer wants to track access to their Amazon Simple Storage Service (S3) buckets and also use this information for their internal security and access audits. Which of the following will meet the Customer requirement?",
    "explanation": [
      "Correct answer is B",
      "In order to track requests for access to your bucket, you can enable access logging. Each access log record provides details about a single access request, such as the requester, bucket name, request time, request action, response status, and error code, if any. Access log information can be useful in security and access audits",
      "Refer to AWS documentation for S3 Server logs",
      "Option A is wrong as CloudTrail would only give information for the API calls to S3 and not the individual access information",
      "Option C is wrong as it only helps handle billing if you want the user to pay for the object access",
      "Option D is wrong as event notifications does not cover all the information"
    ],
    "id": 8,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Disable sticky sessions",
      "B.Reduce the frequency of the health checks",
      "C.Enable cross zone load balancer",
      "D.Amazon recommends to use two availability zone behind ELB "
    ],
    "detail": "You have EC2 instances in three availability zones, with a load balancer configured on all the three AZs. You observe that one availability zone is receiving more traffic as compared to other AZs, how can you solve this problem effectively",
    "explanation": [
      "Correct answer is A asSticky Sessions may cause the users to be routed to the same instances.",
      "Option B is wrong as reducing frequency of health checks would only help determining whether the instance is healthy or not. And it would be the same for all the instances across AZs",
      "Option C is wrong as enabling cross zone load balancer would only help route traffic equally across instances and not the AZs, which seems not to be the case here.",
      "Option D is wrong as AWS recommends spreading you instances across all available AZs to make the application HA"
    ],
    "id": 9,
    "saved_answer": "0010",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Encrypt the volume using the S3 server-side encryption service",
      "B.Attach the volume to an instance using EC2’s SSL interface.",
      "C.Create an IAM policy that restricts read and write access to the volume.",
      "D.Use EBS encryption",
      "E.Use an encrypted file system on top of the EBS volume "
    ],
    "detail": "How can you secure data at rest on an EBS volume?",
    "explanation": [
      "Correct answer is D as EBS encryption can be used to encrypt EBS volumes.",
      "EBS encryption was launched some time back by AWS. Before the EBS encryption, Option E was the correct answer, as you need to use encrypted file system over EBS volume.",
      "Until today, you needed third-party security tools to encrypt data for EBS volumes. With Amazon EBS encryption, you can now create an encrypted EBS volume and attach it to a supported instance type. Data on the volume, disk I/O, and snapshots created from the volume are then all encrypted. The encryption occurs on the servers that host the EC2 instances, providing encryption of data as it moves between EC2 instances and EBS storage. EBS encryption is based on the industry standard AES-256 cryptographic algorithm.",
      "Option A is wrong as S3 - SSE does not work with EBS.",
      "Option B is wrong as SSL is for data in transit.",
      "Option C is wrong as IAM policy can't restrict read & write access to EC2."
    ],
    "id": 10,
    "saved_answer": "10000",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.A standalone Amazon EC2 instance",
      "B.Amazon RDS in a Multi-AZ configuration",
      "C.Amazon EC2 instances in a replication configuration utilizing a single Availability Zone",
      "D.Amazon EC2 instances in a replication configuration utilizing two different Availability Zones "
    ],
    "detail": "A client application requires operating system privileges on a relational database server. What is an appropriate configuration for highly available database architecture?",
    "explanation": [
      "Key point here is to design a HA solution Database solution with operating system privileges.",
      "Correct answer is D as RDS is a managed service from AWS and it does not provide operating system privileges and for HA there need to be instances in at least 2 AZs",
      "Option A is wrong as single instance does not provide HA",
      "Option B is wrong as RDS does not provide operating system privileges.",
      "Option C is wrong as single AZ does not provide HA"
    ],
    "id": 11,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable enhanced networking",
      "B.Use Amazon S3 multipart upload",
      "C.Leveraging Amazon CloudFront, use the HTTP POST method to reduce latency.",
      "D.Use Amazon Elastic Block Store Provisioned IOPS and use an Amazon EBS-optimized instance "
    ],
    "detail": "You have an application running on an Amazon Elastic Compute Cloud instance, that uploads 5 GB video objects to Amazon Simple Storage Service (S3). Video uploads are taking longer than expected, resulting in poor application performance. Which method will help improve performance of your application?",
    "explanation": [
      "Correct answer is B as Multipart upload allows you to upload a single object as a set of parts and in parallel. Each part is a contiguous portion of the object's data. You can upload these object parts independently and in any order. If transmission of any part fails, you can retransmit that part without affecting other parts. After all parts of your object are uploaded, Amazon S3 assembles these parts and creates the object. In general, when your object size reaches 100 MB, you should consider using multipart uploads instead of uploading the object in a single operation.",
      "Refer to AWS documentation for S3 Multipart upload",
      "Option A & D is wrong as enhanced networking, IOPS, EBS optimized helps improve the performance within the AWS network for the EC2 instances",
      "Option C is wrong as CloudFront allows uploading objects from global locations a bit smoother but would not improve the S3 upload time"
    ],
    "id": 12,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS",
      "B.Amazon S3",
      "C.Amazon EFS",
      "D.Amazon DynamoDB "
    ],
    "detail": "You have been asked to architect a life system for user’s home directories. The solution must be accessible simultaneously to individuals across an organization. Users and groups must have permissions defined at the file or directory level. What AWS service can meet all of these requirements?",
    "explanation": [
      "Correct answer is C as EFS is ideal solution to create user home directories and accessible across individuals across organizations, with the ability to configure it.",
      "Refer AWS EFS FAQs & Create Writable Per-User directories",
      "Q. What use cases is Amazon EFS intended for?",
      "Amazon EFS is designed to provide performance for a broad spectrum of workloads and applications, including Big Data and analytics, media processing workflows, content management, web serving, and home directories."
    ],
    "id": 13,
    "saved_answer": "0010",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.On-Demand Instances",
      "B.Spot Instances + On-Demand Instances",
      "C.Reserved Instances (3 year contract)",
      "D.Dedicated Instances "
    ],
    "detail": "Your company is running an online sale over the coming weekend, and you will need additional compute resources to carry the additional load. If the availability of these additional instances must be guaranteed for the duration of the sale, what is the most cost-effective EC2 pricing option for this job?",
    "explanation": [
      "Correct answer is A as On Demand instances would help provision extra capacity with the availability of these additional instances guaranteed as compared to the Spot instances.",
      "Refer AWS documentation - EC2 Purchasing Options",
      "Option B is wrong as Spot instances might be cost effective but does not guarantee availability",
      "Option C is wrong as using Reserved instances is not cost effective",
      "Option D is wrong as Dedicated instances just provided isolated hardware separated from other clients and has most cost."
    ],
    "id": 14,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Directory Service AD Connector",
      "B.AWS Directory Service Simple AD",
      "C.AWS Identity and Access Management groups",
      "D.AWS Identity and Access Management roles",
      "E.AWS Identity and Access Management users "
    ],
    "detail": "A company is preparing to give AWS Management Console access to developers. Company policy mandates identity federation and role-based access control. Roles are currently assigned using groups in the corporate Active Directory. What combination of the following will give developers access to the AWS console? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D as AD connector is required to connect to on-premises Active Directory and IAM Role can be used for Identity Provider and Federation.",
      "Refer AWS blog - How to connect on-premises active directory using AD Connector",
      "AD Connector is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory without caching any information in the cloud",
      "Your end users and IT administrators can use their existing corporate credentials to log on to AWS applications such as Amazon WorkSpaces, Amazon WorkDocs, or Amazon WorkMail.",
      "You can manage AWS resources like Amazon EC2 instances or Amazon S3 buckets through IAM role-based access to the AWS Management Console.",
      "Option B is wrong as Simple AD is a standalone AD setup and does not allow connection to the on-premises AD.",
      "Option C & E are wrong as users and groups do not work."
    ],
    "id": 15,
    "saved_answer": "01001",
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Serialize the image and store it in multiple DynamoDB tables ",
      "B.Create an \"Images\" DynamoDB table to store the Image with a foreign key constraint to the \"Product\" table. ",
      "C.Add an image data type to the \"Product\" table to store the images in binary format ",
      "D.Store the images in Amazon S3 and add an S3 URL pointer to the \"Product\" table item for each image "
    ],
    "detail": "Company ABCD has recently launched an online commerce site for bicycles on AWS. They have a \"Product\" DynamoDB table that stores details for each bicycle, such as, manufacturer, color, price, quantity and size to display in the online store. Due to customer demand, they want to include an image for each bicycle along with the existing details. Which approach below provides the least impact to provisioned throughput on the \"Product\" table?",
    "explanation": [
      "Correct answer is D as DynamoDB is not ideal for image storage and the image should rather be stored in S3, with the image pointer in DynamoDB.",
      "Refer AWS Storage Options Whitepaper",
      "Option A & B are wrong as DynamoDB is not ideal for image storage.",
      "Option C is wrong as there is no image data type"
    ],
    "id": 16,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Host the website on an Amazon EC2 instance with ELB and Auto scaling and map a Route 53 alias record to the ELB endpoint. ",
      "B.Host the website using AWS Elastic Beanstalk and map a Route 53 alias record to the Beanstalk stack. ",
      "C.Host the website on an Amazon EC2 instance and map a Route 53 alias record to the public IP address of the Amazon EC2 instance. ",
      "D.Serve the website from an Amazon S3 bucket and map a Route 53 alias record to the website endpoint. ",
      "E.Create a Route 53 hosted zone and set the NS records of the domain to use Route 53 name servers. "
    ],
    "detail": "A Company is launching a static website using the zone apex (mycompany.com). The company wants to use Amazon Route 53 for DNS. Which steps should the company perform to implement a scalable and cost-effective solution? (Select TWO)",
    "explanation": [
      "Correct answers are D & E as the static website can be hosted on S3 providing scale as well as a cost effective solution. An Alias record with hosted zone can be created in Route 53 to point the domain to S3.",
      "Refer AWS documentation - Route 53 Routing to S3 bucket",
      "Amazon Simple Storage Service (Amazon S3) provides secure, durable, highly scalable cloud storage. You can configure an S3 bucket to host a static website that can include web pages and client-side scripts. (S3 doesn't support server-side scripting.)",
      "To route domain traffic to an S3 bucket, use Amazon Route 53 to create an alias record that points to your bucket. An alias record is a Route 53 extension to DNS. It's similar to a CNAME record, except you can create an alias record both for the root domain, such as example.com, and for subdomains, such as www.example.com. You can create CNAME records only for subdomains."
    ],
    "id": 17,
    "saved_answer": "10010",
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use ElastiCache to store critical pieces of data in memory for low-latency access.",
      "B.Use Amazon SQS to distribute messages among workers that are less busy",
      "C.Use an Auto Scaling group and ELB Classic Load Balancer for the application tier.",
      "D.Use Data Pipeline to replicate your relational data across all of your web tier nodes "
    ],
    "detail": "You are architecting a web application that will be backed by a relational database. The application will be read-heavy, and database queries will be computationally intensive. How can you improve overall application response for users?",
    "explanation": [
      "Correct answer is A as ElastiCache can help improve performance by caching the results as the operations are mainly read-heavy, and database queries will be computationally intensive",
      "Refer AWS Storage Options Whitepaper",
      "ElastiCache improves application performance by storing critical pieces of data in memory for low-latency access. It is frequently used as a database front end in read-heavy applications, improving performance and reducing the load on the database by caching the results of I/O-intensive queries. It is also frequently used to manage web session data, to cache dynamically-generated web pages, and to cache results of computationally-intensive calculations, such as the output of recommendation engines. For applications that need more complex data structures than strings, such as lists, sets, hashes, and sorted sets, the Redis engine is often used as an in-memory NoSQL database."
    ],
    "id": 18,
    "saved_answer": "1000",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use multi-part upload.",
      "B.Add a random prefix to the key names",
      "C.Amazon S3 will automatically manage performance at this scale.",
      "D.Use a predictable naming scheme, such as sequential numbers or date time sequences, in the key names "
    ],
    "detail": "You are designing a web application that stores static assets in an Amazon Simple Storage Service (S3) bucket. You expect this bucket to immediately receive over 150 PUT requests per second. What should you do to ensure optimal performance?",
    "explanation": [
      "Correct answer is B",
      "NOTE - Circa July 2018 as per recent AWS announcement, there has been vast change in the S3 performance and the documentation has been updated.",
      "Refer AWS documentation - S3 Performance",
      "One way to introduce randomness to key names is to add a hash string as prefix to the key name. For example, you can compute an MD5 hash of the character sequence that you plan to assign as the key name",
      "Option A is wrong as multi part upload only helps improve object upload times",
      "Option C is wrong as \nAmazon S3 scales to support very high request rates. However, If your workload in an Amazon S3 bucket routinely exceeds 100 PUT/LIST/DELETE requests per second or more than 300 GET requests per second\n it is recommended to implement best practices.",
      "Option D is wrong as using predictable naming scheme would reduce the performance"
    ],
    "id": 19,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an RDS read-replica and redirect half of the database read request to it",
      "B.Cache database queries in amazon ElastiCache",
      "C.Setup RDS in multi-availability zone mode.",
      "D.Shard the database and distribute loads between shards.",
      "E.Use amazon CloudFront to cache database queries. "
    ],
    "detail": "You are running a 2-tier app with the following: an ELB, three web app server on EC2, and 1 MySQL RDS db. With grown load, db queries take longer and longer and slow down the overall response time for user request. What options could speed up performance? (Choose 3)",
    "explanation": [
      "Correct answers are A, B & D as the main issue is slow performance from DB.",
      "Read Replicas, ElastiCache can help improve Read performance while Sharding can help improve write performance",
      "Option C is wrong RDS Multi-AZ is more of a High Availability solution",
      "Option E is wrong as CloudFront cannot cache database queries."
    ],
    "id": 20,
    "saved_answer": "11001",
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a duplicate EC2 Instance in another AZ. Keep it in the shutdown state. When required, bring it back up.",
      "B.Backup the EBS data volume. If the instance fails, bring up a new EC2 instance and attach the volume.",
      "C.Store the EC2 data on S3. If the instance fails, bring up a new EC2 instance and restore the data from S3.",
      "D.Create an AMI of the EC2 Instance and copy it to another region. "
    ],
    "detail": "You have an EC2 Instance in a particular region. This EC2 Instance has a preconfigured software running on it. You have been requested to create a disaster recovery solution in case the instance in the region fails. Which of the following is the best solution?",
    "explanation": [
      "Correct answer is D as AMIs can be created with software installed and as AMIs are regional scoped they can be copied to another region for launching instances.",
      "Refer AWS documentation - AMI Cross Region Copy",
      "Copying an AMI across geographically diverse regions provides the following benefits:",
      "Option A is wrong as it is an AZ does not give HA when the region fails,",
      "Option B is wrong as the preconfigured software could have settings on the root volume and the snapshot needs to be copied across region to recreate volumes.",
      "Option C is wrong as this is a long and inefficient way to restore a failed instance."
    ],
    "id": 21,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Bastion hosts are instances that sit within your private subnet and are typically accessed using SSH or RDP. Once remote connectivity has been established with the bastion host, it then acts as a ‘jump’ server, allowing you to use SSH or RDP to log into other instances (within public subnets) deeper within your network.",
      "B.Bastion hosts are instances that sit within your private subnet and are typically accessed using SSH or RDP. Once remote connectivity has been established with the bastion host, it then acts as a 'jump' server, allowing you to use HTTPS to log into other instances (within public subnets) deeper within your network.",
      "C.Bastion hosts are instances that sit within your public subnet and are typically accessed using SSH or RDP. Once remote connectivity has been established with the bastion host, it then acts as a ‘jump’ server, allowing you to use HTTPS to log into other instances (within private subnets) deeper within your network.",
      "D.Bastion hosts are instances that sit within your public subnet and are typically accessed using SSH or RDP. Once remote connectivity has been established with a bastion host, it then acts as a ‘jump’ server, allowing you to use SSH or RDP to log into other instances (within private subnets) deeper within your network. "
    ],
    "detail": "Which of the following best describes what \"bastion hosts\" are?",
    "explanation": [
      "Correct answer is D as Bastion hosts act as a jump server in the public subnet, to allow SSH/RDP access to the instances in the private subnets.",
      "Option A & B are wrong as Bastion should be in public subnet and internet accessible.",
      "Option C is wrong as Bastion allows only SSH/RDP and not HTTPS connections."
    ],
    "id": 22,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create VPC flow logs on the subnet",
      "B.Enable source destination check on private Amazon EC2 instances.",
      "C.Enable AWS CloudTrail logging and specify an Amazon S3 bucket for storing log files.",
      "D.Create an Amazon CloudWatch logs to capture packet information. "
    ],
    "detail": "A Company requires that the sources, destination, and protocol of all IP packets be recorded when traversing a private subnet. What is the MOST secure and reliable method of accomplishing this goal?",
    "explanation": [
      "Correct answer is A as only VPC flows allows you to track and capture all information going into and out of network interfaces within a VPC.",
      "Refer AWS documentation - VPC Flow Logs",
      "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data can be published to Amazon CloudWatch Logs and Amazon S3. After you've created a flow log, you can retrieve and view its data in the chosen destination.",
      "Flow logs can help you with a number of tasks; for example, to troubleshoot why specific traffic is not reaching an instance, which in turn helps you diagnose overly restrictive security group rules. You can also use flow logs as a security tool to monitor the traffic that is reaching your instance.",
      "Option B is wrong as Source/Destination check does not track packets information. Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives.",
      "Option C is wrong as CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure",
      "Option D is wrong as CloudWatch cannot be used to track packet information and is a monitoring and management service."
    ],
    "id": 23,
    "saved_answer": "1000",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Put the access key in an S3 bucket and retrieve the access key on boot from the instance.",
      "B.Pass the access key to the instances through instance user data.",
      "C.Obtain the access key from a key server launched in a private subnet.",
      "D.Create an IAM role with permissions to access the table and launch all instances with the new role. "
    ],
    "detail": "A company is storing an access key (access key ID and secret access key) in a text file on a custom AMI. The company uses the access key to access DynamoDB tables from instances created from the AMI. The security team has mandated a more secure solution. Which solution will meet the security team’s mandate?",
    "explanation": [
      "Correct answer is D as IAM roles for EC2 instances allow applications running on the instance to access AWS resources without having to create and store any access keys.",
      "Refer AWS documentation - IAM Best Practices",
      "Applications that run on an Amazon EC2 instance need credentials in order to access other AWS services. To provide credentials to the application in a secure way, use IAM \nroles. A role is an entity that has its own set of permissions, but that isn't a user or group. Roles also don't have their own permanent set of credentials the way IAM users do. In the case of Amazon EC2, IAM dynamically provides temporary credentials to the EC2 instance, and these credentials are automatically rotated for you.",
      "When you launch an EC2 instance, you can specify a role for the instance as a launch parameter. Applications that run on the EC2 instance can use the role's credentials when they access AWS resources. The role's permissions determine what the application is allowed to do."
    ],
    "id": 24,
    "saved_answer": "0001",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Each front-end node should send votes to an Amazon SQS queue. Provision worker instances to read the SQS queue and process message information into the RDBMS database. ",
      "B.As the load on the database increases, horizontally-scale the RDBMS database with additional memory-optimized instances. When voting has ended, scale down the additional instances. ",
      "C.Re-provision the RDBMS database with larger, memory-optimized instances. When voting end, re-provision the back-end database with smaller instances.",
      "D.Send votes from each front-end node to Amazon DynamoDB. Provision worker instances to process the votes in DynamoDB into the RDBMS database. "
    ],
    "detail": "An organization runs an online voting system for a television program. During broadcast, hundreds of thousands of votes are submitted within minutes and sent to a front-end fleet of auto-scaled Amazon EC2 instances. The EC2 instances push the votes to an RDBMS database. The database is unable to keep up with the front-end connection request. What is the MOST efficient and cost-effective way of ensuring that votes are processed in a timely manner?",
    "explanation": [
      "Correct answer is A as SQS can help provide loose coupling and act as a buffer for database. Also, as the spike is temporary there is no need to scale the RDBMS.",
      "Option B is wrong as Auto Scaling does not apply to RDBMS.",
      "Option C is wrong as the RDBMS cannot be re-provisioned back with smaller instance.",
      "Option D is wrong as  DynamoDB would provide a separate duplicate persistent data store, which would be more expensive to input process and delete the data."
    ],
    "id": 25,
    "saved_answer": "1000",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Insert a timestamp for each record and then scan the entire table for the timestamp as per the last 2 hours.",
      "B.Create another DynamoDB table with the records modified in the last 2 hours.",
      "C.Use DynamoDB Streams to monitor the changes in the DynamoDB table.",
      "D.Transfer records to S3 which were modified in the last 2 hours. "
    ],
    "detail": "An application currently writes a large number of records to a DynamoDB table in one region. There is a requirement for a secondary application to retrieve new records written to the DynamoDB table every 2 hours and process the updates accordingly. Which of the following is an ideal way to ensure that the secondary application gets the relevant changes from the DynamoDB table?",
    "explanation": [
      "Correct answer is C as DynamoDB streams helps monitor the change in the DynamoDB table. Second application can check the stream for the changes.",
      "Refer AWS documentation - DynamoDB Streams",
      "DynamoDB Streams enables solutions such as these, and many others. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information in a log for up to 24 hours. Applications can access this log and view the data items as they appeared before and after they were modified, in near real time.",
      "A \nDynamoDB stream is an ordered flow of information about changes to items in an Amazon DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.",
      "Whenever an application creates, updates, or deletes items in the table, DynamoDB Streams writes a stream record with the primary key attribute(s) of the items that were modified. A \nstream record contains information about a data modification to a single item in a DynamoDB table. You can configure the stream so that the stream records capture additional information, such as the \"before\" and \"after\" images of modified items."
    ],
    "id": 26,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.A custom bucket policy limited to the Amazon S3 API in the Amazon Glacier archive “company-backup”",
      "B.A custom bucket policy limited to the Amazon S3 API in “company-backup”",
      "C.A custom IAM user policy limited to the Amazon S3 API for the Amazon Glacier archive “company-backup”.",
      "D.A custom IAM user policy limited to the Amazon S3 API in “company-backup”. "
    ],
    "detail": "A customer wants to leverage Amazon Simple Storage Service (S3) and Amazon Glacier as part of their backup and archive infrastructure. The customer plans to use third-party software to support this integration. Which approach will limit the access of the third party software to only the Amazon S3 bucket named “company-backup”?",
    "explanation": [
      "Correct answer is D as the IAM policy can be granted to S3 and proper lifecycle rules configured to archive the data to Glacier",
      "Refer to the S3 IAM Policy",
      "Option A and C are wrong as they target Glacier.",
      "Option B is wrong as Bucket policy needs a (existing) principal, user policy needs a (existing) user/group/role"
    ],
    "id": 27,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM user and ensure the EC2 Instances use the IAM user credentials to access the data in the bucket.",
      "B.Create an IAM Role and ensure the EC2 Instances use the IAM Role to access the data in the bucket.",
      "C.Use S3 Cross-Region Replication to replicate the objects so that the integrity of data is maintained.",
      "D.Use a S3 bucket policy that prevents accidental deletions",
      "E.Configure S3 to use versioning and enable Multi-Factor Authentication (MFA) protected access "
    ],
    "detail": "Your company has a set of EC2 Instances that access data objects stored in an S3 bucket. Your IT Security department is concerned about the security of this architecture and wants you to implement the following: 1) Ensure that the EC2 Instance securely accesses the data objects stored in the S3 bucket 2) Prevent accidental deletion of objects Which of the following would help fulfill the requirements of the IT Security department in a cost-effective way? Choose 2 answers",
    "explanation": [
      "Correct answer is B & E",
      "Refer AWS documentation - IAM Best Practices & S3 Versioning",
      "S3 Object versioning prevents you from accidentally overwriting or deleting objects and affords you the opportunity to retrieve a previous version of an object.",
      "Applications that run on an Amazon EC2 instance need credentials in order to access other AWS services. To provide credentials to the application in a secure way, use IAM \nroles. A role is an entity that has its own set of permissions, but that isn't a user or group. Roles also don't have their own permanent set of credentials the way IAM users do. In the case of Amazon EC2, IAM dynamically provides temporary credentials to the EC2 instance, and these credentials are automatically rotated for you.",
      "Option A is wrong as using IAM user is not secure and not a best practice",
      "Option C is wrong as Cross region replication creates duplicate objects increasing cost as well as they do not prevent deletion from both regions.",
      "Option D is wrong as bucket policies cannot prevent accidental deletions and recovery"
    ],
    "id": 28,
    "saved_answer": "01010",
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use Kubernetes for container orchestration and Reserved instances for all underlying instances.",
      "B.Use ECS orchestration and Reserved Instances for all underlying instances.",
      "C.Use Docker for container orchestration and a combination of Spot and Reserved Instances for the underlying instances.",
      "D.Use ECS for container orchestration and a combination of Spot and Reserved Instances for the underlying instances. "
    ],
    "detail": "A company is planning to use Docker containers and necessary container orchestration tools for their long term batch processing requirements. There is a requirement for batch processing for both critical and non-critical data. Which of the following is the best implementation step for this requirement, to ensure that cost is effectively managed?",
    "explanation": [
      "Correct answer is D as it is cost effective to use reserved instances for long term critical batch and spot instances for non critical batch processing requirements. ECS can be used for container orchestration and support spot instances",
      "Refer AWS documentation - ECS Spot Instances",
      "Option A & B are wrong as they are not cost effective with only reserved instances.",
      "Option C is wrong as Docker cannot perform container orchestration."
    ],
    "id": 29,
    "saved_answer": "0010",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Store data in an EBS volume and create snapshots once a week.",
      "B.Store data in an S3 bucket and enable versioning.",
      "C.Store data in two S3 buckets in different AWS regions.",
      "D.Store data on EC2 instance storage. "
    ],
    "detail": "Company sales people upload their sales figures daily. A Solutions Architect needs a durable storage solution for these documents that also protects against users accidentally deleting important documents. Which action will protect against unintended user actions?",
    "explanation": [
      "Correct answers are B as Object versioning would help recovery of object in case of accidental deletes or overwriting.",
      "Refer AWS documentation - S3 Versioning",
      "Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite. For example:"
    ],
    "id": 30,
    "saved_answer": "0100",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Add tags to the instances marking each environment and then segregate access using IAM Policies.",
      "B.Add Userdata to the underlying instances to mark each environment.",
      "C.Add Metadata to the underlying instances to mark each environment.",
      "D.Add each environment to a separate Auto Scaling Group. "
    ],
    "detail": "A company is planning on hosting their development, test and production applications on EC2 Instances in AWS. They are worried about how access control would be given to relevant IT Admins for each of the above environments. As an architect, what would you suggest for managing the relevant accesses?",
    "explanation": [
      "Correct answer is A as tags to resources with IAM policies can help in access control of resources belonging to different environments.",
      "Refer AWS documentation - Tags",
      "A tag is a label that you assign to an AWS resource. Each tag consists of a \nkey and an optional \nvalue, both of which you define.",
      "Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. This is useful when you have many resources of the same type—you can quickly identify a specific resource based on the tags you've assigned to it. For example, you could define a set of tags for your account's Amazon EC2 instances that helps you track each instance's owner and stack level.",
      "We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add."
    ],
    "id": 31,
    "saved_answer": "1000",
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon RDS ",
      "B.Amazon Redshift ",
      "C.Amazon DynamoDB ",
      "D.Amazon S3 "
    ],
    "detail": "A data analytics startup company asks a Solutions Architect to recommend an AWS data store option for indexed data. The data processing engine will generate an input more than 64 TB of processed data every day, with item sizes reaching up to 300KB. The startup is flexible with data storage models and is more interested in a database that requires minimal effort to scale with a growing dataset size. Which AWS data store service should the Architect recommend?",
    "explanation": [
      "Correct answer is C as DynamoDB would help store the data indexed, while scaling automatically. The cumulative size of attributes per item must fit within the maximum DynamoDB item size (400 KB). There is no practical limit on a table's size. Tables are unconstrained in terms of the number of items or the number of bytes.",
      "Option A is wrong as RDS would not scale with 64TB data each day. Also, the Total storage for all DB instances limit is 100TiB.",
      "Option B is wrong as Redshift is more of a data analytics solution and it does not scale automatically. It needs to be resized as the demand changes.",
      "Option D is wrong as S3 would not work for indexed data."
    ],
    "id": 32,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Multiple Amazon EBS volume with snapshots",
      "B.A single Amazon Glacier vault",
      "C.A single Amazon S3 bucket",
      "D.Multiple instance stores "
    ],
    "detail": "You are building an automated transcription service in which Amazon EC2 worker instances process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know what the storage capacity requirements are. Which storage option is both cost-efficient and scalable?",
    "explanation": [
      "Key point here is the storage needs to be durable, cost-efficient and scalable",
      "Correct answer is C as S3 provides a durable, cost efficient and scalable storage.",
      "Option A is wrong as EBS volumes are durable, however are expensive.",
      "Option B is wrong as Glacier although durable, cost-efficient and scalable is more of an archival solution with infrequently accessed data needs",
      "Option D is wrong as instance store are not durable as they are linked to the lifecycle of the instance. The data is lost if the EC2 instance is terminated."
    ],
    "id": 33,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Store data in a file system backed by Amazon Elastic File System (EFS) ",
      "B.Store data in Amazon S3 and use a third-party solution to expose Amazon S3 as a file system to the database server. ",
      "C.Store data in Amazon DynamoDB and emulate relational database semantics. ",
      "D.Stripe data across multiple Amazon EBS volumes using RAID 0 "
    ],
    "detail": "A Solutions Architect is designing the storage layer for a production relational database. The database will run on Amazon EC2. The database is accessed by an application that performs intensive read and writes, so the database requires the LOWEST random I/O latency. Which data storage method fulfills the above requirements?",
    "explanation": [
      "Correct answer is D as EBS volumes with RAID 0 would help scale and provide lowest random I/O.",
      "Refer AWS documentation - EC2 Raid Config",
      "With Amazon EBS, you can use any of the standard RAID configurations that you can use with a traditional bare metal server, as long as that particular RAID configuration is supported by the operating system for your instance. This is because all RAID is accomplished at the software level. For greater I/O performance than you can achieve with a single volume, RAID 0 can stripe multiple volumes together; for on-instance redundancy, RAID 1 can mirror two volumes together.",
      "Option A is wrong as EFS is not ideal for database file system.",
      "Option B is wrong as S3 cannot be used a file system for database server.",
      "Option C is wrong as DynamoDB cannot be used a relational database."
    ],
    "id": 34,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a Network Load balancer.",
      "B.Configure an Application Load Balancer.",
      "C.Configure a Classic Load Balancer.",
      "D.Configure a Layer-4 Load Balancer. "
    ],
    "detail": "A Solutions Architect needs to deploy an HTTP/HTTPS service on Amazon EC2 instances with support for WebSockets using load balancers. How can the Architect meet these requirements?",
    "explanation": [
      "Correct answer is B as Application Load Balancer, unlike Classic and Network Load Balancer, supports WebSockets.",
      "Refer AWS documentation - ELB Application Load Balancer",
      "Application Load Balancers support content-based routing, and supports applications that run in containers. They support a pair of industry-standard protocols (WebSocket and HTTP/2) and also provide additional visibility into the health of the target instances and containers. Web sites and mobile apps, running in containers or on EC2 instances, will benefit from the use of Application Load Balancers.",
      "Options A, C & D are wrong as they do not support WebSockets."
    ],
    "id": 35,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Amazon CloudWatch alarm on an Amazon CloudWatch Logs filter for that message; based on that alarm, trigger an Amazon CloudWatch action to reboot the instance",
      "B.Create an AWS CloudTrail alarm on low CPU; based on that alarm, trigger an Amazon SNS message to the Operations team ",
      "C.Create an Amazon CloudWatch alarm on instance memory usage; based on that alarm, trigger an Amazon CloudWatch action to reboot the instance",
      "D.Create an AWS CloudTrail alarm to detect the deadlock, based on the alarm, trigger an Amazon SNS message to the Operations team "
    ],
    "detail": "An application on an Amazon EC2 instance routinely stops responding to requests and requires a reboot to recover. The application logs are already exported into Amazon CloudWatch, and you notice that the problem consistently follows the appearance of a specific message in the log. The application team is working to address the bug, but has not provided a date for the fix. What work around can you implement to automate recovery of the instance until the fix is deployed?",
    "explanation": [
      "Correct answer is A as you can confirm a CloudWatch alarm on CloudWatch logs to look for the message and reboot the instance.",
      "Refer AWS documentation - CloudWatch logs Monitoring",
      "Option C is wrong as there is no memory condition, it would not help handle the reboot.",
      "Option B & D are wrong as CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. It does not provide alarms."
    ],
    "id": 36,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Run the bastion on two instances one in each AZ",
      "B.Run the bastion on an active Instance in one AZ and have an AMI ready to boot up in the event of failure",
      "C.Configure the bastion instance in an Auto Scaling group Specify the Auto Scaling group to include multiple AZs but have a min-size of 1 and max-size of 1",
      "D.Configure an ELB in front of the bastion instance "
    ],
    "detail": "You are designing a system that has a Bastion host. This component needs to be highly available without human intervention. Which of the following approaches would you select?",
    "explanation": [
      "Correct answer is C as Bastion host allows users from external network to be able to login to the instances in private subnets. Bastion host can be made Highly available by having auto scaling in Multiple AZs enabled with min and max as 1, so that if an instance goes down another instance is made available without human intervention.",
      "Option A is wrong as it does not still handle an AZ failure.",
      "Option B is wrong as it would still need manual intervention.",
      "Option D is wrong as ELB is not web access only."
    ],
    "id": 37,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Launch enhanced networking instances in a placement group to support the heavy traffic ",
      "B.Apply Service Oriented Architecture (SOA) principles instead of a 3-tier architecture ",
      "C.Use Elastic Beanstalk to enable blue-green deployment",
      "D.Use ElastiCache as in-memory storage on top of DynamoDB to store user sessions "
    ],
    "detail": "When you are designing to support a 24-hour flash sale, which one of the following methods best describes a strategy to lower the latency while keeping up with unusually heavy traffic?",
    "explanation": [
      "Correct answer is D as ElastiCache with DynamoDB will help provide scalable, faster read/writes and in memory storage to reduce latency",
      "Option A is wrong as only improves internal throughput within EC2 instances",
      "Option B is wrong as just simplifies architecture but does not reduce latency",
      "Option C is wrong as it improves deployment, minimizes downtime for applications and ease of rollback"
    ],
    "id": 38,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Launch the instances in an Auto Scaling group with an Elastic Load Balancing health check.",
      "B.Launch instances in multiple Availability Zones and set the load balancer to Multi-AZ",
      "C.Add CloudWatch alarm actions for each instance to restart if the Status Check (Any) fails",
      "D.Add Route 53 records for each instance with an instance health check "
    ],
    "detail": "A web application runs on 10 EC2 instances launched from single customer Amazon Machine Image (AMI). The EC2 instances are behind an Internet Application Load Balancer. Amazon Route 53 provides DNS for the application. How should a Solutions Architect automate recovery if a web server instance stops replying to requests?",
    "explanation": [
      "Correct answer is A as ELB with Auto Scaling and health checks enabled would help handle the recovery. Auto Scaling would help replace the instance with the AMI specified in the Auto Scaling configuration. ELB would help handle the routing of traffic only to the healthy instances. Route 53 DNS only need to point to ELB.",
      "The health status of an Auto Scaling instance is either healthy or unhealthy. All instances in your Auto Scaling group start in the healthy state. Instances are assumed to be healthy unless Amazon EC2 Auto Scaling receives notification that they are unhealthy. This notification can come from one or more of the following sources: Amazon EC2, Elastic Load Balancing, or a custom health check.",
      "After Amazon EC2 Auto Scaling marks an instance as unhealthy, it is scheduled for replacement. If you do not want instances to be replaced, you can suspend the health check process for any individual Auto Scaling group.",
      "To discover the availability of your EC2 instances, a load balancer periodically sends pings, attempts connections, or sends requests to test the EC2 instances. These tests are called health checks. The status of the instances that are healthy at the time of the health check is InService. The status of any instances that are unhealthy at the time of the health check is OutOfService. The load balancer performs health checks on all registered instances, whether the instance is in a healthy state or an unhealthy state.",
      "The load balancer routes requests only to the healthy instances. When the load balancer determines that an instance is unhealthy, it stops routing requests to that instance. The load balancer resumes routing requests to the instance when it has been restored to a healthy state.",
      "The load balancer checks the health of the registered instances using either the default health check configuration provided by Elastic Load Balancing or a health check configuration that you configure.",
      "If you have associated your Auto Scaling group with a Classic load balancer, you can use the load balancer health check to determine the health state of instances in your Auto Scaling group. By default, an Auto Scaling group periodically determines the health state of each instance.",
      "Option B is wrong as ELB and Auto Scaling in multiple AZs provide HA but does not help recovery if health checks are not configured.",
      "Option C is wrong as CloudWatch alarm is not needed for each instance as with auto scaling group the instances would keep on changing.",
      "Option D is wrong as Route 53 need to point to Application Load Balancer. It does not provide load balancing over instances."
    ],
    "id": 39,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Identity Federation based on AWS STS using an AWS IAM policy for the respective S3 bucket",
      "B.Use ACLs to restrict the access to the selects AWS accounts",
      "C.Set up S3 bucket policies with a conditional statement restricting IP address",
      "D.IAM user per every registered client with an IAM policy that grants S3 access to the respective bucket "
    ],
    "detail": "We have developed a mobile application that gets downloaded several hundred times a week. What authentication method should we enable for the mobile clients to access images that are stored in an AWS S3 bucket that provides us with the highest flexibility and rotates credentials? Choose the correct answer:",
    "explanation": [
      "Correct answer is A as it's a mobile application, the user can be authenticated using an Identity Federation using STS and granted access only to the respective S3 bucket.",
      "Refer AWS documentation - IAM Web Identity Federation"
    ],
    "id": 40,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create a secondary S3 bucket. Then, use an AWS Lambda to sync the contents to the primary bucket.",
      "B.Use Auto Scaling and increase the capacity as demand increased",
      "C.Use Pre-Signed URLs instead to upload the images.",
      "D.Use ECS Containers to upload the images. "
    ],
    "detail": "A company is building an expense tracking system with the ability for the users to upload images. The existing web servers are just about loaded and as an architect, you do not want to make use of the existing web server to upload the images due to the additional load that it would incur. How can this be handled in a cost-effective manner?",
    "explanation": [
      "Correct answer is C as the solution is looking for an option for reduce load on the web servers, a pre-signed url can be generated for the uploads which will allow the users to directly upload to S3 without having to route the request through the web servers.",
      "Refer AWS documentation - S3 PreSigned Upload",
      "Option A & B are wrong as the upload still needs to happen through the Web servers.",
      "Option D is wrong as ECS containers would need additional hardware and hence increase the cost and time."
    ],
    "id": 41,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use AWS API Gateway with CloudFront",
      "B.Enable API Gateway Caching",
      "C.Enable API Stages",
      "D.Enable CORS configuration for the API Gateway "
    ],
    "detail": "You are currently architecting a solution for your company that will make use of API gateways. You want to ensure that you design the API gateway in such a way that latency to requests to the API gateway is reduced. Which of the following things can you ensure is carried out to fulfil this requirement.",
    "explanation": [
      "Correct answer is B as API Gateway Caching helps cache the endpoint's response and improving performance.",
      "Refer AWS documentation - API Gateway Caching",
      "You can enable API caching in Amazon API Gateway to cache your endpoint’s response. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of the requests to your API. When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. API Gateway then responds to the request by looking up the endpoint response from the cache instead of making a request to your endpoint. The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.",
      "Option A is wrong as CloudFront is already used along with the API gateway",
      "Option C is wrong as API stages are used to deploy different versions of APIs",
      "Option D is wrong as CORS enable cross domain access of API’s"
    ],
    "id": 42,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Glacier",
      "B.AWS Elastic Transcoder",
      "C.AWS Simple Notification Service",
      "D.AWS Simple Queue Service "
    ],
    "detail": "A user has created a photo editing software and hosted it on EC2. The software accepts requests from the user about the photo format and resolution and sends a message to S3 to enhance the picture accordingly. Which of the below mentioned AWS services will help make a scalable software with the AWS infrastructure in this scenario?",
    "explanation": [
      "Correct answer is D as SQS can be used to build scalable & decoupled software. SQS can be used to store messages, with files in S3 and process and scale accordingly."
    ],
    "id": 43,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Maintain traffic history on each Amazon EC2 instance. ",
      "B.Enable Amazon VPC Flow Logs. ",
      "C.Enable CloudTrail for VPC",
      "D.Enable Amazon VPC Network Logs "
    ],
    "detail": "A Solutions Architect is designing a solution that retains traffic information between network interfaces. This traffic information will be monitored for anomalies by an InfoSec team using Amazon CloudWatch. What approach should the Architect take?",
    "explanation": [
      "Correct answer is B as only VPC Flow Logs can help track the traffic between network interfaces in the VPC.",
      "Refer AWS documentation - VPC Flow Logs",
      "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data can be published to Amazon CloudWatch Logs and Amazon S3. After you've created a flow log, you can retrieve and view its data in the chosen destination.",
      "Flow logs can help you with a number of tasks; for example, to troubleshoot why specific traffic is not reaching an instance, which in turn helps you diagnose overly restrictive security group rules. You can also use flow logs as a security tool to monitor the traffic that is reaching your instance.",
      "Option A is wrong as incoming traffic needs to be captured to be maintained in each EC2 instances. Also, they need to be consolidated at the single external source.",
      "Option C is wrong as CloudTrail does not help track network traffic between VPC. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services",
      "Option D is wrong as there is VPC Network Logs configuration."
    ],
    "id": 44,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Associate AWS KMS metrics with Amazon CloudWatch ",
      "B.Use AWS CloudTrail to log AWS KMS key usage. ",
      "C.Deploy a monitoring agent to the RDS instances. ",
      "D.Poll AWS KMS periodically with a scheduled job. "
    ],
    "detail": "A company is using AWS Key Management Service (KMS) for their secure key management. The company has been recommended that they log all use of their AWS KMS keys. What is the SIMPLEST solution?",
    "explanation": [
      "Correct answer is B as CloudTrail integrates with AWS KMS and helps track all the events that happen with KMS.",
      "Refer AWS documentation - AWS KMS logging with CloudTrail",
      "AWS KMS is integrated with AWS CloudTrail, a service that provides a record of actions performed by a user, role, or an AWS service in AWS KMS. CloudTrail captures all API calls for AWS KMS as events, including calls from the AWS KMS console and from code calls to the AWS KMS APIs. If you create a trail, you can enable continuous delivery of CloudTrail events to an Amazon S3 bucket, including events for AWS KMS. If you don't configure a trail, you can still view the most recent events in the CloudTrail console in Event history. Using the information collected by CloudTrail, you can determine the request that was made to AWS KMS, the IP address from which the request was made, who made the request, when it was made, and additional details."
    ],
    "id": 45,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Randomize the key name prefix",
      "B.Store the event data in separate buckets",
      "C.Randomize the key name suffix",
      "D.Use Amazon S3 Transfer Acceleration "
    ],
    "detail": "A Solutions Architect is designing a solution to store a large quantity of event data in Amazon S3. The architect anticipates that the workload will consistently exceed 100 requests each second. What should the architect do in Amazon S3 to optimize performance?",
    "explanation": [
      "Correct answer is A as randomness helps distribute the objects across multiple partitions, hence improving the performance.",
      "NOTE- Latest enhancements from AWS S3 now provides increased performance to support at least 3,500 requests per second to add data and 5,500 requests per second to retrieve data",
      "S3 Performance has been updated, but this was the recommendations from AWS before.",
      "Amazon S3 maintains an index of object key names in each AWS region. Object keys are stored in UTF-8 binary ordering across multiple partitions in the index. The key name dictates which partition the key is stored in. Using a sequential prefix, such as time stamp or an alphabetical sequence, increases the likelihood that Amazon S3 will target a specific partition for a large number of your keys, overwhelming the I/O capacity of the partition. If you introduce some randomness in your key name prefixes, the key names, and therefore the I/O load, will be distributed across more than one partition.",
      "Example 1: Add a Hex Hash Prefix to Key Name",
      "One way to introduce randomness to key names is to add a hash string as prefix to the key name. For example, you can compute an MD5 hash of the character sequence that you plan to assign as the key name. From the hash, pick a specific number of characters, and add them as the prefix to the key name. The following example shows key names with a four-character hash."
    ],
    "id": 46,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM user with access credentials that are distributed with the mobile app to sign the requests ",
      "B.Distribute the AWS root account access credentials with the mobile app to sign the requests ",
      "C.Request temporary security credentials using web identity federation to sign the requests ",
      "D.Establish cross account access between the mobile app and the DynamoDB table to sign the requests "
    ],
    "detail": "Games-R-Us is launching a new game app for mobile devices. Users will log into the game using their existing Facebook account and the game will record player data and scoring information directly to a DynamoDB table. What is the most secure approach for signing requests to the DynamoDB API?",
    "explanation": [
      "Correct answer is C as using IAM Role Web Identity Federation will help authenticate and generate temporary credentials.",
      "Refer AWS documentation - IAM Web Identity Federation",
      "Sample Flow - Cognito is service simplifying Web Identity Federation."
    ],
    "id": 47,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Provisioned IOP SSD ",
      "B.General purpose SSD",
      "C.Cold HDD",
      "D.Throughtput Optimized HDD. "
    ],
    "detail": "You are creating a new online transaction processing (OLTP) application for a small database that is very read intensive. A single table in the database is updated continuous throughout the day, and the delivery at the database performance should be consistent. Which Amazon EBS storage option will achieve the MOST consistent performance to help maintain the performance?",
    "explanation": [
      "Correct answer is A as Provisioned IOPS SSD is recommended for OLTP requirements with continuous high throughput.",
      "Refer AWS documentation - EBS Volume Types",
      "Provisioned IOPS SSD (io1) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency."
    ],
    "id": 48,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Add another cc2.8xlarge application instance, and put both behind an Elastic Load Balancer",
      "B.Move the cc2.8xlarge to the same Availability Zone as the DynamoDB table",
      "C.Cache the database responses in ElastiCache for more rapid access",
      "D.Move the database from DynamoDB to RDS MySQL in scale-out read-replica configuration "
    ],
    "detail": "You have a web-style application with a stateless but CPU and memory-intensive web tier running on a cc2.8xlarge EC2 instance inside of a VPC. The instance when under load is having problems returning requests within the SLA as defined by your business. The application maintains its state in a DynamoDB table, but the data tier is properly provisioned and responses are consistently fast. How can you best resolve the issue of the application responses not meeting your SLA?",
    "explanation": [
      "Key point here is the data tier is properly provisioned and responses are consistently fast and just the application responses need to be improved.",
      "Correct answer is A as the performance is impact during load, the solution can be scaled out with the load being balanced by an load balancer.",
      "Option B is wrong as it does not improve the handling capacity and hence response time and performance",
      "Option C & D are wrong as the data tier is responding fast"
    ],
    "id": 49,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Continuously replicate the production database server to Amazon RDS. Use AWS CloudFormation to deploy the application and any additional servers if necessary.",
      "B.Continuously replicate the production database server to Amazon RDS. Create one application load balancer and register on-premises servers. Configure ELB Application Load Balancer to automatically deploy Amazon EC2 instances for application and additional servers, if the on-premises application is down. ",
      "C.Use a scheduled Lambda function to replicate the production database to AWS. Use Amazon Route 53 health checks to deploy the application automatically to Amazon S3, if production is unhealthy. ",
      "D.Use a scheduled Lambda function to replicate the production database to AWS. Register on-premises servers to an Auto Scaling group and deploy the application to additional servers, if production is unavailable. "
    ],
    "detail": "A Solutions Architect needs to use AWS to implement pilot light disaster recovery for a three-tier web application hosted in an on-premises datacenter. Which solution allows rapid provision of a working, fully-scaled production environment?",
    "explanation": [
      "Correct answer is A as in a pilot light disaster recovery method only critical systems are backed up like RDS and other non-critical systems configurations are made to make sure they can be brought up soon like CloudFormation, Snapshots, AMIs etc.",
      "Refer AWS Whitepaper - Using AWS for Disaster Recovery",
      "The term pilot light is often used to describe a DR scenario in which a minimal version of an environment is always running in the cloud. The idea of the pilot light is an analogy that comes from the gas heater. In a gas heater, a small flame that’s always on can quickly ignite the entire furnace to heat up a house.",
      "Infrastructure elements for the pilot light itself typically include your database servers, which would replicate data to Amazon EC2 or Amazon RDS. Depending on the system, there might be other critical data outside of the database that needs to be replicated to AWS. This is the critical core of the system (the pilot light) around which all other infrastructure pieces in AWS (the rest of the furnace) can quickly be provisioned to restore the complete system.",
      "To provision the remainder of the infrastructure to restore business-critical services, you would typically have some pre-configured servers bundled as Amazon Machine Images (AMIs), which are ready to be started up at a moment’s notice. When starting recovery, instances from these AMIs come up quickly with their pre-defined role (for example, Web or App Server) within the deployment around the pilot light. From a networking point of view, you have two main options for provisioning:",
      " Use Elastic IP addresses, which can be pre-allocated and identified in the preparation phase for DR, and associate them with your instances. Note that for MAC address-based software licensing, you can use elastic network interfaces (ENIs), which have a MAC address that can also be pre-allocated to provision licenses against. You can associate these with your instances, just as you would with Elastic IP addresses.",
      " Use Elastic Load Balancing (ELB) to distribute traffic to multiple instances. You would then update your DNS records to point at your Amazon EC2 instance or point to your load balancer using a CNAME. We recommend this option for traditional web-based applications.",
      "For less critical systems, you can ensure that you have any installation packages and configuration information available in AWS, for example, in the form of an Amazon EBS snapshot. This will speed up the application server setup, because you can quickly create multiple volumes in multiple Availability Zones to attach to Amazon EC2 instances. You can then install and configure accordingly, for example, by using the backup-and-restore method.",
      "Option B is wrong as ALB is not needed in pilot light. Only RDS needs replicated.",
      "Option C is wrong as Lambda function is not reliable to replicate database changes and Route 53 health checks cannot be deployment and S3 does not suit application deployment.",
      "Option D is wrong as Lambda function is not reliable to replicate database changes and Auto Scaling cannot span on-premises servers"
    ],
    "id": 50,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.The user should attach an IAM role with DynamoDB access to the EC2 instance",
      "B.The user should create an IAM user with DynamoDB access and use its credentials within the application to connect with DynamoDB",
      "C.The user should create an IAM role, which has EC2 access so that it will allow deploying the application",
      "D.The user should create an IAM user with DynamoDB and EC2 access. Attach the user with the application so that it does not use the root account credentials "
    ],
    "detail": "A user has created an application, which will be hosted on EC2. The application makes calls to DynamoDB to fetch certain data. The application is using the DynamoDB SDK to connect with from the EC2 instance. Which of the below mentioned statements is true with respect to the best practice for security in this scenario?",
    "explanation": [
      "Correct answer is A as creating an IAM role and attaching it to instance is the best practice. Application can then use the temporary credentials to make DynamoDB calls.",
      "Option B & D are wrong as using an IAM user is not recommended as you would need to hard code the credentials exposing them as well as making it tough for rotation.",
      "Option C is wrong as you need create a role with DynamoDB access and assign it to EC2. Application need not have EC2 access."
    ],
    "id": 51,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an A record pointing to the IP address of the load balancer",
      "B.Create a CNAME record pointing to the load balancer DNS name.",
      "C.Create a CNAME record aliased to the load balancer DNS name.",
      "D.Create an A record aliased to the load balancer DNS name "
    ],
    "detail": "A customer is hosting their company website on a cluster of web servers that are behind a public-facing load balancer. The customer also uses Amazon Route 53 to manage their public DNS. How should the customer configure the DNS zone apex record to point to the load balancer?",
    "explanation": [
      "Correct answer is D as Route 53 supports Alias record set over A record for zone apex record.",
      "Q. Can I point my zone apex (example.com versus www.example.com) at my Elastic Load Balancer?",
      "Yes. Amazon Route 53 offers a special type of record called an ‘Alias’ record that lets you map your zone apex (example.com) DNS name to your ELB DNS name (i.e. elb1234.elb.amazonaws.com). IP addresses associated with Amazon Elastic Load Balancers can change at any time due to scaling up, scaling down, or software updates. Route 53 responds to each request for an Alias record with one or more IP addresses for the load balancer. Queries to Alias records that are mapped to ELB load balancers are free. These queries are listed as “Intra-AWS-DNS-Queries” on the Amazon Route 53 usage report."
    ],
    "id": 52,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Supported on all Amazon EBS volume types",
      "B.Snapshots are automatically encrypted",
      "C.Available to all instance types",
      "D.Existing volumes can be encrypted",
      "E.Shared volumes can be encrypted "
    ],
    "detail": "Which of the following are true regarding encrypted Amazon Elastic Block Store (EBS) volumes? Choose 2 answers",
    "explanation": [
      "Key point here is to check true for Encrypted EBS volume",
      "Refer AWS documentation - EBS Encryption",
      "Correct answers are A & B",
      "This feature is supported with all EBS volume types (General Purpose SSD [gp2], Provisioned IOPS SSD [io1], Throughput Optimized HDD [st1], Cold HDD [sc1], and Magnetic [standard]).",
      "Snapshots that are taken from encrypted volumes are automatically encrypted",
      "Option C is wrong as \nAmazon EBS encryption is only available on certain instance types\n. Check Supported Instance Types",
      "Option D is wrong as Existing volumes cannot be encrypted and you need to create an encrypted snapshot to recreate the encrypted volume",
      "Option E is wrong as Volumes are not shared but Snapshots are. Also, AWS recently allowed sharing of Encrypted Snapshot but it can't be made public.",
      "You can share an encrypted snapshot with specific AWS accounts, though you cannot make it public"
    ],
    "id": 53,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a NAT gateway in a public subnet and route all traffic to Amazon Kinesis through the Nat gateway. ",
      "B.Configure a Gateway VPC endpoint gateway for Kinesis and route all traffic to Kinesis through the Gateway VPC endpoint. ",
      "C.Configure an Interface VPC endpoint interface for Kinesis and route all traffic to Kinesis through the Interface VPC endpoint. ",
      "D.Configure an AWS Direct Connect private virtual interface for Kinesis and route all traffic to Kinesis through the virtual interface. "
    ],
    "detail": "An application is running on an Amazon EC2 instance in a private subnet. The application needs to read and write data on to Amazon Kinesis Data Streams, and corporate policy requires that this traffic should not go to the internet. How can these requirements be met?",
    "explanation": [
      "Correct answer is C as Interface VPC endpoints allow access to kinesis data streams from instances in private subnets without routing the traffic through internet.",
      "Refer AWS documentation - AWS Kinesis with Interface VPC Endpoints",
      "You can use an interface VPC endpoint to keep traffic between your Amazon VPC and Kinesis Data Streams from leaving the Amazon network. Interface VPC endpoints don't require an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Interface VPC endpoints are powered by AWS PrivateLink, an AWS technology that enables private communication between AWS services using an elastic network interface with private IPs in your Amazon VPC."
    ],
    "id": 54,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Do not migrate the application to the cloud until it can be converted to work with the ELB and Auto Scaling",
      "B.Ensure that the instance it's using has an elastic IP address assigned to it",
      "C.Write a custom script that pings the health of the instance, and, if the instance stops responding, switches the elastic IP address to a standby instance",
      "D.Create an AMI of the instance and launch it using Auto Scaling which will deploy the instance again if it becomes unhealthy "
    ],
    "detail": "Your company has moved a legacy application from an on-premise data center to the cloud. The legacy application requires a static IP address hard-coded into the backend, which prevents you from deploying the application with high availability and fault tolerance using the ELB. Which steps would you take to apply high availability and fault tolerance to this application? Choose the 2 correct answers",
    "explanation": [
      "Correct answers are B & C as Elastic IP is a static IP address and can be used for High Availability to switch from an unhealthy instance to a healthy instance.",
      "Refer AWS Article"
    ],
    "id": 55,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon DynamoDB Accelerator",
      "B.Use Amazon RDS read replicas",
      "C.Use Amazon CloudFront",
      "D.Use Amazon ElastiCache "
    ],
    "detail": "A Solution Architect is building an application that stores data into Amazon RDS. One table in particular is read heavy and minimal latency is critical. Which of the following would provide the highest level of performance?",
    "explanation": [
      "Correct answer is D as ElastiCache would help cache the results and provide low latency access.",
      "Refer AWS documentation - ElastiCache FAQs",
      "Q: Can I use Amazon ElastiCache for Memcached with an AWS persistent data store such as Amazon RDS or Amazon DynamoDB?",
      "Yes, Amazon ElastiCache is an ideal front-end for data stores like Amazon RDS or Amazon DynamoDB, providing a high-performance middle tier for applications with extremely high request rates and/or low latency requirements.",
      "Option A is wrong as DynamoDB Accelerator works only with DynamoDB.",
      "Option B is wrong as RDS read replicas would help reduce load on primary database. However, it does not provide low latency.",
      "Option C is wrong as CloudFront does not help interface with RDS."
    ],
    "id": 56,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Cross-zone load balancing is not configured on the ELB Classic Load Balancer ",
      "B.Access logs are not enabled on the ELB Classic Load Balancer",
      "C.A SSL/TLS certificate has not been deployed on the ELB Classic Load Balancer",
      "D.Sticky bits is not enabled on the ELB Classic Load Balancer "
    ],
    "detail": "You are running a web application with four Amazon EC2 instances across two Availability Zones. The instances are in an Auto Scaling group behind an ELB Classic Load Balancer. A scaling event adds one instance to the group. After the event, you notice that, although all instances are serving traffic, some instances are serving more traffic than others. Which of the following could be the problem?",
    "explanation": [
      "Correct answer is A as the cross zone load balancing might not be enabled the traffic is distributed equally across the AZs, irrespective of the instances with that AZ. With cross zone load balancing enabled, the traffic is distributed equally across the instances irrespective of the AZ they are in.",
      "Refer AWS documentation - ELB Cross Zone",
      "If the load balancer nodes for your Classic Load Balancer can distribute requests regardless of Availability Zone, this is known as cross-zone load balancing. With cross-zone load balancing enabled, your load balancer nodes distribute incoming requests evenly across the Availability Zones enabled for your load balancer. Otherwise, each load balancer node distributes requests only to instances in its Availability Zone. For example, if you have 10 instances in Availability Zone us-west-2a and 2 instances in us-west-2b, the requests are distributed evenly across all 12 instances if cross-zone load balancing is enabled. Otherwise, the 2 instances in us-west-2b serve the same number of requests as the 10 instances in us-west-2a."
    ],
    "id": 57,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an ELB to reroute traffic to a failover instance",
      "B.Create a secondary ENI that can be moved to a failover instance",
      "C.Use Route53 health checks to fail traffic over to a failover instance",
      "D.Assign a secondary private IP address to the primary ENI that can be moved to a failover instance "
    ],
    "detail": "You are managing a legacy application Inside VPC with hard coded IP addresses in its configuration. Which two mechanisms will allow the application to failover to new instances without the need for reconfiguration?",
    "explanation": [
      "Correct answers are B & D as the application is legacy and needs hard coded IP address you can use secondary ENI or secondary IP address.",
      "Refer AWS documentation - EC2 using ENI",
      "To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, \nyou can move the interface and/or secondary private IPv4 address to a standby instance.",
      "Option A & C are wrong as they would not allow to maintain a fixed hard coded IP address."
    ],
    "id": 58,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Spot instance should have a one-time request type",
      "B.Spot instance should have a persistent request type",
      "C.Use EBS volume with the Spot instances",
      "D.Use Instance store volume with the Spot instances",
      "E.Specify it in the launch configuration "
    ],
    "detail": "A company is using a spot instance for processing their work loads. They want the spot instance to be stopped and not terminated, in case the spot instances are interrupted. How do you configure for the same? Choose 2",
    "explanation": [
      "Correct answer are B & C as Spot instances defined with persistent request type and EBS backed instances allows them to be stopped and started.",
      "Refer AWS documentation - Start Stop Spot Instances",
      "Amazon EC2 Spot now allows Amazon EBS-backed instances to be stopped in the event of interruption, instead of being terminated when capacity is no longer available at your preferred price. Spot can then fulfill your request by restarting instances from a stopped state when capacity is available within your price and time requirements. To use this new feature, choose “stop” instead of “terminate” as the interruption behavior when submitting a persistent Spot request. When you choose “stop”, Spot will shut down your instance upon interruption. The EBS root device and attached EBS volumes are saved, and their data persists. When capacity is available again within your price and time requirements, Spot will restart your instance. Upon restart, the EBS root device is restored from its prior state, previously attached data volumes are reattached, and the instance retains its instance ID."
    ],
    "id": 59,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Us-west-2a with two EC2 instances, us-west-2b with two EC2 instances, and us-west-2c with two EC2 instances",
      "B.Us-west-2a with three EC2 instances, us-west-2b with three EC2 instances, and us-west-2c with no EC2 instances",
      "C.Us-west-2a with four EC2 instances, us-west-2b with two EC2 instances, and us-west-2c with two EC2 instances",
      "D.Us-west-2a with six EC2 instances, us-west-2b with six EC2 instances, and us-west-2c with no EC2 instances",
      "E.Us-west-2a with three EC2 instances, us-west-2b with three EC2 instances, and us-west-2c with three EC2 instances "
    ],
    "detail": "You have an application running in us-west-2 that requires six Amazon Elastic Compute Cloud (EC2) instances running at all times. With three Availability Zones available in that region (us-west-2a, us-west-2b, and us-west-2c), which of the following deployments provide 100 percent fault tolerance if any single Availability Zone in us-west-2 becomes unavailable? Choose 2 answers",
    "explanation": [
      "Correct answers are D & E as even if an AZ goes down there would be 6 instances always running providing fault tolerance.",
      "Option A is wrong as if an AZ goes down only 4 instances would be available",
      "Option B is wrong as if an AZ goes down only 3 instances would be available",
      "Option C is wrong as if an Us-west-2a AZ goes down only 4 instances would be available"
    ],
    "id": 60,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Remove source/destination check on NAT instances.",
      "B.Launch a NAT Gateway in each Availability Zone",
      "C.Use a mix of NAT instances and NAT gateway",
      "D.Add an ELB Application Load Balancer in front of NAT gateway "
    ],
    "detail": "A Solutions Architect plans to migrate NAT instances to NAT gateway. The Architect has NAT instances with scripts to manage high availability. What is the MOST efficient method to achieve similar high availability with NAT gateway?",
    "explanation": [
      "Correct answer is B as NAT Gateway is launched per AZ and should be launched in each AZ to ensure High Availability.",
      "Refer AWS documentation - NAT Gateway",
      "If you have resources in multiple Availability Zones and they share one NAT gateway, in the event that the NAT gateway’s Availability Zone is down, resources in the other Availability Zones lose internet access. To create an Availability Zone-independent architecture, create a NAT gateway in each Availability Zone and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone.",
      "Option A is wrong as removing source/destination would not route traffic back to the originating instances.",
      "Option C is wrong as mix of NAT instance and NAT Gateway does not provide high availability.",
      "Option D is wrong as ELB is for load balancing and not high availability."
    ],
    "id": 61,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Attaching a second Elastic Network interface (ENI) to the NAT instance, and placing it in the private subnet",
      "B.Attaching an Elastic IP address to the instance in the private subnet",
      "C.Attaching a second Elastic Network Interface (ENI) to the instance in the private subnet, and placing it in the public subnet",
      "D.Disabling the Source/Destination Check attribute on the NAT instance "
    ],
    "detail": "After launching an instance that you intend to serve as a NAT (Network Address Translation) device in a public subnet you modify your route tables to have the NAT device be the target of internet bound traffic of your private subnet. When you try and make an outbound connection to the Internet from an instance in the private subnet, you are not successful. Which of the following steps could resolve the issue?",
    "explanation": [
      "Correct answer is D as the Source/Destination check attribute on the NAT must be disable. EIP and ENI are not relevant to route traffic through NAT.",
      "Refer AWS documentation - VPC NAT",
      "Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives. However, a NAT instance must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable source/destination checks on the NAT instance."
    ],
    "id": 62,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS",
      "B.Amazon S3",
      "C.Amazon EFS",
      "D.Amazon EC2 Instance store "
    ],
    "detail": "An administrator runs a highly available application in AWS. A file storage layer is needed that can share between instances and scale the platform more easily. The storage should also be POSIX compliant. Which AWS service can perform this action?",
    "explanation": [
      "Correct answer is C as EFS provides an ability to create a shared storage which is POSIX compliant.",
      "Refer AWS documentation - EFS",
      "Amazon EFS provides elastic, shared file storage that is POSIX-compliant. The file system you create supports concurrent read and write access from multiple Amazon EC2 instances and is accessible from all of the Availability Zones in the AWS Region where it is created.",
      "Option A and D are wrong as Instance and EBS volumes cannot be shared.",
      "Option B is wrong as S3 is not POSIX compliant"
    ],
    "id": 63,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use Multi-AZ RDS",
      "B.Use Redshift",
      "C.Use Aurora",
      "D.Use DynamoDB "
    ],
    "detail": "A company is migrating their on-premise 10TB MySQL database to AWS. As a compliance requirement, the company wants to have the data replicated across three availability zones. Which Amazon RDS engine meets the above business requirement?",
    "explanation": [
      "Correct answer is C as AWS Aurora provides high availability and reliability by replicating the data across three availability zones, by default.",
      "Refer AWS documentation - Aurora FAQs",
      "Q: How does Amazon Aurora improve my database’s fault tolerance to disk failures?",
      "Amazon Aurora automatically divides your database volume into 10GB segments spread across many disks. Each 10GB chunk of your database volume is replicated six ways, across three Availability Zones. Amazon Aurora is designed to transparently handle the loss of up to two copies of data without affecting database write availability and up to three copies without affecting read availability. Amazon Aurora storage is also self-healing. Data blocks and disks are continuously scanned for errors and repaired automatically.",
      "Option A is wrong as Multi-AZ RDS, the data is replicated across 2 AZs only",
      "Option C and D are wrong as they are not relational databases."
    ],
    "id": 64,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 ",
      "B.Amazon DynamoDB ",
      "C.Amazon RDS ",
      "D.Amazon EBS "
    ],
    "detail": "A Solutions Architect is designing a solution to monitor weather changes by the minute. The frontend application is hosted on Amazon EC2 instances. The backend must be scalable to an unlimited size, and data retrieval must occur with minimal latency. Which AWS service should the Architect use to store the data and achieve these requirements?",
    "explanation": [
      "Correct answer is B as DynamoDB provides the ability to scale to unlimited size while providing access to data with minimal latency.",
      "Refer AWS documentation - DynamoDB",
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.",
      "Option A is wrong as S3 latency would be more as compared to DynamoDB.",
      "Option C is wrong as RDS would not scale to unlimited size and latency would be more as compared to DynamoDB",
      "Option D is wrong as EBS would not scale to unlimited size and latency would be more as compared to DynamoDB"
    ],
    "id": 65,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Assign a public IP address to the EC2 instance, have a backup instance running. In the event of failure, move the Public IP from the primary instance to the backup instance.",
      "B.Assign an elastic IP address to the EC2 instance, have a backup instance running. In the event of failure, move the Elastic IP from the primary instance to the backup instance.",
      "C.Use ELB for load balancing and assign the IP address and use auto scaling to manage load",
      "D.EC2 instance cannot be configured with hardcoded IP address "
    ],
    "detail": "You are running a legacy application that has a hardcoded IP address in your application. How might you apply high availability to the instance running that application?",
    "explanation": [
      "Correct answer is B as you can have a fixed static Elastic IP address and assign to an EC2 instance. In case the EC2 instance fails, spawn a new instance and assign the Elastic IP address to the new instance.",
      "Refer AWS documentation - Fault Tolerance & HA Architecture",
      "Elastic IP addresses are public IP addresses that can be programmatically mapped between instances within a region. They are associated with the AWS account and not with a specific instance or lifetime of an instance. Elastic IP addresses can be used to work around host or availability zone failures by quickly remapping the address to another running instance or a replacement instance that was just started. Reserved instances can help guarantee that such capacity is available in another zone.",
      "Option A is wrong as Public IP address are not static and would change if the instance restarts or is stopped and start",
      "Option C is wrong as ELB cannot be assigned a fixed IP address.",
      "Option D is wrong as EC2 instance can be assigned Elastic IP address."
    ],
    "id": 66,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Deliver session state as messages in the Amazon SQS queue.",
      "B.Enable session state on Amazon CloudFront.",
      "C.Store session state in Amazon ElastiCache",
      "D.Provide session state through Elastic Load Balancing sticky sessions "
    ],
    "detail": "A Solutions Architect is planning a new web application in an Amazon VPC. The customer has specified that the architecture for the new web application must include the capability of sharing session state among a highly available group of web servers. To fulfil this requirement, the Solutions Architect should",
    "explanation": [
      "Correct answer is C as ElasticCache can help store the session information, which can be shared across multiple instances. This helps the application to be designed without internally maintaining the state.",
      "Refer AWS documentation - ElastiCache FAQs",
      "Q: What can I cache using Amazon ElastiCache for Memcached?",
      "You can cache a variety of objects using the service, from the content in persistent data stores (such as Amazon RDS, DynamoDB, or self-managed databases hosted on EC2) to dynamically generated web pages (with Nginx for example), or transient session data that may not require a persistent backing store. You can also use it to implement high-frequency counters to deploy admission control in high volume web applications.",
      "Options A & B are wrong as CloudFront and SQS are not ideal for state storage.",
      "Option D is wrong as Elastic Load Balancing sticky sessions limit the usage of highly available web servers cause the state is associated with a single instance and not externally maintained."
    ],
    "id": 67,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Replace the Amazon EC2 reserve proxy with an ELB internal Classic Load Balancer ",
      "B.Add Auto Scaling to the Amazon EC2 backend fleet. ",
      "C.Add Auto Scaling to the Amazon EC2 reserve proxy layer. ",
      "D.Use t2 burstable instance types for the backend fleet. ",
      "E.Replace both the frontend and reserve proxy layers with an ELB Application Load Balancer. "
    ],
    "detail": "A Solutions Architect has a multi-layer application running in Amazon VPC. The application has an ELB Classic Load Balancer as the front end in a public subnet, and an Amazon EC2-based reserve proxy that performs content-based routing to two backend Amazon EC2 instances hosted in a private subnet. The Architect sees tremendous traffic growth and is concerned that the reserve proxy and current backend setup will be insufficient. Which actions should the Architect take to achieve a cost-effective solution that ensures the application automatically scales to meet traffic demand? (select TWO)",
    "explanation": [
      "Correct answer is B & E as the AWS ALB can perform content based routing and can be used to replace the reverse proxy layers. ALB is also AWS managed and highly available and scalable. The backend fleet can be associated with Auto Scaling to scale as per the demand.",
      "Option A is wrong as Classic ELB does not provide content based routing capability",
      "Option C is wrong as Auto Scaling is not a cost effective solution as compared to ALB",
      "Option D is wrong as t2 burstable do not provide scalability but ability to burst above the baseline for limited time."
    ],
    "id": 68,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a crontab job script in each instance to push the logs regularly to Amazon S3",
      "B.Install and configure Amazon CloudWatch Logs agent in the Amazon EC2",
      "C.Enable Amazon CloudWatch Events in the AWS Management Console.",
      "D.Enable AWS CloudTrail to map all API calls invoked by the application "
    ],
    "detail": "A Solutions Architect needs to design a centralized logging solution for a group of web applications running on Amazon EC2 instances. The solution requires minimal development effort due to budget constraints. Which of the following should the Architect recommend?",
    "explanation": [
      "Correct answer is B as CloudWatch Logs Agent can automatically send logs to CloudWatch.",
      "Refer AWS documentation - CloudWatch Logs Agent",
      "The CloudWatch Logs agent provides an automated way to send log data to CloudWatch Logs from Amazon EC2 instances. The agent is comprised of the following components:",
      "You can use the CloudWatch Logs agent installer on an existing EC2 instance to install and configure the CloudWatch Logs agent. After installation is complete, logs automatically flow from the instance to the log stream you create while installing the agent. The agent confirms that it has started and it stays running until you disable it.",
      "In addition to using the agent, you can also publish log data using the AWS CLI, CloudWatch Logs SDK, or the CloudWatch Logs API. The AWS CLI is best suited for publishing data at the command line or through scripts. The CloudWatch Logs SDK is best suited for publishing log data directly from applications or building your own log publishing application.",
      "Option A is wrong as this would require development effort.",
      "Option C is wrong as Events delivers a near real-time stream of system events that describe changes in Amazon Web Services (AWS) resources. It does not help capture application logs.",
      "Option D is wrong as CloudTrail is only for audit logs. It does not handle application logs."
    ],
    "id": 69,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Reserved instances ",
      "B.Spot instances ",
      "C.Dedicated instances ",
      "D.On-demand instances "
    ],
    "detail": "You have a video transcoding application running on Amazon EC2. Each instance polls a queue to find out which video should be transcoded, and then runs a transcoding process. If this process is interrupted, the video will be transcoded by another instance based on the queuing system. You have a large backlog of videos, which need to be transcoded, and would like to reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost efficient way?",
    "explanation": [
      "Key point here is to implement the solution in most cost effective way and If this process is interrupted, the video will be transcoded by another instance based on the queuing system",
      "Correct answer is B as spot instances can be used to handle the load in the most cost effective way and the situation where the spot instance can be terminated abruptly is already handled."
    ],
    "id": 70,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS",
      "B.Amazon S3",
      "C.Amazon EFS",
      "D.Amazon DynamoDB "
    ],
    "detail": "You have been asked to architect a life system for user’s home directories. The solution must be accessible simultaneously to individuals across an organization. Users and groups must have permissions defined at the file or directory level. What AWS service can meet all of these requirements?",
    "explanation": [
      "Correct answer is C as EFS is ideal solution to create user home directories and accessible across individuals across organizations, with the ability to configure it.",
      "Refer AWS EFS FAQs & Create Writable Per-User directories",
      "Q. What use cases is Amazon EFS intended for?",
      "Amazon EFS is designed to provide performance for a broad spectrum of workloads and applications, including Big Data and analytics, media processing workflows, content management, web serving, and home directories."
    ],
    "id": 71,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Replicate relevant data between Amazon Redshift and Amazon DynamoDB. Data scientists use Redshift. Dashboards use DynamoDB",
      "B.Configure auto-replication between Amazon Redshift and Amazon RDS. Data scientists use Redshift and Dashboards use RDS",
      "C.Use Amazon Redshift for both requirements, with separate query queues configured in workload management.",
      "D.Use Amazon Redshift for Data Scientists; Run automated dashboard queries against Redshift and store the results in Amazon ElastiCache, Dashboards query ElastiCache. "
    ],
    "detail": "A company has two different types of repotting needs on their 200-GB data warehouse;– Data scientists run a small number of concurrent adhoc SQL queries that can take several minutes each to run.– Display screens throughout the company run many fast SQL queries to populate dashboards,Which design would meet these requirements with the LEAST cost?",
    "explanation": [
      "Correct answer is C as Redshift provides workload management which can help prioritize the interactive and long running jobs. Storing the data in a single storage service would also help keep the costs to minimum.",
      "Refer AWS documentation - Mixed workload with Redshift",
      "Mixed workloads run batch and interactive workloads (short-running and long-running queries or reports) concurrently to support business needs or demand. Typically, managing and configuring mixed workloads requires a thorough understanding of access patterns, how the system resources are being used and performance requirements.",
      "It’s common for mixed workloads to have some processes that require higher priority than others. Sometimes, this means a certain job must complete within a given SLA. Other times, this means you only want to prevent a non-critical reporting workload from consuming too many cluster resources at any one time.",
      "Without workload management (WLM), each query is prioritized equally, which can cause a person, team, or workload to consume excessive cluster resources for a process which isn’t as valuable as other more business-critical jobs.",
      "You can use WLM to define the separation of business concerns and to prioritize the different types of concurrently running queries in the system:",
      "Options A & B are wrong as it would result in duplication of data and with 2 services costs would not be minimal.",
      "Option D is wrong as ElastiCache would not provide the latest data."
    ],
    "id": 72,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon DynamoDB",
      "B.Amazon Elastic Compute Cloud (EC2)",
      "C.Amazon Elastic Load Balancing",
      "D.Amazon Simple Notification Service (SNS)",
      "E.Amazon Simple Storage Service (S3) "
    ],
    "detail": "When using the following AWS services, which should be implemented in multiple Availability Zones for high availability solutions? Choose 2 answers",
    "explanation": [
      "Correct answer are B and C as ELB can be used to provide High Availability by routing traffic across multiple EC2 instances across multiple AZs",
      "Elastic Load Balancing automatically distributes incoming application traffic across multiple Amazon EC2 instances in Multi-AZs. It enables you to achieve fault tolerance in your applications, seamlessly providing the required amount of load balancing capacity needed to route application traffic.",
      "Option A, D & E are wrong as all of them are AWS managed services and scalable and HA by themselves."
    ],
    "id": 73,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "A company is planning to deploy an application in AWS. This application requires an EC2 Instance to continuously perform log processing activities requiring around 500MiB/s of data throughput. Which of the following is the best storage option for this requirement?",
    "explanation": [
      "Correct answer is B as Throughput Optimized HDD is best suited for the large sequential I/O workloads usually involving big data, ETL jobs and log processing.",
      "Refer AWS documentation - EBS Volume Types",
      "Throughput Optimized HDD (st1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. This volume type is a good fit for large, sequential workloads such as Amazon EMR, ETL, data warehouses, and log processing. Bootable st1 volumes are not supported.",
      "Throughput Optimized HDD (st1) volumes, though similar to Cold HDD (sc1) volumes, are designed to support \nfrequently accessed data.",
      "This volume type is optimized for workloads involving large, sequential I/O, and we recommend that customers with workloads performing small, random I/O use gp2.",
      "Larger volumes scale these limits linearly, with throughput capped at a maximum of 500 MiB/s."
    ],
    "id": 74,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Software appliance-based VPN connection with IPsec",
      "B.AWS Direct Connect and IPsec Hardware VPN connection over private lines",
      "C.AWS Direct Correct with AWS VPN CloudHub",
      "D.AWS VPN CloudHub "
    ],
    "detail": "You are setting up a VPN for a customer to connect his remote network to his Amazon VPC environment. There are a number of ways to accomplish this and to help you decide you have been given a list of the things that the customer has specified that the network needs to be able to do. They are as follows:\t- Predictable network performance\t- Support for BGP peering and routing policies\t- A secure IPsec VPN Connection but not over the InternetWhich of the following VPN options would best satisfy the customer's requirements? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is B as using Direct Connect would provide Predictable network performance & Support for BGP peering and routing policies and VPN would provide a secure IPsec VPN Connection but not over the Internet",
      "Refer AWS documentation - VPC VPN Connections",
      "Option A is wrong as the traffic is still routed through Internet.",
      "Option C & D are wrong as CloudHub helps communication between multiple remote sites"
    ],
    "id": 75,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.SAML-based Identity Federation",
      "B.Cross-Account Access",
      "C.AWS IAM users",
      "D.Web Identity Federation "
    ],
    "detail": "A photo-sharing service stores pictures in Amazon Simple Storage Service (S3) and allows application sign-in using an OpenID Connect-compatible identity provider. Which AWS Security Token Service approach to temporary access should you use for the Amazon S3 operations?",
    "explanation": [
      "Correct answer is D",
      "Refer AWS documentation - IAM Web Identity Federation",
      "With web identity federation, you don't need to create custom sign-in code or manage your own user identities. Instead, users of your app can sign in using a well-known identity provider (IdP) —such as Login with Amazon, Facebook, Google, or any other OpenID Connect (OIDC)-compatible IdP, receive an authentication token, and then exchange that token for temporary security credentials in AWS that map to an IAM role with permissions to use the resources in your AWS account. Using an IdP helps you keep your AWS account secure, because you don't have to embed and distribute long-term security credentials with your application.",
      "Option A is wrong as SAML is mainly for SAML compliant Identity providers.",
      "Option B is wrong as Cross Account access is to provide access to other AWS accounts",
      "Option C is wrong as IAM user is to give access to actual users."
    ],
    "id": 76,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Simple",
      "B.Multi-answer",
      "C.Latency",
      "D.Weighted "
    ],
    "detail": "You have been tasked with architecting an application in AWS. The architecture would consist of EC2, the Classic Load Balancer, Auto Scaling and Route 53. There is a directive to ensure that Blue-Green deployments are possible in this architecture. Which routing policy could you ideally use in Route 53 for achieving Blue-Green deployments?",
    "explanation": [
      "Correct answer is D as weighted routing policy helps distribute traffic in a controlled manner across different environments. Once tested, the switch can be made.",
      "Refer AWS Blue Green Deployment Whitepaper & Routing Policy"
    ],
    "id": 77,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Change the Amazon EC2 instance to compute optimized. ",
      "B.Launch a second Amazon EC2 instance to monitor the health of the first ",
      "C.Trigger a Lambda function when a new object is uploaded. ",
      "D.Initially copy the images to an attached Amazon EBS volume. "
    ],
    "detail": "A workload consists of downloading an image from an Amazon S3 bucket, processing the image, and moving it to another Amazon S3 Bucket. An Amazon EC2 instance runs a scheduled task every hour to perform the operation. How should a Solutions Architect redesign the process so that it is highly available?",
    "explanation": [
      "Correct answer is C as Lambda provides high availability for the process as well as removes the need for any compute infrastructure.",
      "Refer AWS documentation - Lambda",
      "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. You can use AWS Lambda to extend other AWS services with custom logic, or create your own back-end services that operate at AWS scale, performance, and security. AWS Lambda can automatically run code in response to multiple events, such as HTTP requests via Amazon API Gateway, modifications to objects in Amazon S3 buckets, table updates in Amazon DynamoDB, and state transitions in AWS Step Functions.",
      "Lambda runs your code on \nhigh-availability compute infrastructure and performs all the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code and security patch deployment, and code monitoring and logging. All you need to do is supply the code.",
      "Option A, B & D are wrong as they would not provide High Availability incase the instance goes down."
    ],
    "id": 78,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Classic Load Balancer",
      "B.Network Load Balancer",
      "C.Application Load Balancer",
      "D.Use Route 53 instead "
    ],
    "detail": "A company wants to use load balancer for their application. However, the company wants to forward the requests without any header modification. What service should the company use?",
    "explanation": [
      "Correct answer is B as Network Load Balancer works on the layer 4 TCP, it forwards the request to the back-end instances without modifying the headers.",
      "Refer AWS documentation - ELB Listeners",
      "Option A and C are wrong as Classic ELB and ALB can work on the Layer 7, they can modify the headers.",
      "Option D is wrong as Route 53 does not perform the work of load balancer."
    ],
    "id": 79,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Add a CloudFront distribution in front of the bucket.",
      "B.Add an ELB in front of the S3 bucket.",
      "C.Add randomness to the key names.",
      "D.Enable Versioning for the S3 bucket. "
    ],
    "detail": "A company has an application that uses the S3 bucket as its data layer. As per the monitoring on the S3 bucket, it can be seen that the number of GET requests is 400 requests per second. The IT Operations team receives service requests about users getting HTTP 500 or 503 errors while accessing the application. What can be done to resolve these errors? Choose 2 answers",
    "explanation": [
      "Correct answer is A & C as CloudFront with S3 as origin helps cache the requests and reduce the direct calls to S3 as well as randomness helps in data distribution in S3 across partitions.",
      "Refer AWS documentation - S3 Performance",
      "Amazon S3 maintains an index of object key names in each AWS region. Object keys are stored in UTF-8 binary ordering across multiple partitions in the index. The key name dictates which partition the key is stored in. Using a sequential prefix, such as time stamp or an alphabetical sequence, increases the likelihood that Amazon S3 will target a specific partition for a large number of your keys, overwhelming the I/O capacity of the partition. If you introduce some randomness in your key name prefixes, the key names, and therefore the I/O load, will be distributed across more than one partition.",
      "If your workload is mainly sending GET requests, in addition to the preceding guidelines, you should consider using Amazon CloudFront for performance optimization.",
      "Integrating Amazon CloudFront with Amazon S3, you can distribute content to your users with low latency and a high data transfer rate. You will also send fewer direct requests to Amazon S3, which will reduce your costs.",
      "For example, suppose that you have a few objects that are very popular. Amazon CloudFront fetches those objects from Amazon S3 and caches them. Amazon CloudFront can then serve future requests for the objects from its cache, reducing the number of GET requests it sends to Amazon S3.",
      "Option B is wrong as ELB is used to distribute traffic on to EC2 Instances and does not work with S3.",
      "Options D is wrong as versioning helps in maintaining multiple copies and helps to recover from accidental deletion or overwrites."
    ],
    "id": 80,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a lifecycle hook for your Auto Scaling group",
      "B.Add a scaling-specific cooldown period to the scaling policy",
      "C.Adjust the CPU threshold that triggers a scaling action",
      "D.Attach a new launch configuration to the Auto Scaling group "
    ],
    "detail": "Your Auto Scaling group is configured to launch one new Amazon EC2 instance if the overall CPU load exceeds 65% over a five minutes interval. Occasionally, the Auto Scaling group launches a second Amazon EC2 instance before the first is operational. The second instance is not required and introduces needless compute costs. How can you prevent the Auto Scaling group from launching the second instance?",
    "explanation": [
      "Correct answer is B as you need to adjust the cool down period for the newly added instance to startup and handle traffic.",
      "Refer AWS documentation - Auto Scaling Cooldowns",
      "The Auto Scaling cooldown period is a configurable setting for your Auto Scaling group that helps to ensure that Auto Scaling doesn't launch or terminate additional instances before the previous scaling activity takes effect. After the Auto Scaling group dynamically scales using a simple scaling policy, Auto Scaling waits for the cooldown period to complete before resuming scaling activities. When you manually scale your Auto Scaling group, the default is not to wait for the cooldown period, but you can override the default and honor the cooldown period. If an instance becomes unhealthy, Auto Scaling does not wait for the cooldown period to complete before replacing the unhealthy instance."
    ],
    "id": 81,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Data Pipeline ",
      "B.Amazon Kinesis Firehose",
      "C.Amazon DynamoDB Streams ",
      "D.Amazon Elasticsearch Service "
    ],
    "detail": "A startup company is building an application to track the high scores for a popular video game. Their Solution Architect is tasked with designing a solution to allow real-time processing of scores from millions of players worldwide. Which AWS service should the Architect use to provide reliable data ingestion from the video game into the datastore?",
    "explanation": [
      "Correct answer is B as Kinesis Firehose can help in the reliable data ingestion with least management.",
      "Refer AWS documentation - Kinesis Firehose",
      "Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon Elasticsearch Service (Amazon ES), and Splunk. Kinesis Data Firehose is part of the Kinesis streaming data platform, along with Kinesis Data Streams, Kinesis Video Streams, and Amazon Kinesis Data Analytics. With Kinesis Data Firehose, you don't need to write applications or manage resources. You configure your data producers to send data to Kinesis Data Firehose, and it automatically delivers the data to the destination that you specified. You can also configure Kinesis Data Firehose to transform your data before delivering it."
    ],
    "id": 82,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a Lambda function deployment package consisting of code and any dependencies",
      "B.Develop each app in a separate Docker container and deploy using CloudFormation",
      "C.Develop each app in one Docker container and deploy using Elastic Beanstalk",
      "D.Develop each app in a separate Docker container and deploy using Elastic Beanstalk "
    ],
    "detail": "You work for a very large pharmaceutical company that has multiple applications which are very different and built on different programming languages. How can you deploy applications as quickly as possible? Choose the correct answer:",
    "explanation": [
      "Correct answer is D as with Elastic Beanstalk each application can be deployed as a separate Docker container.",
      "Refer AWS documentation - Elastic Beanstalk Create Deploy Docker",
      "Elastic Beanstalk supports the deployment of web applications from Docker containers. With Docker containers, you can define your own runtime environment. You can choose your own platform, programming language, and any application dependencies (such as package managers or tools), that aren't supported by other platforms. Docker containers are self-contained and include all the configuration information and software your web application requires to run.",
      "By using Docker with Elastic Beanstalk, you have an infrastructure that automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring. You can manage your web application in an environment that supports the range of services that are integrated with Elastic Beanstalk, including but not limited to VPC, RDS, and IAM."
    ],
    "id": 83,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon Glacier for regular storage and Amazon S3 for archiving data. ",
      "B.Use Amazon EBS for regular storage and Amazon S3 for archiving data. ",
      "C.Use Amazon S3 for regular storage and Amazon Glacier for archiving data. ",
      "D.Use Amazon EBS for archiving data and Amazon Glacier for regular storage. "
    ],
    "detail": "An organization stores customer files and must frequently increase the size of its on-premises storage system to enable quick access and archiving. The organization wants to migrate to AWS and needs an AWS solution. How can this requirement be met at the lowest cost?",
    "explanation": [
      "Correct answer is C as S3 would provide an ideal solution for storage with quick access and Glacier for archiving. Object transition rules can be defined to move objects from S3 to Glacier. Also, the solution is cost effective.",
      "Option A is wrong as Glacier would not provide quick access to the data.",
      "Option B & D are wrong as EBS is not a cost-effective solution."
    ],
    "id": 84,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 for storing the ELB log files and EC2 for processing the log files in analysis",
      "B.Amazon EC2 for storing and processing the log files",
      "C.Amazon DynamoDB to store the logs and EC2 for running custom log analysis scripts",
      "D.Amazon S3 for storing ELB log files and Amazon EMR for processing the log files in analysis "
    ],
    "detail": "As part of your application architecture requirements, the company you are working for has requested the ability to run analytics against all combined log files from the Elastic Load Balancer. Which services are used together to collect logs and process log file analysis in an AWS environment?",
    "explanation": [
      "Correct answer is D as S3 can be used for storing the ELB log files and have EMR perform analytics over the same.",
      "Option A is wrong as you would need applications deployed on the EC2 instance and it handle the distributed, parallel processing which EMR gives out of the box.",
      "Option B & C are wrong as DynamoDB & EC2 are not ideal for storing logs."
    ],
    "id": 85,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Using TunnelState CloudWatch metrics",
      "B.Using custom CloudWatch metrics",
      "C.Use Lambda function to consume the VPN logs",
      "D.Create and deploy an external service to ping the VPN endpoint "
    ],
    "detail": "A company is using a managed VPN connection to connect with their on-premises data center. They would like to monitor when the vpn goes down. How can they implement the monitoring?",
    "explanation": [
      "Correct answer is A as VPN connections can now be monitored using CloudWatch.",
      "Refer AWS documentation - CloudWatch VPN Monitoring",
      "TunnelState",
      "The state of the tunnel. 0 indicates DOWN and 1 indicates UP.",
      "Units: Boolean"
    ],
    "id": 86,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon CloudFront with on-premises servers as the origin. ",
      "B.ELB Application Load Balancer. ",
      "C.Amazon Route 53 latency-based routing. ",
      "D.Amazon EFS to store and serve static files. "
    ],
    "detail": "A company hosts a website on-premises. The website has a mix of static and dynamic content but users experience latency when loading static files. Which AWS service can help reduce latency?",
    "explanation": [
      "Correct answer is A as CloudFront can be used to cache static resources and provide low latency access while being hosted on-premises.",
      "Refer AWS documentation - CloudFront Origins",
      "CloudFront supports using several AWS resources as origins. For example, you can specify an Amazon S3 bucket or an MediaStore container, an MediaPackage channel, \nor a custom origin, such as an Amazon EC2 instance or \nyour own HTTP web server.",
      "Option B, C & D are wrong as they would not help reduce the latency."
    ],
    "id": 87,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.The Spot Instance request type must be one-time.",
      "B.The Spot Instance request type must be persistent.",
      "C.The root volume must be an Amazon EBS volume",
      "D.The root volume must be an instance store volume.",
      "E.The launch configuration is changed. "
    ],
    "detail": "Which requirements must be met in order for a Solutions Architect to specify that an Amazon EC2 instance should stop rather than terminate its Spot Instance is interrupted? (Select TWO.)",
    "explanation": [
      "Correct answer are B & C as Spot instances defined with persistent request type and EBS backed instances allows them to be stopped and started.",
      "Refer AWS documentation - Start Stop Spot Instances",
      "Amazon EC2 Spot now allows Amazon EBS-backed instances to be stopped in the event of interruption, instead of being terminated when capacity is no longer available at your preferred price. Spot can then fulfill your request by restarting instances from a stopped state when capacity is available within your price and time requirements. To use this new feature, choose “stop” instead of \"terminate\" as the interruption behavior when submitting a persistent Spot request. When you choose “stop”, Spot will shut down your instance upon interruption. The EBS root device and attached EBS volumes are saved, and their data persists. When capacity is available again within your price and time requirements, Spot will restart your instance. Upon restart, the EBS root device is restored from its prior state, previously attached data volumes are reattached, and the instance retains its instance ID.",
      "Options A, D & E are wrong as they are not valid."
    ],
    "id": 88,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a bastion and NAT Instance in subnet-258bc44d and add a route from rtb-238bc44b to subnet-258bc44d.",
      "B.Add a route from rtb-238bc44b to igw-2d8bc445 and add a bastion and NAT instance within Subnet-248DC44c.",
      "C.Create a Bastion and NAT Instance in subnet-258bc44d. Add a route from rtb-238bc44b to igw-2d8bc445. And a new NACL that allows access between subnet-258bc44d and subnet-248bc44c.",
      "D.Create a Bastion and NAT instance in subnet-258bc44d and add a route from rtb-238bc44b to the NAT instance. "
    ],
    "detail": "You’ve been brought in as solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC) The previous architect has already deployed a 3- tier VPC. The configuration is as follows: VPC vpc-2f8tLC447 IGW ig-2d8bc445 NACL acl-2080c448 Subnets and Route Tables: Web server’s subnet-258bc44d Application server’s subnet-248DC44c Database server’s subnet-9189c6f9 Route Tables: rtb-2i8bc449 rtb-238bc44b Associations: Subnet-258bc44d: rtb-2i8bc449 Subnet-248DC44c: rtb-238bc44b Subnet-9189c6f9: rtb-238bc44b You are now ready to begin deploying EC2 instances into the VPC. Web servers must have direct access to the Internet Application and database servers cannot have direct access to the Internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?",
    "explanation": [
      "Correct answer is D as Bastion and NAT should be in the public subnet. As Web Server has direct access to Internet, the subnet subnet-258bc44d should be public and Route rtb-2i8bc449 pointing to IGW. Route rtb-238bc44b for private subnets should point to NAT for outgoing internet access",
      "Option A is wrong as Route should point to the NAT",
      "Option B is wrong as adding IGW to route rtb-238bc44b would expose the Application and Database server to internet. Bastion and NAT should be in public subnet",
      "Option C is wrong as Route should point to NAT and not Internet Gateway else it would be internet accessible."
    ],
    "id": 89,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 instance storage ",
      "B.Amazon EBS General Purpose SSD (gp2) storage ",
      "C.Amazon S3 ",
      "D.Amazon EBS Provision IOPS SSD (io1) storage "
    ],
    "detail": "A company runs a legacy with a single-tier architecture on an Amazon EC2 instance. Disk I/0 is low with occasional small spikes during business hours. The company requires the instance to be stopped from 8 PM to 8 AM daily. Which storage options is MOST appropriate for this workload?",
    "explanation": [
      "Correct answer is B as the usage is low with occasional spikes EBS General Purpose SSD (gp2) storage would be the ideal choice for the storage. gp2 also provides burst capability to handle the occasional spikes.",
      "Refer AWS documentation - EBS gp2 volumes",
      "General Purpose SSD (gp2) volumes offer cost-effective storage that is ideal for a broad range of workloads. These volumes deliver single-digit millisecond latencies and the ability to burst to 3,000 IOPS for extended periods of time. Between a minimum of 100 IOPS (at 33.33 GiB and below) and a maximum of 10,000 IOPS (at 3,334 GiB and above), baseline performance scales linearly at 3 IOPS per GiB of volume size. AWS designs gp2volumes to deliver the provisioned performance 99% of the time. A gp2 volume can range in size from 1 GiB to 16 TiB.",
      "Option A is wrong as EC2 instance storage does not maintain persistence.",
      "Option C is wrong as S3 is an object storage and cannot be attached to EC2 instances.",
      "Option D is wrong as the usage is low with occasional spikes gp2 is more suitable than io1."
    ],
    "id": 90,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Public subnets for both the application tier and the database cluster",
      "B.Public subnets for the application tier, and private subnets for the database cluster",
      "C.Public subnets for the application tier and NAT Gateway, and private subnets for the database cluster",
      "D.Public subnets for the application tier, and private subnets for the database cluster and NAT Gateway "
    ],
    "detail": "A Solutions Architect is designing an online shopping application running in a VPC on EC2 instances behind an ELB Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The application tier must read and write data to a customer managed database cluster. There should be no access to the database from the Internet, but the cluster must be able to obtain software patches from the Internet. Which VPC design meets these requirements?",
    "explanation": [
      "Correct answer is C as the application tier needs to be in public subnets to be accessible from internet. The database cluster should be hosted in the private subnets as they should not be accessible from the internet. However, database cluster needs access to internet to download patches which can be done through NAT gateway hosted in the public subnet.",
      "Refer AWS documentation - VPC Scenario 2"
    ],
    "id": 91,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Configure CloudFront to use signed-URLs to access Amazon S3",
      "B.Store the videos as private objects in Amazon S3 and let CloudFront serve the objects by using only Origin Access Identity (OAI)",
      "C.Use Amazon S3 static website as the origin of CloudFront, and configure CloudFront to deliver the videos by generating a signed URL for users",
      "D.Use OAI for CloudFront to access private S3 objects and select the Restrict Viewer Access option in CloudFront cache behavior to use signed URLs. "
    ],
    "detail": "A Solutions Architect has been asked to deliver video content stored on Amazon S3 to specific users from Amazon CloudFront while restricting access by unauthorized users. How can the Architect implement a solution to meet these requirements?",
    "explanation": [
      "Correct answer is D as the S3 bucket needs to be private with access controlled through CloudFront using Origin Access Identity. The Restrict Access Option needs to be enable to use signed urls to prevent unauthorized access.",
      "Refer AWS documentation - Accessing Private Content in Amazon Cloudfront",
      "To use private content with Amazon CloudFront, you’ll need an Amazon CloudFront distribution with private content enabled and a list of authorized accounts you trust to access your private content. From the Create Distribution Wizard in the Amazon CloudFront console, start creating a web distribution. In the ”’Origin Settings”’ section, select an Amazon S3 bucket that you’ve created for private content only, and make sure you select the options as below:",
      "This will set the permissions on your Amazon S3 bucket to protect your content from being accessed publicly, but still allow CloudFront to access your content.",
      "Continue creating your distribution, and at the bottom of the Default Cache Behavior Settings section, make sure you enable the Restrict Viewer Access option and select self as the trusted signer. These are called trusted signers because you’re trusting URLs that are signed by them and allowing them to access your private content. In our example, we’re using self as the only trusted signer, which means that only your account can sign URLs to access your CloudFront private content.",
      "Option A is wrong as the solution is incomplete.",
      "Option B is wrong as the distribution needs to have Restrict Viewer enabled to enforce access through Signed URLs only.",
      "Option C is wrong as for limiting the access the S3 bucket needs to defined private."
    ],
    "id": 92,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon SNS ",
      "B.AWS Lambda with sequential dispatch ",
      "C.A FIFO queue in Amazon SQS ",
      "D.A standard queue in Amazon SQS "
    ],
    "detail": "A restaurant reservation application needs the ability to maintain a waiting list. When a customer tries to reserve a table, and none are available, the customer must be put on the waiting list, and the application must notify the customer when a table becomes free. What service should the Solutions Architect recommend ensuring that the system respects the order in which the customer requests are put onto the waiting list?",
    "explanation": [
      "Correct answer is C as FIFO SQS queue can help maintain the sequence in the order they were inserted and processed in the same order.",
      "Refer AWS documentation - SQS FIFO Queues",
      "FIFO (First-In-First-Out) queues are designed to enhance messaging between applications when the order of operations and events are critical, or where duplicates can't be tolerated",
      "Option A is wrong as SNS only aids in notification and it would publish the event to all the subscribers.",
      "Option B is wrong as Lambda cannot guarantee sequential dispatch.",
      "Option D is wrong as SQS Standard queues do not guarantee the order."
    ],
    "id": 93,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM role in the development account. Allow IAM Users in the development account to assume the role",
      "B.Create an IAM group in the production account. Grant IAM users in the development account membership in the group",
      "C.Create an IAM role in the production account. Allow IAM users in the development account to assume the role",
      "D.Create an IAM group in the development account Grant IAM users in the development account membership in the group "
    ],
    "detail": "Your company has separate AWS account for development and production. Each developer is assigned an IAM user in the development account. Developers occasionally need to access the production account to roll out changes to that environment. Your company does not allow the creation of IAM users in the production account?",
    "explanation": [
      "Correct answer is C as you would need to define a role in the production account to grant access to the S3 bucket, and allow",
      "Development account to assume the role. Development account can then delegate the access to the role to its IAM users.",
      "Refer AWS documentation - IAM Role Cross Account Access",
      "Granting access to resources in one account to a trusted principal in a different account. Roles are the primary way to grant cross-account access. However, with some of the web services offered by AWS you can attach a policy directly to a resource (instead of using a role as a proxy). These are called resource-based policies, and you can use them to grant principals in another AWS account access to the resource. The following services support resource-based policies for the specified resources: Amazon Simple Storage Service (S3) buckets, Amazon Glacier vaults, Amazon Simple Notification Service (SNS) topics, and Amazon Simple Queue Service (SQS) queues"
    ],
    "id": 94,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.RDS instance is stopped manually.",
      "B.A replica of the RDS instance is created in a different region.",
      "C.An Availability Zone becomes unavailable.",
      "D.Another master user is created.",
      "E.A failure of the primary database instance. "
    ],
    "detail": "What conditions could cause a Multi-AZ Amazon RDS failover to occur? (Select TWO)",
    "explanation": [
      "Correct answers are C & E as primary instance or AZ going down will result in automatic failover.",
      "Refer AWS documentation - RDS Multi-AZ",
      "Amazon RDS handles failovers automatically so you can resume database operations as quickly as possible without administrative intervention. The primary DB instance switches over automatically to the standby replica if any of the following conditions occur:",
      "Options A, B & D are wrong as they do not result in automatic failover."
    ],
    "id": 95,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Track the request using \"X-Amzn-Trace-Id\" HTTP header",
      "B.Track the request using \"X-Amzn-Track-Id\" HTTP header",
      "C.Track the request using \"X-Aws-Track-Id\" HTTP header",
      "D.Track the request using \"X-Aws-Trace-Id\" HTTP header "
    ],
    "detail": "Your organization is using ALB for servicing requests. One of the API request is facing consistent performance issues. Upon checking the flow, you find that the request flows through multiple services. How can you track the performance or timing issues in the application stack at the granularity of an individual request?",
    "explanation": [
      "Correct answer is A as ALB injects an identifier \n“X-Amzn-Trace-Id”  which can be used to track the request across various services.",
      "Refer AWS documentation - ELB Application Load Balancer",
      "Request TracingThe Application Load Balancer injects a new custom identifier “X-Amzn-Trace-Id” HTTP header on all requests coming into the load balancer. Request tracing allows you to track a request by its unique ID as the request makes its way across various services that make up your websites and distributed applications. You can use the unique trace identifier to uncover any performance or timing issues in your application stack at the granularity of an individual request."
    ],
    "id": 96,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Pass API credentials to the instance using instance userdata.",
      "B.Use AWS Identity and Access Management roles for EC2 instances.",
      "C.Embed the API credentials into your JAR files.",
      "D.Store API credentials as an object in Amazon Simple Storage Service "
    ],
    "detail": "You are deploying an application on Amazon Elastic Cloud Compute (EC2) that must call AWS APIs. What method of securely passing credentials to the application should you use?",
    "explanation": [
      "Correct answer is B as securely passing credentials can be securely passed using IAM role, where credentials are maintained by AWS and frequently rotated.",
      "Refer AWS documentation - IAM roles for EC2 instances",
      "Applications must sign their API requests with AWS credentials. Therefore, if you are an application developer, you need a strategy for managing credentials for your applications that run on EC2 instances. For example, you can securely distribute your AWS credentials to the instances, enabling the applications on those instances to use your credentials to sign requests, while protecting your credentials from other users. However, it's challenging to securely distribute credentials to each instance, especially those that AWS creates on your behalf, such as Spot Instances or instances in Auto Scaling groups. You must also be able to update the credentials on each instance when you rotate your AWS credentials.",
      "We designed IAM roles so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use. Instead of creating and distributing your AWS credentials, you can delegate permission to make API requests"
    ],
    "id": 97,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.An Amazon EC2 instance store local SSD volume",
      "B.An Amazon EBS provisioned IOPS SSD volume",
      "C.An Amazon EBS Throughput Optimized HDD volume",
      "D.An Amazon EBS general purpose SSD volume "
    ],
    "detail": "A solutions architect must select the storage type for a big data application that requires very high sequential I/0. The data must persist if the instance is stopped. Which of the following storage types will provide the best fit at the LOWEST cost for the application?",
    "explanation": [
      "Correct answer is C as Throughput Optimized HDD provides the ideal storage solution for big data applications with sequential I/O.",
      "Refer AWS documentation - EBS Volume Types",
      "Throughput Optimized HDD (st1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. This volume type is a good fit for large, sequential workloads such as Amazon EMR, ETL, data warehouses, and log processing. Bootable st1 volumes are not supported.",
      "Throughput Optimized HDD (st1) volumes, though similar to Cold HDD (sc1) volumes, are designed to support \nfrequently accessed data.",
      "This volume type is optimized for workloads involving large, sequential I/O, and we recommend that customers with workloads performing small, random I/O use gp2"
    ],
    "id": 98,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 ",
      "B.Amazon Aurora ",
      "C.Amazon DynamoDB ",
      "D.Amazon Redshift "
    ],
    "detail": "A bank is writing new software that is heavily dependent upon database transactions for write consistency. The application will also occasionally generate reports on data in the database and will do joins across multiple tables. The database must automatically scale as the amount of data grows. Which AWS service should be used to run the database?",
    "explanation": [
      "Correct answer is B as Aurora provides a high scalable relational database.",
      "Refer AWS documentation - Aurora FAQS",
      "Amazon Aurora is a relational database engine that combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases. Amazon Aurora MySQL delivers up to five times the performance of MySQL without requiring any changes to most MySQL applications; similarly, Amazon Aurora PostgreSQL delivers up to three times the performance of PostgreSQL. Amazon RDS manages your Amazon Aurora databases, handling time-consuming tasks such as provisioning, patching, backup, recovery, failure detection and repair. You pay a simple monthly charge for each Amazon Aurora database instance you use. There are no upfront costs or long-term commitments required.",
      "Option A is wrong as S3 is not a transactional database.",
      "Option C is wrong as DynamoDB is not ideal for requirements where joins across multiple tables are required.",
      "Option D is wrong as Redshift is not a transaction database solution."
    ],
    "id": 99,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon S3 VPC endpoints",
      "B.Use a NAT Gateway",
      "C.Deploy a proxy server",
      "D.Use a private Amazon S3 Bucket "
    ],
    "detail": "An application server needs to be in a private subnet without access to the internet. The solution must retrieve and upload files to an Amazon S3 bucket. How should a Solutions Architect design a solution to meet these requirements?",
    "explanation": [
      "Correct answer is A as VPC Endpoints can help the application access S3 through Amazon network privately without navigating the internet.",
      "Refer AWS documentation - VPC Endpoint",
      "A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.",
      "Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.",
      "A gateway endpoint is a gateway that is a target for a specified route in your route table, used for traffic destined to a supported AWS service. The following AWS services are supported:",
      "Option B is wrong as NAT Gateway still routes the request through internet.",
      "Option C is wrong as proxy server would still route the request through internet",
      "Option D is wrong as private S3 bucket still needs to be access internet."
    ],
    "id": 100,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy the database on multiple Amazon EC2 instances backed by Amazon EBS across multiple Availability Zones. ",
      "B.Use Amazon RDS with a multiple Availability Zone option.",
      "C.Use RDS with a single Availability Zone option and schedule periodic database snapshots. ",
      "D.Use Amazon DynamoDB "
    ],
    "detail": "A customer is deploying a production portal application on AWS. The database tier has structured data. The company requires a solution that is easily manageable and highly available. How can these requirements be met?",
    "explanation": [
      "Correct answer is B as RDS is the most suitable option for structured data. RDS provides easy manageability and with multi AZ option would provide High Availability.",
      "Refer AWS Whitepaper - Storage Options",
      "Amazon RDS is ideal for existing applications that rely on MySQL, Oracle, or SQL Server traditional relational database engines. Since Amazon RDS offers full compatibility and direct access to native database engines, most code, libraries, and tools designed for these databases should work unmodified with Amazon RDS. Amazon RDS is also optimal for new applications with structured data that requires more sophisticated querying and joining capabilities than that provided by Amazon’s NoSQL database offering, Amazon DynamoDB.",
      "Option A is wrong as hosting database on EC2 instances would not be easy to manage.",
      "Option C is wrong as RDS with single AZ would not provide High Availability.",
      "Option D is wrong as DynamoDB is not suitable for structured data."
    ],
    "id": 101,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.AWS DataPipeline",
      "B.ClassicLink",
      "C.AWS Direct Connect",
      "D.Amazon Route53",
      "E.VPN connection "
    ],
    "detail": "A company is designing a hybrid IT architecture and requires a private connection between an on-premises data center and their virtual private cloud(VPC). Which of the following would enable the company to achieve this? Choose 2 answers",
    "explanation": [
      "Correct answers are C & E as VPN and Direct Connect allows private connectivity between On-Premises and VPC.",
      "Option A is wrong as Data Pipeline is to move data between storage services including on-premises servers, but would use Internet.",
      "Option B is wrong as ClassicLink allows you to link your EC2-Classic instance to a VPC in your account, within the same region.",
      "Option D is wrong as Route 53 is a DNS service to route requests to the VPC."
    ],
    "id": 102,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Write a script that queries the EC2 API for each instance status check",
      "B.Create CloudWatch metrics that stop and start the instance based off of status check alarms",
      "C.Implement a third party monitoring tool such as Nagios",
      "D.Write a script that periodically shuts down and starts instances "
    ],
    "detail": "One of your instances is reporting an unhealthy system status check, which cannot be repaired on your own. How can the process be automated to the repair the system status check failure in an AWS environment?",
    "explanation": [
      "Correct answer is B as the system check is beyond repair, you would need to stop and start the Instance which would launch the instance on a different machine. CloudWatch can be used to automate the process based on the system check.",
      "Refer AWS documentation - EC2 Monitoring System Instance Status Check"
    ],
    "id": 103,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.AWS CloudHSM",
      "B.AWS Trusted Advisor",
      "C.Server Side Encryption (SSE-S3)",
      "D.Server Side Encryption (SSE-KMS) "
    ],
    "detail": "A company’s policy requires that all data stored in Amazon S3 is encrypted. The company wants to use the option with the least overhead and does not want to manage any encryption keys. Which of the following options will meet the company’s requirements?",
    "explanation": [
      "Correct answer is C as SSE-S3 provides Server Side Encryption with S3 with S3 managing the encryption keys for you.",
      "Refer AWS documentation - S3 Server Side Encryption",
      "Use Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3) – Each object is encrypted with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.",
      "Option A is wrong as Cloud HSM is not seamless and needs you to handle keys.",
      "Option B is wrong as Trusted Advisor does not provide encryption. AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices.",
      "Option D is wrong as it would need you to generate and manage keys.",
      "Similar to SSE-S3, but with some additional benefits along with some additional charges for using this service. There are separate permissions for the use of an envelope key (that is, a key that protects your data's encryption key) that provides added protection against unauthorized access of your objects in S3. SSE-KMS also provides you with an audit trail of when your key was used and by whom. Additionally, you have the option to create and manage encryption keys yourself, or use a default key that is unique to you, the service you're using, and the region you're working in."
    ],
    "id": 104,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon S3 server-side encryption with AWS Key Management Service managed keys.",
      "B.Use Amazon S3 server-side encryption with customer-provided keys",
      "C.Use Amazon S3 server-side encryption with EC2 key pair.",
      "D.Use Amazon S3 bucket policies to restrict access to the data at rest.",
      "E.Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key",
      "F.Use SSL to encrypt the data while in transit to Amazon S3. "
    ],
    "detail": "A company is storing data on Amazon Simple Storage Service (S3). The company’s security policy mandates that data be encrypted at rest. Which of the following methods can achieve this? Choose 3 answers",
    "explanation": [
      "Correct answers are A, B & E",
      "Refer to the AWS S3 Protecting Data using Encryption",
      "Data at rest encryption using S3 can be implemented using either Server Side or Client Side encryption. SSE can be implemented using either KMS provided keys (SSE-KMS) or Customer provided keys (SSE-C). CSE can be implemented by encrypting the data before uploading it to S3 and then decrypting the data after downloading it from S3 at client side.",
      "Option C is wrong as server side encryption doesn't work with EC2 key pair",
      "Option D is wrong as bucket policies are just to restrict access to S3",
      "Option F is wrong as it targets the data in transit only."
    ],
    "id": 105,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2",
      "B.Amazon API Gateway",
      "C.AWS Elastic Beanstalk",
      "D.Amazon EC2 Container Service "
    ],
    "detail": "A Solutions Architect needs to deploy a node.js based web application that is highly available and scales automatically. The Marketing team needs to roll back on application releases quickly, and they need to have an operational dashboard. The Marketing team does not want to manage deployment of OS patches to the Linux servers. Use of which service will satisfy these requirements?",
    "explanation": [
      "Correct answer is C as Elastic Beanstalk provides a managed web application platform with support for node.js. It handles the deployment of latest patches and updates and also provides deployment versioning with the ability to rollback easily.",
      "Refer AWS documentation - Elastic Beanstalk & Deployments",
      "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.",
      "You can simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.",
      "Elastic Beanstalk provisions and operates the infrastructure and manages the application stack (platform) for you, so you don't have to spend the time or develop the expertise. It will also keep the underlying platform running your application up-to-date with the latest patches and updates. Instead, you can focus on writing code rather than spending time managing and configuring servers, databases, load balancers, firewalls, and networks.",
      "Options A & C are wrong as the handling for deployment and rollback needs to still worked on.",
      "Option B is wrong as API gateway just provides API orchestration and needs a backend service."
    ],
    "id": 106,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Set the ELB to only be attached to another AZ",
      "B.Make sure Auto Scaling is configured to launch in both AZs",
      "C.Make sure your AMI is available in both AZs",
      "D.Make sure the maximum size of the Auto Scaling Group is greater than 4 "
    ],
    "detail": "You have started a new job and are reviewing your company’s infrastructure on AWS You notice one web application where they have an Elastic Load Balancer (ELB) in front of web instances in an Auto Scaling Group. When you check the metrics for the ELB in CloudWatch you see four healthy instances in Availability Zone (AZ) A and zero in AZ B there are zero unhealthy instances. What do you need to fix to balance the instances across AZs?",
    "explanation": [
      "Correct answer is B as Auto Scaling group might not be configured to be using both AZs and hence launching instances in a single AZ",
      "Option A is wrong as ELB can be launched within a single AZ but can still route traffic to both the AZs",
      "Option C is wrong as AMI are regional and available for both AZs",
      "Option D is wrong as maximum size greater than 4 will just cause more than 4 instances to be launched evenly across AZs in case of scaling"
    ],
    "id": 107,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "There is a requirement to host a database on an EC2 Instance. The EBS Volume is required to support a high rate of IOPS since a large number of read and write requests are expected on the database. Which Amazon EBS volume type can meet the performance requirements of this database?",
    "explanation": [
      "Correct answer is A as \nProvisioned IOPS SSD (io1) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency. Unlike gp2, which uses a bucket and credit model to calculate performance, an io1 volume allows you to specify a consistent IOPS rate when you create the volume, and Amazon EBS delivers within 10 percent of the provisioned IOPS performance 99.9 percent of the time over a given year.",
      "Refer AWS documentation - EBS Volume Types"
    ],
    "id": 108,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Data Pipeline ",
      "B.Amazon Kinesis Data Streams",
      "C.Amazon Redshift",
      "D.Amazon S3 "
    ],
    "detail": "A company must ingest and aggregate advertising data in near real time. Thousands of records arrive each second. What service can meet this requirement?",
    "explanation": [
      "Correct answer is B as Kinesis Data Streams provides real time scalable data ingestion service.",
      "Refer AWS documentation - Kinesis Data Streams",
      "Amazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service. KDS can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events. The data collected is available in milliseconds to enable real-time analytics use cases such as real-time dashboards, real-time anomaly detection, dynamic pricing, and more.",
      "Option A is wrong an AWS Data Pipeline helps transfer for data only.",
      "Option C is wrong as Redshift is a data warehouse service and does not provide real time ingestion",
      "Option D is wrong as S3 provide storage and would not scale for real time ingestion of data as well as data aggregation."
    ],
    "id": 109,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Redshift",
      "B.Amazon DynamoDB",
      "C.Amazon S3",
      "D.Amazon RDS "
    ],
    "detail": "You have been tasked with choosing a datastore to persist GPS coordinates for a new app. The service needs consistent, single-digit millisecond latency at any scale. Which AWS service meets your requirements?",
    "explanation": [
      "Correct answer is B as DynamoDB is a NoSQL datastore managed by AWS and can provide millisecond latency.",
      "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity, makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications",
      "Refer AWS documentation - DynamoDB"
    ],
    "id": 110,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Pilot Light",
      "B.Warm standby",
      "C.Multi-Site",
      "D.Backup and Restore "
    ],
    "detail": "You have been instructed by your supervisor to devise a disaster recovery model for the resources in their AWS account. The key requirement while devising the solution is to ensure that the cost is at a minimum. Which of the following disaster recovery mechanisms would you employ in such a scenario?",
    "explanation": [
      "Correct answer is D as Backup and Restore is most cost effective solution for Disaster recovery. It involves backing up all the resources from primary, so as to recreate them in secondary in case a disaster happens. If you use this method, it can take a long time to restore your system in the event of a disruption or disaster",
      "Refer AWS Disaster Recovery Whitepaper",
      "The RTO/RPO reduces & cost increases as you go from left to right."
    ],
    "id": 111,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Provision a VPN connection between the on-premise data center and the AWS region using the VPN section of a VPC.",
      "B.Suggest provisioning a Direct Connect connection between the on-premise data center and the AWS region.",
      "C.Suggest using AWS import/export to transfer the TBs of data while synchronizing the new data as it arrives.",
      "D.Suggest leaving the data required for the application on-premise and use a VPN to query the on-premise database data from EC2 when required. "
    ],
    "detail": "A company is running data application on-premise that requires large amounts of data to be transferred to a VPC containing EC2 instances in an AWS region. The company is concerned about the total overall transfer costs required for this application and is potentially not going to deploy a hybrid environment for the Customer-facing part of the application to run in a VPC. Given that the data transferred to AWS is new data every time, what suggestions could you make to the company to help reduce the overall cost of data transfer to AWS? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is B as Direct Connect can help reduce cost and provide a dedicated, predictable high performance data transfer route between VPC and the on-premise environment.",
      "Option A is wrong as although the VPN connection might keep cost low, but would not be preferred option due to the low speeds and unpredictability.",
      "Option C is wrong as given that the data transferred to AWS is new data every time, Import/Export would not be an ideal option. As import/export is preferred mainly for first time data migration and using VPN/Direct Connect later on.",
      "If you have data you need to migrate into the AWS cloud for the first time, AWS Import/Export Disk is often much faster than transferring that data via the Internet.",
      "Option D is wrong as with the VPN the performance would be very poor and they do not want to deploy a hybrid solution."
    ],
    "id": 112,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Take a copy of the underlying EBS volumes to S3, and then do Cross-Region Replication.",
      "B.Enable Cross-Region snapshots for the Redshift Cluster.",
      "C.Create a CloudFormation template to restore the Cluster in another region.",
      "D.Enable Cross Availability Zone snapshots for the Redshift Cluster. "
    ],
    "detail": "A company has a Redshift cluster currently that contains 60TB of data. As a part of compliance, there is a requirement that a recovery site be setup in a separate region in case of a disaster. Which of the following solutions would help ensure that this requirement is fulfilled?",
    "explanation": [
      "Correct answer is B as Redshift allows Cross-Region snapshots which can be to restore the cluster in a separate region.",
      "Refer AWS documentation - Redshift Snapshots",
      "Copying snapshots across regions incurs data transfer charges. Once a snapshot is copied to the destination region, it becomes active and available for restoration purposes.",
      "Option A is wrong as Redshift does not expose underlying volumes.",
      "Option C is wrong as CloudFormation would help in creating the cluster, but would be help with the data.",
      "Option D is wrong as AZ snapshot does not allows restoration across regions."
    ],
    "id": 113,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Swagger extensions",
      "B.Stage Variables",
      "C.API Gateway variables",
      "D.Deployment variables "
    ],
    "detail": "A company is using API Gateway and deployment stages to manage multiple release stages for each API, such as alpha, beta, and production. They want to specify a different AWS Lambda function name for each stage in your API. How can the API Gateway be designed?",
    "explanation": [
      "Correct answer is B as stage variables help define environment variables which can provide different configuration for different stages.",
      "Refer AWS documentation - Stage Variables",
      "Stage variables are name-value pairs that you can define as configuration attributes associated with a deployment stage of an API. They act like environment variables and can be used in your API setup and mapping templates.",
      "For example, you can define a stage variable in a stage configuration, and then set its value as the URL string of an HTTP integration for a method in your API. Later, you can reference the URL string using the associated stage variable name from the API setup. This way, you can use the same API setup with a different endpoint at each stage by resetting the stage variable value to the corresponding URLs. You can also access stage variables in the mapping templates, or pass configuration parameters to your AWS Lambda or HTTP backend."
    ],
    "id": 114,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Keep only 10 instances running and manually launch 10 instances every day during office hours.",
      "B.Setup to run 10 instances during the pre-vacation period and only scale up during the office time by launching 10 more instances using the Auto Scaling schedule.",
      "C.During the pre-vacation period setup a scenario where the organization has 15 instances running and 5 instances to scale up and down using Auto Scaling based on the network I/O policy.",
      "D.During the pre-vacation period setup 20 instances to run continuously. "
    ],
    "detail": "A customer has a website which shows all the deals available across the market. The site experiences a load of 5 large EC2 instances generally. However, a week before Thanksgiving vacation they encounter a load of almost 20 large instances. The load during that period varies over the day based on the office timings. Which of the below mentioned solutions is cost effective as well as help the website achieve better performance?",
    "explanation": [
      "Correct answer is B is cost effective with 10 instances running, and 10 instances launched during the office timings only",
      "Option A is wrong as launching instances manually is cumbersome and not cost effective.",
      "Option C is wrong as running 15 instances is not cost effective compared to B",
      "Option D is wrong as 20 instances always running is overhead as its not needed always and not cost effective"
    ],
    "id": 115,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS",
      "B.Amazon EFS",
      "C.Amazon S3",
      "D.Amazon EC2 Instance store "
    ],
    "detail": "A Media company is designing their media processing flows. They want a file system with an ability to be mounted on various Linux EC2 Instances and manipulate large files with file locking capability. Which of the following would be an ideal storage service for this requirement?",
    "explanation": [
      "Correct answer is C as EFS provides a shared file system with an ability to manipulate large files.",
      "Refer AWS documentation - EFS & EFS Performance",
      "Amazon EFS provides file system access semantics, such as strong data consistency and file locking",
      "Media workflows like video editing, studio production, broadcast processing, sound design, and rendering often depend on shared storage to manipulate large files. A strong data consistency model with high throughput and shared file access can cut the time it takes to perform these jobs and consolidate multiple local file repositories into a single location for all users.",
      "Option A and D are wrong as EBS and instance store volume cannot be shared",
      "Option B is wrong as S3 can be shared, however is not ideal for manipulating large files."
    ],
    "id": 116,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Identity federation based on AWS Security Token Service (STS) using an AWS Identity and Access Management (IAM) policy for the respective Amazon S3 bucket",
      "B.IAM user per registered client with an IAM policy granting Amazon S3 access to the respective bucket",
      "C.Amazon S3 bucket policies with a conditional statement restricting by IP address",
      "D.Access Control Lists (ACL) to restrict access to selected AWS accounts "
    ],
    "detail": "Your company builds a mobile application that has already been downloaded several hundred thousand of times. Which authentication solution would enable mobile clients to access pictures stored in an Amazon Simple Storage Service (S3) bucket and provide you with the highest flexibility to rotate credentials?",
    "explanation": [
      "Correct answer is A as the key point here to highest flexibility to rotate credentials is using temporary credentials maintained and managed by AWS using STS.",
      "Refer AWS documentation - IAM Web Identity Federation",
      "Option B, C & D are not flexible and needs to be maintained for each user."
    ],
    "id": 117,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Move the digital assets to Amazon Glacier.",
      "B.Cache static content using CloudFront.",
      "C.Resize the files so that they are smaller.",
      "D.Use reserved EC2 Instances. "
    ],
    "detail": "A website, with global users, runs on EC2 Instances behind an ELB Application Load Balancer. The instances run in an Auto Scaling Group across multiple Availability Zones and deliver several large files that are stored on a shared Amazon EFS file system. The company needs to avoid serving the files from website every time a user requests these digital assets. How can the company improve the user experience of the web site?",
    "explanation": [
      "Correct answer is B as the requirement is to improve the performance of downloads and reduce the load on the system for Global users, CloudFront would help cache the contents and provide low latency access to the users.",
      "Refer AWS documentation - CloudFront Cache",
      "Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance. If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately.",
      "Option A is wrong as Glacier is for data archival.",
      "Option C is wrong as it does not address the issue.",
      "Option D is wrong as reserved EC2 instances help reduce cost for long term usage, it does not help improve performance."
    ],
    "id": 118,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Remove public read access and use signed URLs with expiry dates",
      "B.Use CloudFront distributions for static content.",
      "C.Block the IPs of the offending websites in Security Groups.",
      "D.Store photos on an EBS volume of the web server. "
    ],
    "detail": "You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?",
    "explanation": [
      "Correct answer is A as the website can use pre signed urls with limited time access and keep refreshing it, so that other websites cannot access them",
      "Refer AWS documentation - S3 Share Object with PreSigned URL",
      "All objects by default are private. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.",
      "Option B is wrong as CloudFront urls can still be directly accessed.",
      "Option C is not scalable",
      "Option D does not work as storing images on EBS would still need to be exposed."
    ],
    "id": 119,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Assign an S3 policy to one IAM user and a CloudWatch policy to another IAM user. Have the instance execute tasks as the appropriate IAM user for the given task",
      "B.Assign an S3 policy and a CloudWatch policy to a single IAM user. Have the instance execute tasks as the IAM user",
      "C.Assign an S3 policy and a CloudWatch policy to a single IAM role. Assign the IAM role to the instance at deployment time",
      "D.Assign an S3 policy to one IAM role and a CloudWatch policy to another IAM role. Assign both IAM roles to the EC2 instance at deployment time "
    ],
    "detail": "You are planning on creating an EC2 instance that will create S3 objects and modify CloudWatch alarms. What is the best way to deploy this instance? Choose the correct answer",
    "explanation": [
      "Correct answer is C as the approach would be to create a policy with the permissions attached to a single IAM Role and assign the role EC2 instance to be launched with.",
      "Refer AWS documentation - IAM Best Practices",
      "Option A & B are wrong as using an IAM user is not recommended.",
      "Option D is wrong as only a single role can be attached to the EC2 instance"
    ],
    "id": 120,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A. Use IAM roles for Amazon ECS tasks to associate a specific IAM role with each ECS task definition",
      "B.Use IAM roles on the Amazon ECS container instances to associate IAM role with each ECS task on that instance",
      "C. Connect to each running amazon ECS container instance and add discrete credentials",
      "D.Reboot each Amazon ECS task programmatically to generate new instance metadata for each task "
    ],
    "detail": "Your security team requires each Amazon ECS task to have an IAM policy that limits the task’s privileges to only those required for its use of AWS services. How can you achieve this?",
    "explanation": [
      "Correct answer is A as IAM role needs to be associated with the ECS task definition.",
      "Refer AWS documentation - ECS Task IAM Role",
      "With IAM roles for Amazon ECS tasks, you can specify an IAM role that can be used by the containers in a task. Applications must sign their AWS API requests with AWS credentials, and this feature provides a strategy for managing credentials for your applications to use, similar to the way that Amazon EC2 instance profiles provide credentials to EC2 instances. Instead of creating and distributing your AWS credentials to the containers or using the EC2 instance’s role, you can associate an IAM role with an ECS task definition or RunTask API operation. The applications in the task’s containers can then use the AWS SDK or CLI to make API requests to authorized AWS services."
    ],
    "id": 121,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a web proxy server in your VPC and enforce URL-based rules for outbound access Remove default routes.",
      "B.Implement security groups and configure outbound rules to only permit traffic to software depots.",
      "C.Move all your instances into private VPC subnets remove default routes from all routing tables and add specific routes to the software depots and distributions only.",
      "D.Implement network access control lists to all specific destinations, with an Implicit deny as a rule. "
    ],
    "detail": "You are designing a data leak prevention solution for your VPC environment. You want your VPC Instances to be able to access software depots and distributions on the Internet for product updates. The depots and distributions are accessible via third party CDNs by their URLs. You want to explicitly deny any other outbound connections from your VPC instances to hosts on the Internet. Which of the following options would you consider?",
    "explanation": [
      "Correct answer is A as Security group and NACL cannot have URLs in the rules nor does the route and work only with IP address or other Security groups.",
      "Refer AWS Answer",
      "Web proxy servers are the most common type of proxy server used today. Web proxies control HTTP and HTTPS traffic and have ubiquitous support from web clients such as web browsers, web command line tools, programming tools, and web application servers. SOCKS proxy servers, although less common than web proxies, leverage custom SOCKS proxy clients to control any type of IP network traffic. In either case, each EC2 instance must be configured (typically through initial instance bootstrapping or application deployment and configuration) to leverage the proxy solution at either the OS or application level."
    ],
    "id": 122,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Only allow SSL connections through a VPC security group.",
      "B.Use GRANT and ALTER commands with the REQUIRE SSL option for the user.",
      "C.Connect with a MySQL client that references the public key.",
      "D.Ensure that the SSL parameters are set in the parameter group at launch. "
    ],
    "detail": "A Solutions Architect needs to design an Amazon RDS for MySQL solution whereby users must be authenticated using only SSL connections. How should the Solutions Architect design the solution?",
    "explanation": [
      "Correct answer is C as for SSL connection AWS attaches an SSL certificate to the primary instance, and the client needs to use the public key for connectivity.",
      "Refer AWS documentation - RDS MySQL SSL Connection",
      "Amazon RDS supports Secure Sockets Layer (SSL) connections with DB instances running the MySQL database engine.",
      "Amazon RDS creates an SSL certificate and installs the certificate on the DB instance when Amazon RDS provisions the instance. These certificates are signed by a certificate authority. The SSL certificate includes the DB instance endpoint as the Common Name (CN) for the SSL certificate to guard against spoofing attacks. The public key is stored at https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem.",
      "An SSL certificate created by Amazon RDS is the trusted root entity and should work in most cases but might fail if your application does not accept certificate chains. If your application does not accept certificate chains, you might need to use an intermediate certificate to connect to your region",
      "To encrypt connections using the default mysql client, launch the mysql client using the --ssl-ca parameter to reference the public key, as shown in the examples following.",
      "The following example shows how to launch the client using the --ssl-ca parameter for MySQL 5.7 and later."
    ],
    "id": 123,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Disable sticky sessions",
      "B.Reduce the frequency of the health checks",
      "C.Enable cross zone load balancer",
      "D.Amazon recommends using two availability zone behind ELB "
    ],
    "detail": "You have EC2 instances in three availability zones, with a load balancer configured on all the three AZs. You observe that one availability zone is receiving more traffic as compared to other AZs, how can you solve this problem effectively",
    "explanation": [
      "Correct answer is A as Sticky Sessions may cause the users to be routed to the same instances.",
      "Option B is wrong as reducing frequency of health checks would only help determining whether the instance is healthy or not. And it would be the same for all the instances across AZs",
      "Option C is wrong as enabling cross zone load balancer would only help route traffic equally across instances and not the AZs, which seems not to be the case here.",
      "Option D is wrong as AWS recommends spreading you instances across all available AZs to make the application HA"
    ],
    "id": 124,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use AWS S3 Standard",
      "B.Use AWS S3 Infrequent Access",
      "C.Use AWS Glacier with Standard retrievals",
      "D.Use AWS Glacier with pay for Expedited retrievals as needed. "
    ],
    "detail": "A news company has produced a lot of videos. They want to design a storage solution in AWS. These videos are required for a day, after which they should be archived. If required, the videos can be request with advance notices and expected to be available within 5 hours. However, in case of any breaking news the videos need to be made available within minutes. As a solution architect how would you be designing the solution in a cost-effective manner?",
    "explanation": [
      "Correct answer is D as Glacier provides the most cost-effective archival solution. For normal requests, which default for standard retrieval, the videos can be retrieved within 3-5 hours. For express retrieval, Expedited retrieval request can be made with additional charges for the video to be available in 1-5 minutes.",
      "Refer AWS documentation - Glacier FAQs - Data Retrievals",
      "Q: How do I use Standard retrievals?",
      "To make a Standard retrieval, set the “Tier” parameter in the InitiateJob API request to “Standard”. If no tier is specified, the request will default to Standard.",
      "Q: What are Expedited retrievals?",
      "Expedited retrievals allow you to quickly access your data when occasional urgent requests for a subset of archives are required. For all but the largest archives (250MB+), data accessed using Expedited retrievals are typically made available within 1 – 5 minutes. There are two types of Expedited retrievals: On-Demand and Provisioned. On-Demand requests are like EC2 On-Demand instances and are available the vast majority of the time. Provisioned requests are guaranteed to be available when you need them.",
      "Option A & B are wrong as S3 would not be a cost-effective solution.",
      "Option C is wrong as standard retrievals would not be able to fetch the videos within minutes."
    ],
    "id": 125,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy ElastiCache in-memory cache running in each availability zone",
      "B.Implement sharding to distribute load to multiple RDS MySQL instances",
      "C.Increase the RDS MySQL Instance size and Implement provisioned IOPS",
      "D.Add an RDS MySQL read replica in each availability zone "
    ],
    "detail": "Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? Choose 2.",
    "explanation": [
      "Key point here is there is Read Contention",
      "Correct answer is A & D as either the RDS needs to be scaled out using Read Replica or using a Caching solution like ElastiCache.",
      "Option B is wrong as this is only a read contention, the writes work fine and sharding would help improve writes",
      "Option C is wrong as not scalable beyond a limit, this is only a read contention, the writes work fine"
    ],
    "id": 126,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EBS",
      "C.Amazon EFS",
      "D.Amazon Storage Gateway VTL "
    ],
    "detail": "A Company is developing a document sharing application and needs a storage layer. As a security measure, the storage should provide automatic support for versioning so that users can easily roll back to a previous version or recover a deleted document. Which AWS service will meet the above requirements?",
    "explanation": [
      "Correct answer is A as S3 provides a durable, scalable object storage. S3 also allows versioning of documents, which can help the user to revert back to a previous version to recover from overwrites or accidental deletes.",
      "Refer AWS documentation - S3 Versioning",
      "Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite. For example:",
      "Option B is wrong as EBS is a durable block storage volume attached to an EC2 instance.",
      "Option C is wrong as EFS is an elastic and scalable file storage and although it can help sharing of documents, it does not provide versioning feature.",
      "Option D is wrong as AWS Storage Gateway VTL helps to extend your on-premise IT infrastructure with AWS storage."
    ],
    "id": 127,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Apply the latest patch of OS and always keep it updated. ",
      "B.Allow only IAM users to connect with the EC2 instances with their own secret access key.",
      "C.Disable the password-based login for all the users. All the users should use their own keys to connect with the instance securely. ",
      "D.Create a procedure to revoke the access rights of the individual user when they are not required to connect to EC2 instance anymore for the purpose of application configuration. "
    ],
    "detail": "An organization has hosted an application on the EC2 instances. There will be multiple users connecting to the instance for setup and configuration of application. The organization is planning to implement certain security best practices. Which of the below mentioned pointers will not help the organization achieve better security arrangement?",
    "explanation": [
      "Correct answer is B as IAM users cannot connect to EC2 instances using their access keys. Access to EC2 instances are governed by ssh keys.",
      "Refer AWS Article - Tips for Securing EC2 Instance",
      "Option A is wrong as the EC2 instance should always be updated for latest patch",
      "Option C is wrong as password based login should be disabled, and for each individual user their keys should be added to the instance from them to login",
      "Option D is wrong as the access should be removed when not required."
    ],
    "id": 128,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM access and secret key, and store it in the Lambda function",
      "B.Assign an IAM role to the Lambda function with permissions to list all Amazon RDS instances.",
      "C.Assign an IAM role to Amazon RDS with permissions to list all Amazon RDS instances.",
      "D.Create an IAM access and secret key and store it in an encrypted RDS database. "
    ],
    "detail": "A Solutions Architect is designing a Lambda function that calls an API to list all running Amazon RDS instances. How should the request be authorized?",
    "explanation": [
      "Correct answer is B as Lambda function needs to assign a role with permissions to list the RDS instances.",
      "Refer AWS documentation - Lambda Permissions",
      "Each Lambda function has an IAM role (execution role) associated with it. You specify the IAM role when you create your Lambda function. Permissions you grant to this role determine what AWS Lambda can do when it assumes the role. There are two types of permissions that you grant to the IAM role:",
      "Option A is wrong as it is not recommended using the access keys.",
      "Option C is wrong as permissions should be granted to the Lambda instance and not RDS.",
      "Option D is wrong as it is not recommended using the access keys and Lambda would need permissions to refer the RDS instance as well."
    ],
    "id": 129,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create tables for each week. Move the data to S3 for archival and delete the old tables",
      "B.Create tables for each week with the current week configured for higher throughput. Move the data to Glacier for archival and delete the old tables",
      "C.Create a single table for higher throughput. Move the data to S3 for archival.",
      "D.Create a single table for higher throughput. Move the data to Glacier for archival. "
    ],
    "detail": "A utility company is building an application that stores data coming from more than 10,000 sensors. This company would like to query information coming from a particular sensor for the past week very rapidly, after which the data is infrequently accessed for another week. The data then needs to be archived. Using Amazon DynamoDB for its scalability and rapidity, how do you implement this in the most cost-effective way?",
    "explanation": [
      "Correct answer is B as the data fetch pattern is different for each week, it would be better to define different DynamoDB tables for each week with the current week having a higher provisioned throughput configured. The data can then be moved to Glacier and the old DynamoDB table can be dropped.",
      "Option A is wrong as the current week table throughput needs to configured higher and S3 would not be an ideal solution for archival",
      "Option C & D are wrong as single table would not be performant and the old data is not being removed."
    ],
    "id": 130,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Enable SSL certificates for the CloudTrail logs.",
      "B.CloudTrail, by default, encrypts the logs in S3",
      "C.Enable Server-Side Encryption for the trail.",
      "D.Enable CloudTrail Log File Integrity Validation.",
      "E.Enable Server-Side Encryption for the destination S3 bucket.",
      "F.Enable CloudTrail Log File Durability Validation. "
    ],
    "detail": "A Company has enabled CloudTrail logs its AWS account for audits. In addition, the IT Security department has mentioned that the logs need to be encrypted and measures be taken to check if the logs are not being modified. How can this be achieved? Choose 2 answers",
    "explanation": [
      "Correct answers are B & D as CloudTrail logs stored in S3 are encrypted by AWS using Server Side Encryption. CloudTrail also provides the \nlog file integrity validation feature to help determine if the logs are tampered with.",
      "Refer AWS documentation - CloudTrail Encryption & Log File Integrity validation",
      "By default, the log files delivered by CloudTrail to your bucket are encrypted by Amazon server-side encryption with Amazon S3-managed encryption keys (SSE-S3).",
      "To determine whether a log file was modified, deleted, or unchanged after CloudTrail delivered it, you can use CloudTrail log file integrity validation. This feature is built using industry standard algorithms: SHA-256 for hashing and SHA-256 with RSA for digital signing. This makes it computationally infeasible to modify, delete or forge CloudTrail log files without detection. You can use the AWS CLI to validate the files in the location where CloudTrail delivered them."
    ],
    "id": 131,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EFS",
      "B.Amazon S3",
      "C.AWS Storage Gateway",
      "D.Amazon EBS "
    ],
    "detail": "A Solutions Architect is architecting a workload that requires a highly available and scalable shared block file storage system that must be consumed by multiple Linux applications. Which service meets this requirement?",
    "explanation": [
      "Correct answer is A as EFS provides a shared file system which is AWS managed and scalable and highly available.",
      "Refer AWS documentation - EFS",
      "Amazon Elastic File System (Amazon EFS) provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. It is easy to use and offers a simple interface that allows you to create and configure file systems quickly and easily. Amazon EFS is built to elastically scale on demand without disrupting applications, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. It is designed to provide massively parallel shared access to thousands of Amazon EC2 instances, enabling your applications to achieve high levels of aggregate throughput and IOPS that scale as a file system grows, with consistent low latencies. As a regional service, Amazon EFS is designed for high availability and durability storing data redundantly across multiple Availability Zones.",
      "With these capabilities, Amazon EFS is well suited to support a broad spectrum of use cases, including web serving and content management, enterprise applications, media and entertainment processing workflows, home directories, database backups, developer tools, container storage, and big data analytics workloads.",
      "Option B is wrong as S3 is an object based storage.",
      "Option C is wrong as AWS Storage Gateway is a hybrid storage service that enables your on-premises applications to seamlessly use AWS cloud storage. You can use the service for backup and archiving, disaster recovery, cloud data processing, storage tiering, and migration",
      "Option D is wrong as EBS volumes cannot be shared across multiple instances."
    ],
    "id": 132,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Redshift",
      "B. Amazon DynamoDB",
      "C. Amazon SQS",
      "D. Amazon RDS "
    ],
    "detail": "Your existing web application requires a persistent key-value store database that must service 50,000 reads/second. Your company is looking at 10% growth in traffic and data volume month over month for the next several years. Which service meets these requirements?",
    "explanation": [
      "Correct answer is B as DynamoDB is fully managed NoSQL solution and supports both key-value and document structures.",
      "Refer AWS FAQs - DynamoDB",
      "DynamoDB Auto Scaling is a fully managed feature that automatically scales up or down provisioned read and write capacity of a \nDynamoDB table or a global secondary index, as application requests increase or decrease. \nDynamoDB supports key-value and document data structures."
    ],
    "id": 133,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use the IAM role and assign it to the instance. ",
      "B.Since the application is hosted on EC2, it does not need credentials to access S3. ",
      "C.Use the X.509 certificates instead of the access and the secret access keys. ",
      "D.Use the IAM based single sign between the AWS resources and the organization application. "
    ],
    "detail": "An organization has created an application, which is hosted on the AWS EC2 instance. The application stores images to S3 when the end user uploads to it. The organization does not want to store the AWS secure credentials required to access the S3 inside the instance. Which of the below mentioned options is a possible solution to avoid any security threat?",
    "explanation": [
      "Correct answer is A as the most secure way is to use IAM role with EC2 instances which will allow applications to access AWS services using temporary credentials.",
      "Refer AWS documentation - IAM Role with EC2 Instances",
      "We designed IAM roles so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use. Instead of creating and distributing your AWS credentials, you can delegate permission to make API requests using IAM roles as follows:"
    ],
    "id": 134,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Default Amazon CloudWatch metrics. ",
      "B.Custom Amazon CloudWatch metrics. ",
      "C.Amazon Inspector resource monitoring. ",
      "D.Detailed monitoring of Amazon EC2 instances. "
    ],
    "detail": "A Solutions Architect is designing a solution that can monitor disk space and swap utilization of all Amazon EC2 instances running Amazon Linux and Windows. Which solution meets this requirement?",
    "explanation": [
      "Correct answer is B as Memory and Disk swap utilization is not covered by CloudWatch out of the box metrics and need to be implemented using custom metrics.",
      "Refer AWS documentation - EC2 monitoring",
      "Memory utilization, disk swap utilization, disk space utilization, page file utilization, log collection",
      "[Linux and Windows Server instances] Collect Metrics and Logs from Amazon EC2 Instances and On-Premises Servers with the CloudWatch Agent",
      "[Migration from previous CloudWatch Logs agent on Windows Server instances] Migrate Windows Server Instance Log Collection to the CloudWatch Agent",
      "Option A and D are wrong and CloudWatch do not track these metrics.",
      "Option C is wrong as Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS"
    ],
    "id": 135,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use DynamoDB Streams to monitor the changes in the DynamoDB table.",
      "B.Use S3 event notification with SNS to send email to users when a new object is added.",
      "C.Use S3 event notification with SES to send email to users when a new object is added.",
      "D.Setup CloudWatch logs to monitor the DynamoDB table for changes. Then trigger AWS SQS to send the changes to the application. "
    ],
    "detail": "A company is developing a photo sharing mobile application. The application stores the photos in S3, while the metadata for the photo is stored in the DynamoDB. Application maintains the user details and their friends’ relationship in DynamoDB. The company wants a feature to automatically sends notifications to the mobile devices of all friends in a group as soon as one friend uploads a new picture. How can the application be designed in a performant manner?",
    "explanation": [
      "Correct answer is A as DynamoDB stream can help capture the event of what changed i.e. who added the photo. The application then can check the user who uploaded it, his friends to whom the notification can be sent.",
      "Refer AWS documentation - DynamoDB Streams",
      "DynamoDB Streams enables solutions such as these, and many others. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table, and stores this information in a log for up to 24 hours. Applications can access this log and view the data items as they appeared before and after they were modified, in near real time.",
      "A \nDynamoDB stream is an ordered flow of information about changes to items in an Amazon DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.",
      "Whenever an application creates, updates, or deletes items in the table, DynamoDB Streams writes a stream record with the primary key attribute(s) of the items that were modified. A \nstream record contains information about a data modification to a single item in a DynamoDB table. You can configure the stream so that the stream records capture additional information, such as the \"before\" and \"after\" images of modified items.",
      "Option B & C are wrong as S3 even though can notify, does not have the metadata and relationship mapping.",
      "Option D is wrong as CloudWatch logs need to trigger a Lambda event."
    ],
    "id": 136,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Store the archive in Amazon S3 Reduced Redundancy Storage. ",
      "B.Store the archive in Amazon Glacier and use standard retrieval for all content. ",
      "C.Store the archive in Amazon S3 with a lifecycle policy to move this to S3 infrequent access after 30 days. ",
      "D.Store the archive in Amazon Glacier and pay the additional charge for expedited retrieval when needed. "
    ],
    "detail": "Your company has plan to migrate their 20TB video archive to AWS. The files are rarely accessed but sometimes they would like to access them and a 3 to 5-hour retrieval time frame is acceptable. However, when there is a breakup the editors require access to archived footage within minutes. Which storage solution meets the needs of this organization while providing the LOWEST cost of storage?",
    "explanation": [
      "Correct answer is D as Glacier provide a low cost solution for storing the archives and allow a 3-5 hours standard retrieval time. However, Glacier also provides an expedited retrieval to allow accessing the objects within minutes at an extra cost.",
      "Refer AWS documentation - Glacier FAQs - Data Retrievals",
      "Standard retrievals allow you to access any of your archives within several hours. Standard retrievals typically complete within 3 – 5 hours.",
      "Expedited retrievals allow you to quickly access your data when occasional urgent requests for a subset of archives are required. For all but the largest archives (250MB+), data accessed using Expedited retrievals are typically made available within 1 – 5 minutes. There are two types of Expedited retrievals: On-Demand and Provisioned. On-Demand requests are like EC2 On-Demand instances and are available the vast majority of the time. Provisioned requests are guaranteed to be available when you need them.",
      "Option A & C are wrong as they are not cost effective",
      "Option B is wrong as standard retrieval would not allow access to the objects within minutes."
    ],
    "id": 137,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Launch the test and production instances in separate regions and allow region wise access to the group",
      "B.Define the IAM policy which allows access based on the instance ID",
      "C.Create an IAM policy with a condition which allows access to only small instances",
      "D.Define the tags on the test and production servers and add a condition to the IAM policy which allows access to specific tags "
    ],
    "detail": "An organization has launched 5 instances: 2 for production and 3 for testing. The organization wants that one particular group of IAM users should only access the test instances and not the production ones. How can the organization set that as a part of the policy?",
    "explanation": [
      "Correct answer is D as it is possible using ResourceTag condition which can work on any instance size, instance type, AZ, region",
      "Option A, B & C are not feasible as they are bound to change and either too specific or generic."
    ],
    "id": 138,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Change the source to -1 to remove source IP addresses previously unseen",
      "B.Change the source to the VPC CIDR block",
      "C.Change the source to the application instances IDs.",
      "D.Change the source to the security group ID attached to the application instances. "
    ],
    "detail": "A Solutions Architect is concerned that the current security group rules for a database tier are too permissive and may permit requests that should be restricted. Below are the current Security group permissions for the database tier:– Protocol: TCP – Port Range: 1433 (MS SQL) – Source: ALLCurrently, the only identified resource that needs to connect to the databasess the application tier consisting of an Auto Scaling group of EC2 instances.What changes can be made to this security group that would offer the users LEAST privilege?",
    "explanation": [
      "Correct answer is D as only the application needs to access the database, the security should be limited to allow only the application. Also, as the application tier is in auto scaling group, the IPs can keep on changed and it is recommended to use security groups associated with instances.",
      "Refer AWS documentation - VPC Security Groups",
      "The following are the basic parts of a security group rule in a VPC:",
      "Option A is wrong as -1 is not a valid value allowed. Only CIDR and Security groups are allowed.",
      "Option B is wrong as VPC CIDR is too large and would allow other resources to access the database as well.",
      "Option C is wrong as the instances are part of auto scaling group, the IDs would keep on changing."
    ],
    "id": 139,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use an IAM policy that references the LDAP account identifiers and the AWS credentials.",
      "B.Use SAML (Security Assertion Markup Language) to enable single sign-on between AWS and LDAP",
      "C.Use AWS Security Token Service from an identity broker to issue short-lived AWS credentials",
      "D.Use IAM roles to automatically rotate the IAM credentials when LDAP credentials are updated.",
      "E.Use the LDAP credentials to restrict a group of users from launching specific EC2 instance types. "
    ],
    "detail": "Which technique can be used to integrate AWS IAM (Identity and Access Management) with an on-premise LDAP (Lightweight Directory Access Protocol) directory service?",
    "explanation": [
      "Correct answer is C to use an Identity Broker with STS to issue short lived credentials",
      "Option B is wrong as its not mentioned if the LDAP is SAML 2.0 compliant and SAML assertion should be generated by an identity provider and then pass it to AWS Security Token Service by the client"
    ],
    "id": 140,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Spot Instances",
      "B.Reserved instances",
      "C.Dedicated instances",
      "D.On-Demand instances "
    ],
    "detail": "You have a distributed application that periodically processes large volumes of data across multiple Amazon EC2 Instances. The application is designed to recover gracefully from Amazon EC2 instance failures. You are required to accomplish this task in the most cost-effective way. Which of the following will meet your requirements?",
    "explanation": [
      "Key point here is Cost effective way and the ability of the instance to recover gracefully.",
      "Correct answer is A as Spot instances can help lower the cost for processing the periodic large volume. Also, as the application is designed to recover gracefully from an instance failure, Spot instances fit well as even in case the instances are terminated abruptly it is fine.",
      "Refer AWS documentation - EC2 How Spot Instances Work",
      "When you use Spot instances, you must be prepared for interruptions. Amazon EC2 can interrupt your Spot instance when the Spot price rises above your bid price, when the demand for Spot instances rises, or when the supply of Spot instances decreases"
    ],
    "id": 141,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Amazon S3 bucket and store all of the documents in this bucket. ",
      "B.Create an Amazon EBS volume and allow multiple users to mount that volume to their EC2 instance(s). ",
      "C.Use Amazon Glacier to store all of the documents. ",
      "D.Create an Amazon Elastic File System (Amazon EFS) to store and share the documents. "
    ],
    "detail": "A media company asked a Solutions Architect to design a highly available storage solution to serve as a centralized document store for their Amazon EC2 instances. The storage solution needs to be POSIX-compliant, scale dynamic and able to serve up to 100 concurrent EC2 instances. Which solution meets these requirements?",
    "explanation": [
      "Correct answer is D as EFS can be used as centralized document store which is scalable, POSIX compliant and shared between EC2 instances.",
      "Refer AWS documentation - EFS",
      "Multiple Amazon EC2 instances and on-premises servers can simultaneously access an Amazon EFS file system, so applications that scale beyond a single instance can access a file system. Amazon EC2 instances running in multiple Availability Zones (AZs) within the same region can access the file system, so that many users can access and share a common data source.",
      "Amazon EFS is designed to provide the throughput, IOPS, and low latency needed for a broad range of workloads. With Amazon EFS, throughput and IOPS scale as a file system grows, and file operations are delivered with consistent, low latencies.",
      "Amazon EFS allows you to tightly control access to your file systems through POSIX permissions",
      "Option A is wrong as S3 is not POSIX complaint.",
      "Option B is wrong as EBS volumes has their scalability limits and cannot be shared across EC2 instances.",
      "Option C is wrong as Glacier does not interact directly with EC2 instances."
    ],
    "id": 142,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use Pre-Signed URLs instead to upload the pictures.",
      "B.Generate a custom application URL for each user with a validity of 1 week",
      "C.Provide User IAM Role access to the S3 bucket",
      "D.Control it through the S3 bucket policy "
    ],
    "detail": "A company is building a mobile social media management solution and uses S3 as their data store. The company wants to allow newly registered users to upload their profile picture within a week after registration is completed. How can they handle the uploads in a simplest way?",
    "explanation": [
      "Correct answer is A as S3 pre-signed urls allow the flexibility to generate urls with expiration date, so that the users can upload their pictures. Pre-Signed url and already signed and do not need the user to be an IAM user, which would not be the case with the mobile application.",
      "Refer AWS documentation - S3 PreSigned Upload",
      "A pre-signed URL gives you access to the object identified in the URL, provided that the creator of the pre-signed URL has permissions to access that object. That is, if you receive a pre-signed URL to upload an object, you can upload the object only if the creator of the pre-signed URL has the necessary permissions to upload that object.",
      "All objects and buckets by default are private. The pre-signed URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. When you create a pre-signed URL, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (PUT for uploading objects), and an expiration date and time. The pre-signed URLs are valid only for the specified duration.",
      "Option B is wrong as the application would need create and maintain the urls and expiration checks.",
      "Option C & D are wrong as it would need IAM user or an Account"
    ],
    "id": 143,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use a public-facing load balancer per region to load-balance web traffic and enable HTTP health checks.",
      "B.Use a public-facing load balancer per region to load-balance web traffic and enable sticky sessions.",
      "C.Use Amazon Route 53, and apply a geolocation routing policy to distribute traffic across both regions",
      "D.Use Amazon Route 53, and apply a weighted routing policy to distribute traffic across both regions. "
    ],
    "detail": "A US-based company is expanding their web presence into Europe. The company wants to extend their AWS infrastructure from Northern Virginia (us-east-1) into the Dublin (eu-west-1) region. Which of the following options would enable an equivalent experience for users on both continents?",
    "explanation": [
      "Correct answer is C as geo routing can help users from specific geography are routed to specific AWS region.",
      "Refer AWS documentation - Route 53 Geo Routing",
      "Use the geolocation routing policy when you want Amazon Route 53 to respond to DNS queries based on the location of your users.",
      "Option A & B are wrong as load balancer would not help along and would need Route 53 over it.",
      "Option D is wrong as Route 53 weighted policy would route requests randomly more on a Round Robin fashion as per the defined weight."
    ],
    "id": 144,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Store the data in S3 with Server Side Encryption and copy the data over to Redshift cluster",
      "B.Store the data in S3. Launch an encrypted Redshift cluster, copy the data to the Redshift cluster and store back in S3 in encrypted format",
      "C.Store the data in S3 with Server Side Encryption. Launch an encrypted Redshift cluster and copy the data to the cluster.",
      "D.Store the data in S3 with Server Side Encryption. Launch a Redshift cluster, copy the data to cluster and enable encryption on the cluster. "
    ],
    "detail": "A company wants to use Redshift cluster for petabyte-scale data warehousing. Data for processing would be stored on Amazon S3. As a security requirement, the company wants the data to be encrypted at rest. As a solution architect how would you implement the solution?",
    "explanation": [
      "Correct answer is C as the need is for data at rest encryption. S3 with SSE will help store the data in S3 in encrypted format.",
      "Refer AWS documentation - Redshift Encryption & S3 Encryption",
      "In Amazon Redshift, you can enable database encryption for your clusters to help protect data at rest. When you enable encryption for a cluster, the data blocks and system metadata are encrypted for the cluster and its snapshots.",
      "Encryption is an optional, immutable setting of a cluster. If you want encryption, you enable it during the cluster launch process. To go from an unencrypted cluster to an encrypted cluster or the other way around, unload your data from the existing cluster and reload it in a new cluster with the chosen encryption setting.",
      "Option A is wrong as data is not encrypted in Redshift.",
      "Option B is wrong as data is not encrypted in S3.",
      "Option D is wrong as you cannot enable encryption after Redshift cluster is launched."
    ],
    "id": 145,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enabled Detailed monitoring for EC2 instances",
      "B.Implement Custom metrics for CloudWatch",
      "C.Use CloudWatch metrics for EC2 instances",
      "D.Use a Third-party monitoring solution "
    ],
    "detail": "A company hosts their applications on lot of EC2 instances on both Linux and windows. They want to monitor Memory utilization, disk swap utilization for all the EC2 instances. How can they implement the monitoring?",
    "explanation": [
      "Correct answer is B as Memory and Disk swap utilization is not covered by CloudWatch out of the box metrics and need to be implemented using custom metrics.",
      "Refer AWS documentation - EC2 Monitoring",
      "Memory utilization, disk swap utilization, disk space utilization, page file utilization, log collection",
      "[Linux and Windows Server instances] Collect Metrics and Logs from Amazon EC2 Instances and On-Premises Servers with the CloudWatch Agent",
      "[Migration from previous CloudWatch Logs agent on Windows Server instances] Migrate Windows Server Instance Log Collection to the CloudWatch Agent"
    ],
    "id": 146,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Elastic Load Balancing",
      "B.Amazon Relational Database Service (RDS)",
      "C.Amazon CloudWatch",
      "D.Amazon ElastiCache",
      "E.Amazon DynamoDB",
      "F.AWS Storage Gateway "
    ],
    "detail": "You are developing a highly available web application using stateless web servers. Which services are suitable for storing session state data? Choose 3 answers.",
    "explanation": [
      "Correct answer are B, D & E as RDS, ElastiCache and DynamoDB can be used for storing state data.",
      "Option A is wrong as ELB is mainly for load balancing.",
      "Option C is wrong as CloudWatch is for monitoring and metrics",
      "Option F is wrong as Storage gateway is mostly for backups and archival",
      "Refer to Storage Options Whitepaper"
    ],
    "id": 147,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use the CORS feature in the API Gateway",
      "B.Use Stages",
      "C.Use Swagger Extensions",
      "D.Use SSL Certificates "
    ],
    "detail": "You have an EC2 Instance located in your AWS VPC. This EC2 Instance hosts an application that is going to make use of the API Application gateway. Which of the following features can assist to ensure that the EC2 Instances only accepts request from the API Gateway.",
    "explanation": [
      "Correct answer is D as SSL certificates can be used to help backend system authenticate and verify the HTTP requests are being initiated from API Gateway.",
      "Refer AWS documentation - API Gateway SSL Authentication",
      "You can use API Gateway to generate an SSL certificate and use its public key in the backend to verify that HTTP requests to your backend system are from API Gateway. This allows your HTTP backend to control and accept only requests originating from Amazon API Gateway, even if the backend is publicly accessible.",
      "Option A is wrong as CORS enable cross domain access to API’s",
      "Option B is wrong as Stages help deploy multiple API versions",
      "Option C is wrong as Swagger helps in API documentation."
    ],
    "id": 148,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Configure CSS bucket to explicitly enable cross-origin requests from website.s3-website-us-east-1.amazonaws.com.",
      "B.Modify bucket policy on CSS bucket to able to access website bucket",
      "C.Modify bucket policy on website bucket to able to access CSS bucket",
      "D.This is not possible "
    ],
    "detail": "You are hosting a website in an S3 bucket with the website endpoint https://website.s3-website-us-east-1.amazonaws.com. Website is enhanced to use CSS files that are stored in different bucket which is also public. But layout on the client browser is not rendered properly. The issue might be",
    "explanation": [
      "Correct answer is A as CORS would allow the website to access the CSS files from another bucket.",
      "Refer AWS documentation - S3 CORS",
      "Cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. With CORS support in Amazon S3, you can build rich client-side web applications with Amazon S3 and selectively allow cross-origin access to your Amazon S3 resources."
    ],
    "id": 149,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Scheduled Reserved Instances. ",
      "B.Convertible Reserved Instances. ",
      "C.Standard Reserved Instances. ",
      "D.Spot Instances "
    ],
    "detail": "A solutions Architect is designing a stateful web application that will run for one year (24/7) and then be decommissioned. Load on this platform will be constant, using a number of r4.8xlarge instances. Key drivers for this system include high availability, but elasticity is not required. What is the MOST cost-effective way to purchase compute for this platform?",
    "explanation": [
      "Correct answer is C as the key requirement is constant 24x7 usage without elasticity, standard reserved instances would be a perfect fit.",
      "• Standard RIs: These provide the most significant discount (up to 75% off On-Demand) and are best suited for steady-state usage.",
      "• Convertible RIs: These provide a discount (up to 54% off On-Demand) and the capability to change the attributes of the RI as long as the exchange results in the creation of Reserved Instances of equal or greater value. Like Standard RIs, Convertible RIs are best suited for steady-state usage.",
      "• Scheduled RIs: These are available to launch within the time windows you reserve. This option allows you to match your capacity reservation to a predictable recurring schedule that only requires a fraction of a day, a week, or a month.",
      "Scheduled Reserved Instances (Scheduled Instances) enable you to purchase capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term. You reserve the capacity in advance, so that you know it is available when you need it. You pay for the time that the instances are scheduled, even if you do not use them.",
      "Scheduled Instances are a good choice for workloads that do not run continuously, but do run on a regular schedule. For example, you can use Scheduled Instances for an application that runs during business hours or for batch processing that runs at the end of the week.",
      "If you require a capacity reservation on a continuous basis, Reserved Instances might meet your needs and decrease costs.",
      "Option A is wrong as instances are needed 24x7.",
      "Option B is wrong as elasticity is not required.",
      "Option D is wrong as Spot instances would not provide High Availability."
    ],
    "id": 150,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Locating HSM appliances in a private subnet increases security",
      "B.Locating HSM appliances closest to the majority of potential customers decreases network latency, which can improve application performance",
      "C.Locating HSM appliances near your EC2 instances decreases network latency, which can improve application performance",
      "D.Locating HSM appliances completely isolated from your EC2 instances in another region increases security "
    ],
    "detail": "After deciding that, due to strict contractual requirements, the latest AWS VPC that you deploy will need to incorporate AWS CloudHSM as an encryption solution, where within your AWS infrastructure would be the best place to physically locate the HSM appliances and why? Choose the correct answer",
    "explanation": [
      "Correct answer is C as CloudHSM should be placed close to the EC2 instances.",
      "Refer AWS documentation - CloudHSM",
      "CloudHSM instances are provisioned inside your VPC with an IP address that you specify, providing simple and private network connectivity to your Amazon Elastic Compute Cloud (EC2) instances. Placing CloudHSM instances near your EC2 instances decreases network latency, which can improve application performance. AWS provides dedicated and exclusive (single tenant) access to CloudHSM instances, isolated from other AWS customers. Available in multiple Regions and Availability Zones (AZs), AWS CloudHSM allows you to add secure and durable key storage to your applications."
    ],
    "id": 151,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.User ID, where the application has many different users. ",
      "B.Status Code where most status codes are the same. ",
      "C.Device ID, where one is by far more popular than all the others. ",
      "D.Game Type, where there are three possible game types. "
    ],
    "detail": "Which of the following is an example of a good DynamoDB partition key schema for provisioned throughput efficiency?",
    "explanation": [
      "Correct answer is A - User id as when designing a primary key, there needs to be an attribute which is always unique so that the hash of it is maintained.",
      "Refer AWS documentation - DynamoDB Guidelines",
      "The primary key uniquely identifies each item in a table. The primary key can be simple (partition key) or composite (partition key and sort key).",
      "When it stores data, DynamoDB divides a table's items into multiple partitions, and distributes the data primarily based upon the partition key value. Consequently, to achieve the full amount of request throughput you have provisioned for a table, keep your workload spread evenly across the partition key values. Distributing requests across partition key values distributes the requests across partitions."
    ],
    "id": 152,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Add a new instance manually by 8 AM Thursday and terminate the same by 6 PM Friday",
      "B.Schedule Auto Scaling to scale up by 8 AM Thursday and scale down after 6 PM on Friday",
      "C.Schedule a policy which may scale up every day at 8 AM and scales down by 6 PM",
      "D.Configure a batch process to add an instance by 8 AM and remove it by Friday 6 PM "
    ],
    "detail": "A user has created a web application with Auto Scaling. The user is regularly monitoring the application and he observed that the traffic is highest on Thursday and Friday between 8 AM to 6 PM. What is the best solution to handle scaling in this case?",
    "explanation": [
      "Correct answer is B as an Auto Scaling schedule can be configured to automate the scale up and down activities.",
      "Refer AWS documentation - Scheduled Scaling"
    ],
    "id": 153,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Upload directly to S3 using a pre-signed URL ",
      "B.Upload to a second bucket and have a Lambda event copy the image to the primary bucket. ",
      "C.Upload to a separate Auto Scaling group of servers behind an ELB Classic Load Balancer and have them write to the Amazon S3 bucket. ",
      "D.Expand the web server fleet with Spot Instances to provide the resources to handle the images. "
    ],
    "detail": "A Solutions Architect is designing a mobile application that will capture receipt images to track expenses. The Architect wants to store the images on Amazon S3. However, uploading images through the web server will create too much traffic. What is the MOST efficient to store images from a mobile application on Amazon S3?",
    "explanation": [
      "Correct answer is A as a pre-signed url would help the images to be directly uploaded to the S3 bucket without being routed through the web servers, thereby reducing the load.",
      "Refer AWS documentation - S3 Pre-Signed URLs",
      "A presigned URL gives you access to the object identified in the URL, provided that the creator of the presigned URL has permissions to access that object. That is, if you receive a presigned URL to upload an object, you can upload the object only if the creator of the presigned URL has the necessary permissions to upload that object.",
      "Option B is wrong as the upload still needs to happen through the Web servers",
      "Option C is wrong as it is not most efficient and would increase the cost.",
      "Option D is wrong as spot instances availability cannot be predicted and maybe reduce the load, but still increase the cost."
    ],
    "id": 154,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Encrypt the EBS volumes of the underlying EC2 Instances.",
      "B.Encrypt using AWS KMS Customer Default master key.",
      "C.Encrypt using SSL/TLS for encrypting the data.",
      "D.Encrypt using S3 Server Side Encryption. "
    ],
    "detail": "A company is using a Redshift cluster to store their data warehouse. There is a requirement from the Internal IT Security team to encrypt data for the Redshift database. How can this be achieved?",
    "explanation": [
      "Correct answer is B as Redshift allows encryption of cluster using KMS.",
      "Refer AWS documentation - Redshift Encryption",
      "In Amazon Redshift, you can enable database encryption for your clusters to help protect data at rest. Amazon Redshift uses a hierarchy of encryption keys to encrypt the database. You can use either AWS Key Management Service (AWS KMS) or a hardware security module (HSM) to manage the top-level encryption keys in this hierarchy. The process that Amazon Redshift uses for encryption differs depending on how you manage keys.",
      "By default, Amazon Redshift selects your default key as the master key. Your default key is an AWS-managed key that is created for your AWS account to use in Amazon Redshift. AWS KMS creates this key the first time you launch an encrypted cluster in a region and choose the default key.",
      "If you don’t want to use the default key, you must have (or create) a customer-managed CMK separately in AWS KMS before you launch your cluster in Amazon Redshift. Customer-managed CMKs give you more flexibility, including the ability to create, rotate, disable, define access control for, and audit the encryption keys used to help protect your data."
    ],
    "id": 155,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable enhanced networking",
      "B.Use Amazon S3 multipart upload",
      "C.Leveraging Amazon CloudFront, use the HTTP POST method to reduce latency.",
      "D.Use Amazon Elastic Block Store Provisioned IOPS and use an Amazon EBS-optimized instance "
    ],
    "detail": "You have an application running on an Amazon Elastic Compute Cloud instance, that uploads 5 GB video objects to Amazon Simple Storage Service (S3). Video uploads are taking longer than expected, resulting in poor application performance. Which method will help improve performance of your application?",
    "explanation": [
      "Correct answer is B as Multipart upload allows you to upload a single object as a set of parts and in parallel. Each part is a contiguous portion of the object's data. You can upload these object parts independently and in any order. If transmission of any part fails, you can retransmit that part without affecting other parts. After all parts of your object are uploaded, Amazon S3 assembles these parts and creates the object. In general, when your object size reaches 100 MB, you should consider using multipart uploads instead of uploading the object in a single operation.",
      "Refer to AWS documentation for S3 Multipart upload",
      "Option A & D is wrong as enhanced networking, IOPS, EBS optimized helps improve the performance within the AWS network for the EC2 instances",
      "Option C is wrong as CloudFront allows uploading objects from global locations a bit smoother but would not improve the S3 upload time"
    ],
    "id": 156,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use IAM roles for Amazon ECS tasks to associate a specific IAM role with each ECS task definition",
      "B.Use IAM roles on the Amazon ECS container instances to associate IAM role with each ECS task on that instance ",
      "C.Connect to each running amazon ECS container instance and add discrete credentials ",
      "D.Reboot each Amazon ECS task programmatically to generate new instance metadata for each task "
    ],
    "detail": "Your security team requires each Amazon ECS task to have an IAM policy that limits the task’s privileges to only those required for its use of AWS services. How can you achieve this?",
    "explanation": [
      "Correct answer is A as IAM role needs to be associated with the ECS task definition.",
      "Refer AWS documentation - ECS Task IAM Role",
      "With IAM roles for Amazon ECS tasks, you can specify an IAM role that can be used by the containers in a task. Applications must sign their AWS API requests with AWS credentials, and this feature provides a strategy for managing credentials for your applications to use, similar to the way that Amazon EC2 instance profiles provide credentials to EC2 instances. Instead of creating and distributing your AWS credentials to the containers or using the EC2 instance’s role, you can associate an IAM role with an ECS task definition or RunTask API operation. The applications in the task’s containers can then use the AWS SDK or CLI to make API requests to authorized AWS services."
    ],
    "id": 157,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 ",
      "B.NAT instance ",
      "C.ELB Classic Load Balancer ",
      "D.Amazon RDS "
    ],
    "detail": "An Internet-facing multi-tier web application must be highly available. An ELB Classic Load Balancer is deployed in front of the web tier. Amazon EC2 instances at the web application tier are deployed evenly across two Availability Zones. The database is deployed using RDS Multi-AZ. A NAT instance is launched for Amazon EC2 instances and database resources to access the internet. These instances are not assigned with public IP address. Which component poses a potential single point of failure in this architecture?",
    "explanation": [
      "Correct answer is B as NAT Instance is a single point of failure and does not have High Availability. You can use NAT Gateway instead or manage high availability through scripts.",
      "Refer AWS documentation - NAT Gateway vs NAT Instance",
      "Option A is wrong as EC2 instances are evenly deployed across multiple AZs.",
      "Option C is wrong as ELB is AWS managed and Highly Available.",
      "Option D is wrong as RDS is Multi-AZ configured."
    ],
    "id": 158,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use CloudWatch Logs",
      "B.Enable KMS Audit Feature",
      "C.Use CloudTrail",
      "D.Use KMS Certificate Manager "
    ],
    "detail": "A Company is using AWS Key Management Service (KMS) to maintain their keys. The Company's CISO wants all requests for key management made to the KMS to be audited. As a Solution Architect how can you meet the security requirement?",
    "explanation": [
      "Correct answer is C as CloudTrail helps audit all calls to AWS Key Management Service (KMS)",
      "Refer AWS documentation - KMS CloudTrail",
      "AWS KMS is integrated with CloudTrail, a service that captures API calls made by or on behalf of AWS KMS in your AWS account and delivers the log files to an Amazon S3 bucket that you specify. CloudTrail captures API calls from the AWS KMS console or from the AWS KMS API. Using the information collected by CloudTrail, you can determine what request was made, the source IP address from which the request was made, who made the request, when it was made, and so on. To learn more about CloudTrail, including how to configure and enable it, see the AWS CloudTrail User Guide.",
      "When you enable CloudTrail logging in your AWS account, API calls made to AWS KMS actions are tracked in log files. AWS KMS records are written together with other AWS service records in a log file. CloudTrail determines when to create and write to a new log file based on a time period and file size.",
      "CloudTrail logs all of the AWS KMS actions. For example, calls to the CreateKey, Encrypt, and Decryptactions generate entries in the CloudTrail log files."
    ],
    "id": 159,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Enable enhanced networking on all the Amazon EC2 instances",
      "B.Assign a minimum of two elastic network interfaces per Amazon EC2 Instance ",
      "C.Launch the Amazon EC2 instance across multiple Availability Zones",
      "D.Enable EBS optimization on all the Amazon EC2 instances "
    ],
    "detail": "You are designing a high-performance computing(HPC) cluster. You will launch 20 Amazon EC2 r3.2xlarge instances into a placement group. You need the highest packet-per-second performance and lowest latency for your application Which configuration should you use?",
    "explanation": [
      "Correct answer is A as for high-performance you would need to enable enhanced networking.",
      "A cluster placement group is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. To provide the lowest latency, and the highest packet-per-second network performance for your placement group, choose an instance type that supports enhanced networking.",
      "Refer AWS documentation - Placement Groups & Enhanced Networking"
    ],
    "id": 160,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use an Amazon Redshift database. Copy the production database into Redshift and allow the team to query it.",
      "B.Use an Amazon RDS read replica of the production database and allow the team to query against it.",
      "C.Use multiple Amazon EC2 instances running replicas of the production database, placed behind a load balancer.",
      "D.Use an Amazon DynamoDB table to store a copy of the data. "
    ],
    "detail": "A company has an Amazon RDS database backing its production website. The sales team needs to run queries against the database to track training program effectiveness. Queries against the production database cannot impact performance, and the solution must be easy to maintain. How can these requirements be met?",
    "explanation": [
      "Correct answer is B as Read replica can help in business reporting kind of use cases for allowing users to query the data without impacting the production database.",
      "Refer AWS documentation - Read Replica",
      "Deploying one or more Read Replicas for a given source DB instance might make sense in a variety of scenarios, including the following:"
    ],
    "id": 161,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Migrate from ElastiCache to Amazon RDS",
      "B.Configure automatic backup to save cache data",
      "C.Configure ElastiCache Multi-AZ with automatic failover.",
      "D.Use Auto Scaling to provision cache nodes based on the CPU usage. "
    ],
    "detail": "A gaming application is heavily dependent on caching and uses Amazon ElastiCache for Redis. The application performance was recently degraded due to the failure of the cache node. What should a Solution Architect recommend to minimize performance degradation in case of failure?",
    "explanation": [
      "Correct answer is C as ElastiCache Multi-AZ helps handle node failure and provide enhanced availability without any administration need.",
      "Refer AWS documentation - ElastiCache - Redis Multi-AZ",
      "Q: What is Multi-AZ for ElastiCache for Redis?",
      "An ElastiCache for Redis shard consists of a primary and up to five read replicas. Redis asynchronously replicates the data from the primary to the read replicas. During certain types of planned maintenance, or in the unlikely event of ElastiCache node failure or Availability Zone failure, Amazon ElastiCache will automatically detect the failure of a primary, select a read replica, and promote it to become the new primary. ElastiCache also propagates the DNS changes of the promoted read replica, so if your application is writing to the primary node endpoint, no endpoint change will be needed.",
      "Q: What are the benefits of using Multi-AZ?",
      "The main benefits of running your ElastiCache for Redis in Multi-AZ mode are enhanced availability and smaller need for administration. If an ElastiCache for Redis primary node failure occurs, the impact on your ability to read/write to the primary is limited to the time it takes for automatic failover to complete. When Multi-AZ is enabled, ElastiCache node failover is automatic and requires no administration. You no longer need to monitor your Redis nodes and manually initiate a recovery in the event of a primary node disruption."
    ],
    "id": 162,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Configure the load balancer with the following ports: TCP.80 and TCP:8080 and the instance protocol to TCP.80 and TCP:8080",
      "B.Configure the load balancer with the following ports: HTTP:80 and HTTP:8080 and the instance protocol to HTTPS:80 and HTTPs:8080",
      "C.Configure the load balancer with the following ports: HTTP:80 and HTTP:8080 and the instance protocol to TCP.80 and TCP:8080",
      "D.Configure the load balancer with the following ports: HTTP:80 and HTTP:8080 and the instance protocol to HTTP:80 and HTTP:8080 "
    ],
    "detail": "You're consulting for company that is migrating its legacy application to the AWS cloud. In order to apply high availability, you've decided to implement Elastic Load Balancer and Auto Scaling services to serve traffic to this legacy application. The legacy application is not a standard HTTP web application but is a custom application with custom codes that is run internally for the employees of the company you are consulting. The ports required to be open are port 80 and port 8080. What listener configuration would you create? Choose an answer from the options below",
    "explanation": [
      "Correct answer is A as it is a legacy application without standard HTTP interface.",
      "Refer AWS documentation - ELB Listener Config",
      "When you use TCP (layer 4) for both front-end and back-end connections, your load balancer forwards the request to the back-end instances without modifying the headers. After your load balancer receives the request, it attempts to open a TCP connection to the back-end instance on the port specified in the listener configuration.",
      "If the front-end connection uses TCP or SSL, then your back-end connections can use either TCP or SSL. If the front-end connection uses HTTP or HTTPS, then your back-end connections can use either HTTP or HTTPS."
    ],
    "id": 163,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Upload the reports to amazon S3 standard storage class. Set a lifecycle configuration on the bucket to transition the reports to Amazon Glacier after 30 days",
      "B.Upload the reports to amazon S3 Standard Infrequent access storage class. Set a lifecycle configuration on the bucket to transition the reports to Amazon glacier after 30 days",
      "C.Upload the reports to amazon glacier. When reports are requested, copy them to amazon S3 standard storage class for access. Delete the copied reports after they have been viewed",
      "D.Upload the reports to amazon S3 Standard Infrequent access storage class. When reports are requested, copy them to amazon S3 Standard storage class for access. Delete the copied reports after they have been viewed "
    ],
    "detail": "Your company runs an application that generates several thousand 1-gb reports a month. Approximately 10% of these reports will be accessed once during the first 30 days and must be available on demand. After 30 days, the reports are no longer accessed as a part of normal business processes but must be retained for compliance reasons. Which architecture would meet these requirements with the lowest cost?",
    "explanation": [
      "Correct answer is B as the most cost effective way would be to use S3 Standard Infrequent access storage class as the files need to be available on demand but with a very low frequency. The files can then be transitioned to Glacier for further cost savings, but available for compliance reasons.",
      "Refer AWS FAQs - S3 Standard Infrequent Access Storage Class",
      "Option A is wrong as the S3 Standard storage class is not a cost effective way given the frequency of file access is very low.",
      "Option C is wrong as Glacier would not support immediate on demand access to files.",
      "Option D is wrong as the files need to be moved to Glacier. Standard storage would increase the cost."
    ],
    "id": 164,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.One public subnet for the load balancer tier, one public subnet for the front-end tier, and one private subnet for the backend tier. ",
      "B.One shared public subnet for all tiers of the application. ",
      "C.One public subnet for the load balancer tier and one shared private subnet for the application tiers. ",
      "D.One shared private subnet for all tiers of the application. "
    ],
    "detail": "A development team is building an application with front-end and backend application tiers. Each tier consists of Amazon EC2 instances behind an ELB Classic Load Balancer. The instances run in Auto Scaling groups across multiple Availability Zones. The network team has allocated the 10.0.0.0/24 address space for this application. Only the front-end load balancer should be exposed to the Internet. There are concerns about the limited size of the address space and the ability of each tier to scale. What should the VPC subnet design be in each Availability Zone?",
    "explanation": [
      "Correct answer is C as the front ELB needs to be public it would need one public subnet. All the other applications should not be exposed to the internet and can be placed in a shared private subnet. The ELB can be configured as internet facing for front end and internal for back-end tier, so that the back-end tier load balancer is not exposed to internet.",
      "Option A is wrong as front-end tier should not be exposed to the internet.",
      "Option B is wrong as all the instances would be exposed to the internet.",
      "Option D is wrong as front-end load balancer is not exposed to internet and hence cannot be accessed."
    ],
    "id": 165,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable versioning on your S3 Buckets",
      "B.Configure your S3 Buckets with MFA delete",
      "C.Create a Bucket policy and only allow read only permissions to all users at the bucket level",
      "D.Enable object life cycle policies and configure the data older than 3 months to be archived in Glacier "
    ],
    "detail": "You use S3 to store critical data for your company several users within your group currently have full permissions to your S3 buckets. You need to come up with a solution that does not impact your users and also protect against the accidental deletion of objects. Which two options will address this issue? Choose 2 answers",
    "explanation": [
      "Correct answer are A & B",
      "Refer AWS documentation - S3 Versioning",
      "Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite",
      "You can optionally add another layer of security by configuring a bucket to enable MFA (Multi-Factor Authentication) Delete, which requires additional authentication for either of the following operations.",
      "Option C is wrong as it impacts the users and they no longer have permissions to write",
      "Option D is wrong as it is more of an archiving solution and does not help prevent deletes or overwrites."
    ],
    "id": 166,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy one auto scaling group that includes all the web and app servers across all availability zones",
      "B.Deploy three auto scaling group, one for each availability zone that includes both web and app servers",
      "C.Deploy two auto scaling groups, one for the web servers in all availability zones and one for the app servers in all availability zones",
      "D.Deploy six auto scaling groups, a web server group in each availability zone and an app server group in each availability zone "
    ],
    "detail": "You have been asked to design a fault-tolerant and scalable web application across three Availability zones. The presentation logic will reside on web servers behind an ELB classic Load Balancer, and the application logic will reside on a set of app servers behind a second load balancer. How should you use Auto Scaling groups?",
    "explanation": [
      "Correct answer is C as you need only two auto scaling groups. One for Web and One for Application servers",
      "Refer AWS Reference Architectures"
    ],
    "id": 167,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Store your data in Amazon S3, and use lifecycle policies to archive to S3-Infrequently Access",
      "B.Keep all your data in S3.",
      "C.Store your data in an EBS volume, and use lifecycle policies to archive to Amazon Glacier.",
      "D.Store your data in Amazon S3, and use lifecycle policies to archive to Amazon Glacier "
    ],
    "detail": "You need to store a large volume of data. The data needs to be readily accessible for a short period, but then needs to be archived indefinitely after that. What is a cost-effective solution? Choose the correct answer:",
    "explanation": [
      "Correct answer is D as the data can be stored initially in S3 till required and then moved to Glacier for long term archival.",
      "Refer AWS Blog S3 to Glacier"
    ],
    "id": 168,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Setup CloudWatch to monitor the DynamoDB table for changes. Then trigger a Lambda function to send the changes to the application.",
      "B.Setup CloudWatch logs to monitor the DynamoDB table for changes. Then trigger AWS SQS to send the changes to the application.",
      "C.Use DynamoDB streams to monitor the changes to the DynamoDB table.",
      "D.Use an AWS Lambda function on a scheduled basis to monitor the changes to the DynamoDB table "
    ],
    "detail": "A company has setup an application in AWS that interacts with DynamoDB. It is required that when an item is modified in a DynamoDB table, an immediate entry is made to the associating application. How can this be accomplished? Choose 2 answers from the choices below.",
    "explanation": [
      "Correct answer is C & D as DynamoDB streams with Lambda can be used to design the architecture. DynamoDB streams can help track the changes to the table, and a Lambda function can be used to trigger the changes in the associating application.",
      "Refer AWS documentation - DynamoDB Streams + Lambda",
      "Amazon DynamoDB is integrated with AWS Lambda so that you can create triggers-pieces of code that automatically respond to events in DynamoDB Streams. With triggers, you can build applications that react to data modifications in DynamoDB tables.",
      "If you enable DynamoDB Streams on a table, you can associate the stream ARN with a Lambda function that you write. Immediately after an item in the table is modified, a new record appears in the table's stream. AWS Lambda polls the stream and invokes your Lambda function synchronously when it detects new stream records.",
      "The Lambda function can perform any actions you specify, such as sending a notification or initiating a workflow."
    ],
    "id": 169,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Aurora",
      "B.Amazon Redshift",
      "C.Amazon DynamoDB",
      "D.Amazon RDS MySQL "
    ],
    "detail": "A company wants to migrate a highly transactional database to AWS. Requirements state that the database has more than 6TB of data and will grow exponentially. Which solution should a Solutions Architect recommend?",
    "explanation": [
      "Correct answer is A as Aurora provides transactional database features with the ability to store 64TB of data.",
      "Q: What are the minimum and maximum storage limits of an Amazon Aurora database?",
      "The minimum storage is 10GB. Based on your database usage, your Amazon Aurora storage will automatically grow, up to 64 TB, in 10GB increments with no impact to database performance. There is no need to provision storage in advance.",
      "Option B & C are wrong as Redshift and DynamoDB aren't transactional database.",
      "Option D is wrong as MySQL would not scale automatically to support growing data needs and supports maximum of 16TB."
    ],
    "id": 170,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a network ACL on the web server’s subnet and allow HTTPS inbound and MySQL outbound. Place both database and web servers on the same subnet.",
      "B.Open an HTTPS port on the security group for web servers and set the source to 0.0.0.0/0. Open the MySQL port on the database security group and attach it to the MySQL instance. Set the source to Web Server Security Group.",
      "C.Create a network ACL on the web server’s subnet, allow HTTPS inbound, and specify the source as 0.0.0.0/0. Create a network ACL on a database subnet, allow MySQL port inbound for web servers, and deny all outbound traffic.",
      "D.Open the MySQL port on the security group for web server and set the source to 0.0.0.0/0. Open the HTTPS port on the database security group and attach it to the MySQL instance. Set the source to Web Server Security Group. "
    ],
    "detail": "A company hosts a popular web application. The web application connects to a database running in a private VPC subnet. The web servers must be accessible only to customers on an SSL connection. The RDS MySQL database server must be accessible only from the web servers. How should a Solutions Architect design a solution to meet the requirements without impacting running application.",
    "explanation": [
      "Correct answer is B as Web servers needs to be opened to internet on HTTPS and MySQL database needs to be open to accept connections only from the Web servers.",
      "Refer AWS documentation - Security Rules reference",
      "Web Security Rules",
      "Database Security Rules",
      "Option A is wrong as ACLs are stateless and need to enable both inbound and outbound.",
      "Option C is wrong as ACLs are stateless and the database subnet needs to allow outbound traffic.",
      "Option D is wrong as the configurations are opposite. MySQL port needs to be opened on DB security group and HTTPS port needs to be opened on web server security group."
    ],
    "id": 171,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Memory Utilization of an EC2 instance",
      "B.CPU Utilization of an EC2 instance",
      "C.Disk usage activity of an EC2 instance",
      "D.Data transfer of an EC2 instance "
    ],
    "detail": "Which of the following requires a custom CloudWatch metric to monitor?",
    "explanation": [
      "Correct answer is A as memory utilization is not captured, and you need to implement scripts for the same",
      "Refer AWS documentation - Monitoring EC2",
      "CloudWatch relies on the information provided by this hypervisor, which can only see the most hardware-sided part of the instance’s status, including CPU usage (but not load), total memory size (but not memory usage), number of I/O operations on the hard disks (but not it’s partition layout and space usage) and network traffic (but not the processes generating it)."
    ],
    "id": 172,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a security group for every zone. Configure a default allow all rule. Configure explicit deny rules for the zones that shouldn't be able to communicate with one another",
      "B.Configure your instances to use pre-set IP addresses with an IP address range every security zone. Configure NACL to explicitly allow or deny communication between the different IP address ranges, as required for interzone communication",
      "C.Configure a security group for every zone. Configure allow rules only between zone that need to be able to communicate with one another. Use implicit deny all rule to block any other traffic",
      "D.Configure multiple subnets in your VPC, one for each zone. Configure routing within your VPC in such a way that each subnet only has routes to other subnets with which it needs to communicate, and doesn't have routes to subnets with which it shouldn't be able to communicate. "
    ],
    "detail": "You are designing security inside your VPC. You are considering the options for establishing separate security zones and enforcing network traffic rules across different zone to limit Instances can communications. How would you accomplish these requirements? Choose 2 answers",
    "explanation": [
      "Correct answer are B & C as the communication can be controlled either using security group for all the instances in the zone or NACLs at the zone level.",
      "Refer AWS documentation - VPC Security",
      "Option B as NACLs can be used to configure rules with IP address to allow or deny traffic.",
      "Option C as Security group can take IP address or security group and can allow them. Default is implicit deny",
      "Option A is wrong as Security group does not allow deny rules",
      "Option D is wrong as default routes are unmodifiable and cannot use routing table to determine routing between subnets in a VPC. in a VPC all subnets are reachable from all other subnets within the same VPC. That is the default behavior and cannot be changed."
    ],
    "id": 173,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use Route 53’s Latency Based Routing and serve the image out of us-west-2 as well as us-east-1",
      "B.Serve the image out through CloudFront",
      "C.Serve the image out of S3 so that it isn’t being served out of your web application tier",
      "D.Use EBS PIOPs to serve the image faster out of your EC2 instances "
    ],
    "detail": "Your company is moving towards tracking web page users with a small tracking Image loaded on each page. Currently you are serving this image out of us-east, but are starting to get concerned about the time it takes to load the image for users on the west coast. What are the two best ways to speed up serving this image? Choose 2 answers",
    "explanation": [
      "Correct answer are A & B as Route 53 latency based routing can help route the user request to the least latency server and with CloudFront the request can be distributed through global edge locations"
    ],
    "id": 174,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS General Purpose SSD",
      "C.EBS Cold HDD",
      "D.EBS Throughput Optimized HDD "
    ],
    "detail": "A Solution Architect is designing a solution for a media company that will stream large amounts of data from an Amazon EC2 instance. The data streams are typically large and sequential, and must be able to support up to 500MB/s. Which storage type will meet the performance requirements of this application?",
    "explanation": [
      "Correct answer is D as Throughput Optimized HDD provides the ideal storage solution for large sequential data with support for 500 miB/s throughput.",
      "Refer AWS documentation - EBS Volume Types",
      "Throughput Optimized HDD (st1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. This volume type is a good fit for large, sequential workloads such as Amazon EMR, ETL, data warehouses, and log processing. Bootable st1 volumes are not supported.",
      "Throughput Optimized HDD (st1) volumes, though similar to Cold HDD (sc1) volumes, are designed to support \nfrequently accessed data.",
      "This volume type is optimized for workloads involving large, sequential I/O, and we recommend that customers with workloads performing small, random I/O use gp2"
    ],
    "id": 175,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Application Load Balancer",
      "B.Amazon API Gateway",
      "C.Amazon Cognito",
      "D.AWS Device Farm "
    ],
    "detail": "A mobile client requires data from several application-layer services to populate its user interface. What can the application team use to decouple the client interface from the underlying services behind them?",
    "explanation": [
      "Correct answer is B as API Gateway can provide a single point of interface for the application to provide loose coupling to the underlying services.",
      "Refer AWS documentation - Microservices on AWS",
      "With API Gateway you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your backend services, such as workloads running on Amazon EC2 and Amazon ECS, code running on Lambda, or any web application. An API object defined with the API Gateway service is a group of resources and methods. A resource is a typed object within the domain of an API and may have associated a data model or relationships to other resources. Each resource can be configured to respond to one or more methods, that is, standard HTTP verbs such as GET, POST, or PUT. REST APIs can be deployed to different stages, versioned as well as cloned to new versions.",
      "Option A is wrong as Application Load Balancer would not help decouple across multiple underlying services.",
      "Option C is wrong as Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0.",
      "Option D is wrong as AWS Device Farm is an app testing service that lets you test and interact with your Android, iOS, and web apps on many devices at once, or reproduce issues on a device in real time."
    ],
    "id": 176,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Temporary loss of mobile coverage; although mobile coverage was good in the area, even temporary loss of data will stop the streaming",
      "B.You cannot send Kinesis data to the same bucket on consecutive days if you do not have versioning enabled on the bucket. If you don't have versioning enabled you would need to define 3 different buckets or else the data is overwritten each day",
      "C.Data records are only accessible for a default of 24 hours from the time they are added to a stream.",
      "D.A sensor probably stopped working on the second day. If one sensor fails, no data is sent to the stream until that sensor is fixed "
    ],
    "detail": "You are using IOT sensors to monitor the movement of a group of hikers on a three day trek and send the information into an Kinesis Stream. They each have a sensor in their shoe and you know for certain that there is no problem with mobile coverage so all the data is getting back to the stream. You have used default settings for the stream. At the end of the third day the data is sent to an S3 bucket. When you go to interpret the data in S3 there is only data for the last day and nothing for the first 2 days. Which of the following is the most probable cause of this?",
    "explanation": [
      "Correct answer is C as by default, Kinesis stores the records for 24 hours only.",
      "Refer AWS documentation - Kinesis FAQs",
      "By default, Records of a stream are accessible for up to 24 hours from the time they are added to the stream. You can raise this limit to up to 7 days by enabling extended data retention."
    ],
    "id": 177,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Encryption cannot be enabled on RDS instances unless the keys are not managed by KMS.",
      "B.Encryption can be enabled on RDS instances to encrypt the underlying storage, and this will by default also encrypt snapshots as they are created. No additional configuration needs to be made on the client side for this to work.",
      "C.Encryption can be enabled on RDS instances to encrypt the underlying storage, and this will by default also encrypt snapshots as they are created. However, some additional configuration needs to be made on the client side for this to work.",
      "D.Encryption can be enabled on RDS instances to encrypt the underlying storage, but you cannot encrypt snapshots as they are created. "
    ],
    "detail": "Regarding encryption on data stored on your databases, namely Amazon RDS, which of the following statements is the true? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is B as encryption can be enabled on RDS instances and all its backups, read replicas and snapshots are automatically encrypted.",
      "Refer AWS documentation - RDS Encryption",
      "You can encrypt your Amazon RDS instances and snapshots at rest by enabling the encryption option for your Amazon RDS DB instance. Data that is encrypted at rest includes the underlying storage for a DB instance, its automated backups, Read Replicas, and snapshots."
    ],
    "id": 178,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Leverage Route 53 health checks to automatically fail over to backup site when the primary site becomes unreachable",
      "B.Implement the Pilot Light DR architecture so that traffic can be processed seamlessly in case the primary site becomes unreachable",
      "C.Implement either Fully Working Low Capacity Standby or Multi-site Active-Active architecture so that the end users will not experience any delay even if the primary site becomes unreachable",
      "D.Implement multi-region architecture to ensure high availability "
    ],
    "detail": "You are designing an architecture that can recover from a disaster very quickly with minimum down time to the end users. Which of the following approaches is best?",
    "explanation": [
      "Correct answer is C as the requirement is minimum down time DR without any cost constraint, it would be best to implement the Warm Standby or Multi-Site Active-Active implementation.",
      "Refer AWS Blog Disaster Recovery or Whitepaper"
    ],
    "id": 179,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Route 53",
      "B.Elastic Load Balancing",
      "C.Amazon CloudFront",
      "D.Amazon S3 Website hosting. "
    ],
    "detail": "An application is running in a single AWS region. The business team adds a requirement to run the application in a second region for multi-region high availability. A Solutions Architect needs to enable traffic to be distributed to multiple regions for high availability. Which AWS service meets the requirements?",
    "explanation": [
      "Correct answer is A as Route 53 is an AWS managed DNS service. It is Global and can be configured to route traffic across multiple regions with an ability for health checks and fail over routing. It also supports Active-Active or Active-Passive routing.",
      "Option B is wrong as ELB cannot span across regions.",
      "Option C is wrong as CloudFront only enables caching and rendering across edge locations.",
      "Option D is wrong as S3 is regional and does not help route traffic across regions."
    ],
    "id": 180,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy in two regions using Weighted Round Robin (WRR), with Auto Scaling minimums set for 100% peak load per region.",
      "B.Deploy in three AZs, with Auto Scaling minimum set to handle 50% peak load per zone.",
      "C.Deploy in three AZs, with Auto Scaling minimum set to handle 33% peak load per zone.",
      "D.Deploy in two regions using Weighted Round Robin (WRR), with Auto Scaling minimums set for 50% peak load per region. "
    ],
    "detail": "You have a business critical two tier web app currently deployed in two availability zones in a single region, using Elastic Load Balancing and Auto Scaling. The app depends on synchronous replication (very low latency connectivity) at the database layer. The application needs to remain fully available even if one application Availability Zone goes off-line, and Auto scaling cannot launch new instances in the remaining Availability Zones. How can the current architecture be enhanced to ensure this?",
    "explanation": [
      "Correct answer is B as 3 AZs with 50% each, even if one does down and auto scaling is not able to launch any instances, 50% + 50% LB handles all the load",
      "Option C is wrong as it gives 33% each and if one goes down, the rest two will handle 66% load",
      "Choice A & D are wrong as WRR would requires Route 53. The Database also requires Synchronous replication with low latency which would not work. Also, for D 50% would not work any ways."
    ],
    "id": 181,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Identity and Access Management (IAM) user for CloudFront and grant access to the objects in your S3 bucket to that IAM User.",
      "B.Create an Origin Access identity (OAI) for Cloud Front and grant access to the objects in your S3 bucket to that OAl.",
      "C.Create individual policies for each bucket the documents are stored in and in that policy grant access to only CloudFront.",
      "D.Create an S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN). "
    ],
    "detail": "You are building a large-scale confidential documentation web server on AWS and all of the documentation for it will be stored on S3. One of the requirements is that it cannot be publicly accessible from S3 directly, and you will need to use CloudFront to accomplish this. Which of the methods Listed below would satisfy the requirements as outlined? Choose an answer from the options below",
    "explanation": [
      "Please refer to AWS CloudFront Restrict Access to S3",
      "Correct answer is B",
      "Origin Access Identity is a special CloudFront user associated with the distribution. For web distribution, it is associated with S3. OAI allows exposing the content without making the S3 content public.",
      "Option A, C and D are wrong as they do allow S3 to allow exclusive access to CloudFront with CloudFront being able to distribute the contents."
    ],
    "id": 182,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Aurora ",
      "B.Amazon RDS MySQL with Multi-AZ enabled. ",
      "C.Amazon DynamoDB ",
      "D.Amazon ElastiCache "
    ],
    "detail": "A solution architect is creating a new relational database. The compliance will use the critical data and mandates that data content must be stored across three different Availability Zones. Which of the following options should the Architect use?",
    "explanation": [
      "Correct answer is A as Amazon Aurora provides high durability by replicating the data across 3 AZs and maintaining 6 copies with data integrity checks performed.",
      "Refer AWS documentation - RDS Aurora FAQs",
      "Q: How does Amazon Aurora improve my database’s fault tolerance to disk failures?",
      "Amazon Aurora automatically divides your database volume into 10GB segments spread across many disks. Each 10GB chunk of your database volume is replicated six ways, across three Availability Zones. Amazon Aurora is designed to transparently handle the loss of up to two copies of data without affecting database write availability and up to three copies without affecting read availability. Amazon Aurora storage is also self-healing. Data blocks and disks are continuously scanned for errors and repaired automatically.",
      "Option B is wrong as Multi-AZ RDS, the data is replicated across 2 AZs only",
      "Option C and D are wrong as they are not relational databases."
    ],
    "id": 183,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon ELB",
      "B.Auto Scaling Group ",
      "C.Amazon EC2 Security Group ",
      "D.Amazon SQS "
    ],
    "detail": "An Administrator is hosting an application on a single Amazon EC2 instance, which user can access by the public hostname. The administrator is adding a second instance but does not want users to have to decide between many public hostnames. Which AWS service will decouple the users from specific Amazon EC2 instances?",
    "explanation": [
      "Correct answer is A as Elastic Load Balancer can help provide a single access point to multiple underlying EC2 instances.",
      "Refer AWS documentation - ELB",
      "A load balancer accepts incoming traffic from clients and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. When the load balancer detects an unhealthy target, it stops routing traffic to that target, and then \nresumes routing traffic to that target when it detects that the target is healthy again.",
      "Option B is wrong as Auto Scaling helps in scaling but would not provide a single access point",
      "Option C is wrong as EC2 security group acts as a virtual firewall that controls the traffic for one or more instances.",
      "Option D is wrong as SQS provides fully managed message queuing service."
    ],
    "id": 184,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.A standalone Amazon EC2 instance",
      "B.Amazon RDS in a Multi-AZ configuration",
      "C.Amazon EC2 instances in a replication configuration utilizing a single Availability Zone",
      "D.Amazon EC2 instances in a replication configuration utilizing two different Availability Zones "
    ],
    "detail": "A client application requires operating system privileges on a relational database server. What is an appropriate configuration for highly available database architecture?",
    "explanation": [
      "Key point here is to design a HA solution Database solution with operating system privileges.",
      "Correct answer is D as RDS is a managed service from AWS and it does not provide operating system privileges and for HA there need to be instances in at least 2 AZs",
      "Option A is wrong as single instance does not provide HA",
      "Option B is wrong as RDS does not provide operating system privileges.",
      "Option C is wrong as single AZ does not provide HA"
    ],
    "id": 185,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Application Load Balancers support dynamic host port mapping.",
      "B.CloudFront custom origins support dynamic host port mapping.",
      "C.All Elastic Load Balancing instances support dynamic host port mapping.",
      "D.Classic Load Balancers support dynamic host port mapping. "
    ],
    "detail": "You need a solution to distribute traffic evenly across all of the containers for a task running on Amazon ECS. Your task definitions define dynamic host port mapping for your containers. What AWS feature provides this functionally?",
    "explanation": [
      "Correct answer is A as Application Load Balancer helps dynamic port mapping and evenly distribute the traffic across multiple ECS containers.",
      "Refer AWS Knowledge Article - ECS Dynamic Port Mapping",
      "Dynamic port mapping with an Application Load Balancer makes it easier to run multiple tasks from the same ECS service on an ECS cluster.",
      "The Classic Load Balancer requires that you statically map port numbers on a container instance. You cannot run multiple copies of a task on the same instance, because the ports would conflict. An Application Load Balancer allows dynamic port mapping. You can have multiple tasks from a single service on the same container instance."
    ],
    "id": 186,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a cron job to detect the stale logs and delete them accordingly.",
      "B.Use a bucket policy to manage the deletion.",
      "C.Use an IAM Policy to manage the deletion.",
      "D.Use S3 Lifecycle Policies to manage the deletion. "
    ],
    "detail": "A company is asking its developers to store application logs in an S3 bucket. These logs are only required for a temporary period of time after which they can be deleted. Which of the following steps can be used to effectively manage this?",
    "explanation": [
      "Correct answer is D as S3 Object Lifecycle management helps automated object transition across storage class and expiration as well.",
      "Refer AWS documentation - S3 Object Lifecycle management",
      "To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A \nlifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:",
      "Option A is wrong although possible is not cost effective as it would need an instance poll S3 to check for expiring items and delete them.",
      "Option B & C are wrong as they allow access control to S3 bucket and objects."
    ],
    "id": 187,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy 6 EC2 instances in one availability zone and use Amazon Elastic Load Balancer.",
      "B.Deploy 3 EC2 instances in one region and 3 in another region and use Amazon Elastic Load Balancer.",
      "C.Deploy 3 EC2 instances in one availability zone and 3 in another availability zone and use Amazon Elastic Load Balancer.",
      "D.Deploy 2 EC2 instances in three regions and use Amazon Elastic Load Balancer. "
    ],
    "detail": "You have a web application running on six Amazon EC2 instances, consuming about 45% of resources on each instance. You are using auto-scaling to make sure that six instances are running at all times. The number of requests this application processes is consistent and does not experience spikes. The application is critical to your business and you want high availability at all times. You want the load to be distributed evenly between all instances. You also want to use the same Amazon Machine Image (AMI) for all instances. Which of the following architectural choices should you make?",
    "explanation": [
      "Correct answer is C as auto scaling with 3 EC2 instances in 2 AZs will provide High Availability and ELB will provide equal distribution of traffic on all instances",
      "Option A is wrong as single AZ will not provide High Availability",
      "Option B & D are wrong as the instances are in different region, AMI would not be available unless copied. Also, ELB is a regional service and cannot distribute load to instances across region."
    ],
    "id": 188,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Run the cluster in a different VPC and connect through VPC peering.",
      "B.Create a database user inside the Amazon Redshift cluster only for users on the network",
      "C.Define a cluster security group for the cluster that allows access from the allowed networks.",
      "D. Only allow access to networks that connect with the shared services network via VPN. "
    ],
    "detail": "An organization is building an Amazon Redshift cluster in their shared services VPC. The cluster will host sensitive data. How can the organization control which networks can access the cluster?",
    "explanation": [
      "Correct answer is C as security groups can be configured for Redshift cluster to control the access.",
      "Refer AWS documentation - Redshift Security Groups",
      "When you provision an Amazon Redshift cluster, it is locked down by default so nobody has access to it. To grant other users inbound access to an Amazon Redshift cluster, you associate the cluster with a security group. If you are on the EC2-Classic platform, you define a cluster security group and associate it with a cluster as described following. If you are on the EC2-VPC platform, you can either use an existing Amazon VPC security group or define a new one and then associate it with a cluster.",
      "Option A and D are wrong as VPC peering and VPN are connectivity services and cannot control traffic for security.",
      "Option B is wrong as Redshift user accounts address authentication and authorization at the user level and have no control over network traffic."
    ],
    "id": 189,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "A company has opted to store their cold data on EBS Volumes. Ensuring optimal cost, which of the following would be the ideal EBS Volume type to host this type of data?",
    "explanation": [
      "Correct answer is D as Cold HDD (sc1) volumes \nprovide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. With a lower throughput limit than st1, sc1 is a good fit ideal for large, sequential cold-data workloads. If you require infrequent access to your data and are looking to save costs, sc1 provides inexpensive block storage. Bootable sc1 volumes are not supported. Cold HDD (sc1) volumes, though similar to Throughput Optimized HDD (st1) volumes, are designed to support infrequently accessed data.",
      "Refer AWS documentation - EBS Volume Type - Cold HDD"
    ],
    "id": 190,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon RDS read replicas. ",
      "B.Use Amazon CloudFront ",
      "C.Use Amazon ElastiCache. ",
      "D.Use Amazon DynamoDB Accelerator "
    ],
    "detail": "A Solutions Architect is building an application that stores data into DynamoDB. One table in particular is read heavy and access to the data with minimal latency is critical. Which of the following would provide the highest level of performance?",
    "explanation": [
      "Correct answer is D as DynamoDB Accelerator would help caching the data in DynamoDB and delivering a 10x performance.",
      "Refer AWS documentation - DynamoDB Accelerator",
      "Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management. Now you can focus on building great applications for your customers without worrying about performance at scale. You do not need to modify application logic, since DAX is compatible with existing DynamoDB API calls. You can enable DAX with just a few clicks in the AWS Management Console or using the AWS SDK. Just as with DynamoDB, you only pay for the capacity you provision.",
      "Option A is wrong as RDS Read Replicas do not apply to DynamoDB",
      "Option B is wrong as CloudFront only provides Edge level caching.",
      "Option C is wrong as ElastiCache would not be able to provide performance as DAX."
    ],
    "id": 191,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.EC2 instance running your WAF software is included in an Auto Scaling group and placed in between two Elastic load balancers",
      "B.Remove all but TLS 1.2 from the ALB and enable Advanced Protocol Filtering This will enable the ALB itself to perform WAF functionality",
      "C.Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier subnet",
      "D.Use AWS WAF with ALB to protect your web applications from common web exploits "
    ],
    "detail": "You’ve been hired to enhance the overall security posture for a very large e-commerce site. They have a well architected multi-tier application running in a VPC that uses ALBs in front of application tier. Which approach provides an effective mitigation solution to handle DDOS attacks?",
    "explanation": [
      "Correct answer is D as ALB integrates with AWS WAF and can be used to protect web applications from common web exploits.",
      "Refer AWS documentation - ELB Application Load Balancer",
      "Web Application Firewall - You can now use AWS WAF to protect your web applications on your Application Load Balancers. AWS WAF is a web application firewall that helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    ],
    "id": 192,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.AWS EKS",
      "B.AWS Lambda",
      "C.AWS API Gateway",
      "D.AWS ELB "
    ],
    "detail": "A company wants to use Kubernetes as an orchestration tool for their application containers. They need to have a fully managed solution for this. Which one of the following services would help fulfill this requirement?",
    "explanation": [
      "Correct answer is A as \nAmazon Elastic Container Service for Kubernetes (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. Amazon EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Amazon EKS automatically detects and replaces unhealthy control plane instances, and it provides automated version upgrades and patching for them.",
      "Refer AWS documentation - EKS"
    ],
    "id": 193,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EBS",
      "C.Amazon EFS",
      "D.AWS Storage Gateway - Volume gateway "
    ],
    "detail": "A company wants to organize the contents of multiple websites in managed file storage. The company must be able to scale the storage based on demand without needing to provision storage. Multiple servers should be able to access this storage concurrently. Which services should the Solutions Architect recommend?",
    "explanation": [
      "Correct answer is C as EFS provides a AWS managed sharable file storage with the ability to be accessed from multiple servers.",
      "Refer AWS documentation - EFS",
      "Amazon Elastic File System (Amazon EFS) provides a simple, scalable, elastic file system for Linux-based workloads for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, so your applications have the storage they need – when they need it. It is designed to provide massively parallel shared access to thousands of Amazon EC2 instances, enabling your applications to achieve high levels of aggregate throughput and IOPS with consistent low latencies. Amazon EFS is a fully managed service that requires no changes to your existing applications and tools, providing access through a standard file system interface for seamless integration.",
      "Option A is wrong as S3 is an object storage.",
      "Option B is wrong as EBS volume is attached to an instance and cannot be shared across servers.",
      "Option D is wrong as Storage Gateway is a hybrid cloud storage service that connects your existing on-premises environments with the AWS Cloud"
    ],
    "id": 194,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use a Kinesis Data Delivery Stream to store the file. Use Lambda for processing.",
      "B.Use an SQS queue to store the file, to be accessed by a fleet of EC2 Instances.",
      "C.Store the file in an EBS volume, which can then be accessed by another EC2 Instance for processing.",
      "D.Store the file in an S3 bucket. Use Amazon S3 event notification to invoke a Lambda function for file processing. "
    ],
    "detail": "An application allows a manufacturing site to upload files. Each uploaded 3 GB file is processed to extract metadata, and this process takes a few seconds per file. The frequency at which the uploads happen is unpredictable. While there may be no updates for hours, followed by a peak of several files being uploaded concurrently. What architecture addresses this workload in the most cost-efficient manner?",
    "explanation": [
      "Correct answer is D as the processing of the metadata extraction happens within seconds, lambda can be used for metadata extraction with S3 used for storing the file. S3 Event notification can act as a source for invoking the lambda function.",
      "Refer AWS documentation - Lambda with S3",
      "Amazon S3 can publish events (for example, when an object is created in a bucket) to AWS Lambda and invoke your Lambda function by passing the event data as a parameter. This integration enables you to write Lambda functions that process Amazon S3 events. In Amazon S3, you add bucket notification configuration that identifies the type of event that you want Amazon S3 to publish and the Lambda function that you want to invoke.",
      "Option A is wrong as Kinesis can be integrated with Lambda, however Kinesis cannot be used store message above 1MiB. Check Kinesis Data Streams Limit",
      "Option B is wrong as SQS itself does not store the file and would need S3. Persistent EC2 instances need to be in autoscaling mode to be able to scale and process the files, which would be less cost effective compared to Lambda.",
      "Option C is wrong as EBS volumes are expensive as compared to S3 storage, same as with EC2 as compared to Lambda."
    ],
    "id": 195,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a Lambda function for each individual environment. ",
      "B.Use Amazon DynamoDB to store environment variables. ",
      "C.Use encrypted AWS Lambda environment variables. ",
      "D.Implement a dedicated Lambda function for distributing environment variables. "
    ],
    "detail": "A Solutions Architect is designing a solution with AWS Lambda where different environments require different database passwords. What should the Architect do to accomplish this in a secure and scalable way?",
    "explanation": [
      "Correct answer is D as AWS recommends encrypting the variables before and using a Lambda function to expose them which provides a more secure and scalable solution.",
      "Refer AWS documentation - Lambda Environment Variables",
      "when you deploy your Lambda function, all the environment variables you've specified are encrypted by default after, but not during, the deployment process. They are then decrypted automatically by AWS Lambda when the function is invoked. If you need to store sensitive information in an environment variable, we strongly suggest you encrypt that information before deploying your Lambda function."
    ],
    "id": 196,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use a NAT Gateway",
      "B.Use Amazon VPC endpoints",
      "C.Use a NAT Instance",
      "D.Deploy a proxy server "
    ],
    "detail": "An application server needs to be in a private subnet without access to the internet. The solution must retrieve and upload data to DynamoDB tables. How should a Solutions Architect design a solution to meet these requirements?",
    "explanation": [
      "Correct answer is B as VPC Endpoints can help the application access DynamoDB through Amazon network privately without navigating the internet.",
      "Refer AWS documentation - VPC Endpoint",
      "A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.",
      "Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.",
      "A gateway endpoint is a gateway that is a target for a specified route in your route table, used for traffic destined to a supported AWS service. The following AWS services are supported:",
      "Option A & C are wrong as NAT Gateway and NAT Instance still routes the request through internet.",
      "Option D is wrong as proxy server would still route the request through internet"
    ],
    "id": 197,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use Storage Gateway to store data to S3 and use life-cycle policies to move the data into Redshift for long-time archiving",
      "B.Use Direct Connect to upload data to S3 and use IAM policies to move the data into Glacier for longtime archiving",
      "C.Upload the data on EBS, use life-cycle policies to move EBS snapshots into S3 and later into Glacier for long-time archiving",
      "D.Upload data to S3 and use life-cycle policies to move the data into Glacier for long-time archiving "
    ],
    "detail": "You need to establish a backup and archiving strategy for your company using AWS. Documents should be immediately accessible for 3 months and available for 5 years for compliance reasons. Which AWS service fulfills these requirements in the most cost effective way?",
    "explanation": [
      "Correct answer is D as S3 Object Life Cycle management helps handle object transition from various storage classes including Glacier",
      "Option A is wrong as Redshift is a data warehousing solution.",
      "Option B is wrong as Direct Connect is not cost effective and IAM policies do not help in life cycle management",
      "Option C is wrong as life cycle policies do not apply to EBS"
    ],
    "id": 198,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Define the group policy and add a condition which allows the access based on the IAM name",
      "B.Create a DynamoDB table with the same name as the IAM user name and define the policy rule which grants access based on the DynamoDB ARN using a variable",
      "C.Create a separate DynamoDB database for each user and configure a policy in the group based on the DB variable",
      "D.It is not possible to have a group level policy which allows different IAM users to different DynamoDB Tables "
    ],
    "detail": "An organization has created 10 IAM users. The organization wants each of the IAM users to have access to a separate DynamoDB table. All the users are added to the same group and the organization wants to setup a group level policy for this. How can the organization achieve this?",
    "explanation": [
      "Correct answer is B as DynamoDB tables can be created with the same name as IAM user, and IAM policy rule defined to grant access to the specific table only."
    ],
    "id": 199,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AWS S3 Standard",
      "B.AWS Glacier",
      "C.AWS S3 Infrequent Access",
      "D.AWS EBS Volumes "
    ],
    "detail": "A company has a requirement for archival of 6TB of data. There is an agreement with the stakeholders for an 8-hour agreed retrieval time. Which of the following can be used as the MOST cost-effective storage option?",
    "explanation": [
      "Correct answer is B as Glacier provides the most cost effective solution with standard retrievals completing within 3-5 hours.",
      "Refer AWS documentation - Glacier FAQs",
      "Q: What are Standard retrievals?",
      "Standard retrievals allow you to access any of your archives within several hours. Standard retrievals typically complete within 3 – 5 hours.",
      "Q: How do I use Standard retrievals?",
      "To make a Standard retrieval, set the “Tier” parameter in the InitiateJob API request to “Standard”. If no tier is specified, the request will default to Standard."
    ],
    "id": 200,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.2",
      "B.3",
      "C.4",
      "D.6 "
    ],
    "detail": "You have been tasked with creating a VPC network topology for your company. The VPC network must support both Internet-facing applications and internally-facing applications accessed only over VPN. Both Internet-facing and internally-facing applications must be able to leverage at least three AZs for high availability. At a minimum, how many subnets must you create within your VPC to accommodate these requirements?",
    "explanation": [
      "Correct answer is D as the need is for at least 3 AZs and need to have instances in both public and private subnet for High Availability, you would need 6 subnets for each AZ as public and private."
    ],
    "id": 201,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use the AWS CLI to create queues using AWS IAM Access Keys.",
      "B.Write a script to create the Amazon SQS queue using AWS Lambda",
      "C.Use AWS Elastic Beanstalk to automatically create the Amazon SQS queues.",
      "D.Use AWS CloudFormation Templates to manage the Amazon SQS queue creation. "
    ],
    "detail": "A client notices that their engineers often make mistakes when creating Amazon SQS queues for their backend system. Which action should a Solutions Architect recommend to improve this process?",
    "explanation": [
      "Correct answer is D as CloudFormation Templates can provides a quick, reliable, error free and repeatable way to provision AWS resources.",
      "Refer AWS documentation - CloudFormation Templates",
      "AWS CloudFormation simplifies provisioning and management on AWS. You can create templates for the service or application architectures you want and have AWS CloudFormation use those templates for quick and reliable provisioning of the services or applications (called “stacks”). You can also easily update or replicate the stacks as needed."
    ],
    "id": 202,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Configure the Simple Storage Service S3",
      "B.Configure Storage Gateway Cached Volume",
      "C.Configure Storage Gateway Stored Volume.",
      "D.Configure Amazon Glacier. "
    ],
    "detail": "Your company would like to leverage the AWS storage option and integrate it with the current on-premise infrastructure. Besides, due to business requirements, low latency access to all the data is a must. Which of the following options would be best suited for this scenario?",
    "explanation": [
      "Correct answer is C as Storage Gateway Stored volumes help backup the data, while the data is also being maintained on-premises providing low latency access.",
      "Refer AWS documentation - Storage Gateway FAQs",
      "Q: What is the relation between the volume gateway and previously available gateway-cached and gateway-stored modes?",
      "The volume gateway represents the family of gateways that support block-based volumes, previously referred to as gateway-cached and gateway-stored modes.",
      "In the cached volume mode, your data is stored in Amazon S3 and a cache of the frequently accessed data is maintained locally by the gateway. With this mode, you can achieve cost savings on primary storage, and minimize the need to scale your storage on-premises, while retaining low-latency access to your most used data.",
      "In the stored volume mode, data is stored on your local storage with volumes backed up asynchronously as Amazon EBS snapshots stored in Amazon S3. This provides durable and inexpensive off-site backups. You can recover these backups locally to your gateway or in-cloud to Amazon EC2, for example, if you need replacement capacity for disaster recovery."
    ],
    "id": 203,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Redshift",
      "B.Amazon DynamoDB",
      "C.Amazon SQS",
      "D.Amazon RDS "
    ],
    "detail": "Your existing web application requires a persistent key-value store database that must service 50,000 reads/second. Your company is looking at 10% growth in traffic and data volume month over month for the next several years. Which service meets these requirements?",
    "explanation": [
      "Correct answer is B as DynamoDB is fully managed NoSQL solution and supports both key-value and document structures.",
      "Refer AWS FAQs - DynamoDB",
      "DynamoDB Auto Scaling is a fully managed feature that automatically scales up or down provisioned read and write capacity of a DynamoDB table or a global secondary index, as application requests increase or decrease.",
      "DynamoDB supports key-value and document data structures."
    ],
    "id": 204,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Auto Scaling Group ",
      "B.AWS CloudTrail ",
      "C.ELB Classic Load Balancer ",
      "D.Amazon DynamoDB ",
      "E.Amazon ElastiCache "
    ],
    "detail": "A Solutions Architect has a two-tier blog application with a single Amazon EC2 instance web server and Amazon RDS MySQL Multi-AZ DB instances. The Architect is re-architecting the application for high availability by adding instances in a second Availability Zone. Which additional services will improve the availability of the application? (Select TWO)",
    "explanation": [
      "Correct answer are A & C as a Classic Load Balancer and Auto Scaling can help improve the availability and scalability of the application with the instances being add in multiple AZs.",
      "Refer AWS documentation - Load Balancer with Auto Scaling",
      "You can automatically increase the size of your Auto Scaling group when demand goes up and decrease it when demand goes down. As the Auto Scaling group adds and removes EC2 instances, you must ensure that the traffic for your application is distributed across all of your EC2 instances. The Elastic Load Balancing service automatically routes incoming web traffic across such a dynamically changing number of EC2 instances. Your load balancer acts as a single point of contact for all incoming traffic to the instances in your Auto Scaling group.",
      "Option B is wrong as CloudTrail is more of auditing tool.",
      "Option D is wrong as DynamoDB is more of a NoSQL data store.",
      "Option E is wrong as ElastiCache is more of an in-memory caching solution."
    ],
    "id": 205,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.As an AWS Lambda function. ",
      "B.As a process on an Amazon EC2 instance. ",
      "C.As a Docker container running on Amazon ECS. ",
      "D.As a Docker container on an EC2 instance. "
    ],
    "detail": "A Solutions Architect is designing a microservice to process records from Amazon Kinesis Streams. The metadata must be stored in Amazon DynamoDB. The microservice must be capable of concurrently processing 10000 records daily as they arrive in the Kinesis Stream. The MOST scalable way to design the microservice is?",
    "explanation": [
      "Correct answer is A as Lambda provides scalable way to implement microservice and easily integrates with Kinesis.",
      "Refer AWS documentation - Lambda with Kinesis",
      "You can create a Kinesis stream to continuously capture and store terabytes of data per hour from hundreds of thousands of sources such as website click streams, financial transactions, social media feeds, IT logs, and location-tracking events. For more information, see Kinesis.",
      "You can subscribe Lambda functions to automatically read batches of records off your Kinesis stream and process them if records are detected on the stream. AWS Lambda then polls the stream periodically (once per second) for new records.",
      "Option B, C & D are not scalable as compared to Lambda."
    ],
    "id": 206,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Enable HTTP access on the AWS Lambda functions.",
      "B.Add Auto Scaling EC2 Instances with an API server installed. Integrate the server with AWS Lambda functions.",
      "C.Use the API Gateway and provide integration with the AWS Lambda functions.",
      "D.Use S3 websites to make calls to the Lambda functions "
    ],
    "detail": "A company wants to build highly scalable service quickly. They do not want their developers to be spending time on provisioning or managing servers. How can the solution be deployed in a simple way?",
    "explanation": [
      "Correct answer is C as API Gateway integrates seamlessly with Lambda to provide a highly scalable architecture without having to provision or manage the servers.",
      "Refer AWS documentation - API Gateway with Lambda",
      "With Amazon API Gateway, you can provide your clients with a consistent and scalable programming interface to access three types of endpoints in the backend: invoking AWS Lambda functions, calling other AWS services, and accessing an HTTP website or webpage. To do this, you create an API Gateway API to integrate each API method with a backend endpoint.",
      "AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second",
      "Option A is wrong as there is no direct HTTP access to Lambda functions.",
      "Option B is wrong as using Auto Scaling for API server, would need provisioning and maintaining them.",
      "Option D is wrong as S3 websites can only be used to host static websites"
    ],
    "id": 207,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 standard",
      "B.Amazon Glacier standard retrievals",
      "C.Amazon Glacier bulk retrievals",
      "D.Amazon S3 Standard Infrequent Access "
    ],
    "detail": "A media company has more than 100TB of data and retrieved infrequently. However, the company occasionally receives request for data with in hour. The company needs a low-cost retrieval method to handle the request. Which service meets this requirement?",
    "explanation": [
      "Correct answer is D as S3 Standard Infrequent Access is suitable for less frequently accessed data, which still needs to be access within an hour.",
      "Refer AWS documentation - S3 - IA",
      "S3 Standard-IA is for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. This combination of low cost and high performance make S3 Standard-IA ideal for long-term storage, backups, and as a data store for disaster recovery files.",
      "Option A is wrong as S3 Standard retrievals are expensive as compared to S3 Standard Infrequent Access",
      "Option B & C are wrong as Glacier Standard and Bulk retrievals allow you to access any of your archives within several hours and typically complete within 3 – 5 hours."
    ],
    "id": 208,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Security group restricts access to a Subnet while ACL restricts traffic to EC2",
      "B.Security group restricts access to EC2 while ACL restricts traffic to a subnet",
      "C.Security group can work outside the VPC also while ACL only works within a VPC",
      "D.Network ACL performs stateless filtering and Security group provides stateful filtering",
      "E.Security group can only set Allow rule, while ACL can set Deny rule also "
    ],
    "detail": "What is the difference between a security group in VPC and a network ACL in VPC (chose 3 correct answers)",
    "explanation": [
      "Correct answer are B, D & E",
      "Refer AWS documentation - VPC Security",
      "Option A is wrong as Security group restricts access to EC2 while ACL restricts traffic to a subnet",
      "Option C is wrong as both work in ec2 classic"
    ],
    "id": 209,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.3 servers in each of AZ's a through d, inclusive.",
      "B.8 servers in each of AZ's a and b.",
      "C.2 servers in each of AZ's a through e, inclusive.",
      "D.4 servers in each of AZ's a through c, inclusive. "
    ],
    "detail": "You are designing a system, which needs, at minimum, 8 m4.large instances operating to service traffic. When designing a system for high availability in the us-east-1 region, which has 6 Availability Zones, you company needs to be able to handle death of a full availability zone. How should you distribute the servers, to save as much cost as possible, assuming all of the EC2 nodes are properly linked to an ELB? Your VPC account can utilize us-east-1's AZ's a through f, inclusive.",
    "explanation": [
      "Correct answer is C as you need to design for N+1 redundancy on Availability Zones.",
      "To minimize cost, spread the instances across as many possible zones as you can. By using a though e, you are allocating 5 zones. Using 2 instances, you have 10 total instances. If a single zone fails, you have 4 zones left, with 2 instances each, for a total of 8 instances. By spreading out as much as possible, you have increased cost by only 25% and significantly de-risked an availability zone failure."
    ],
    "id": 210,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "A company is building an analytics platform for their big data processing and would need a volume type optimized for workloads involving large, sequential I/O. Which of the following is the best storage option for this requirement?",
    "explanation": [
      "Correct answer is B as Throughput Optimized HDD is best suited for the large sequential I/O workloads usually involving big data and ETL jobs.",
      "Refer AWS documentation - EBS Volume Types",
      "Throughput Optimized HDD (st1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. This volume type is a good fit for large, sequential workloads such as Amazon EMR, ETL, data warehouses, and log processing. Bootable st1 volumes are not supported.",
      "Throughput Optimized HDD (st1) volumes, though similar to Cold HDD (sc1) volumes, are designed to support \nfrequently accessed data.",
      "This volume type is optimized for workloads involving large, sequential I/O, and we recommend that customers with workloads performing small, random I/O use gp2."
    ],
    "id": 211,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create read replicas",
      "B.Stripe the data across multiple Amazon EBS volumes",
      "C.Switch to a Multi-AZ RDS database",
      "D.Take hourly database snapshots "
    ],
    "detail": "An Application uses a single-instance deployment of Amazon RDS MySQL database. The database has intensive read operations, and the heavy load is causing performance issues. How can a user improve performance?",
    "explanation": [
      "Correct answer is A as Read Replicas helps RDS instance to scale out and can be used to offload intensive read operations from the primary database.",
      "Refer AWS documentation - RDS Read Replicas",
      "Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput.",
      "Option B is wrong as RDS does not expose EBS volumes.",
      "Option C is wrong as Multi-AZ is a High Availability solution and not a scalable solution.",
      "Option D is wrong as snapshots allow ability to recover the DB and would not help improve performance."
    ],
    "id": 212,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.The instance with the oldest launch configuration",
      "B.The instance in the availability zone that has most instances",
      "C.The instance closest to the next billing hour",
      "D.The oldest instance in the group "
    ],
    "detail": "A media company has deployed a multi-tier architecture on AWS. Web servers are deployed in two Availability Zones using an Auto Scaling group with Auto Scaling termination policy. The web servers Auto Scaling group currently has 15 instances running. Which instance will be terminated first during a scale-in operation?",
    "explanation": [
      "Correct answer is B as there are 15 instances, the distribution across the 2 AZs is skewed. Hence, by default, an instance in the AZ with the most instances would be terminated.",
      "Refer AWS documentation - Auto Scaling Termination Policy",
      "The default termination policy is designed to help ensure that your network architecture spans Availability Zones evenly. With the default termination policy, the behavior of the Auto Scaling group is as follows:"
    ],
    "id": 213,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Apply a bucket policy that grants anonymous users to download the content from the S3 bucket ",
      "B.Generate a pre-signed object URL for the premier content file when a paid subscriber requests a download ",
      "C.Add a bucket policy that requires Multi-Factor Authentication for requests to access the S3 bucket objects ",
      "D.Enable server side encryption on the S3 bucket for data protection against the non-paying website visitors "
    ],
    "detail": "Company A has an S3 bucket containing premier content that they intend to make available to only paid subscribers of their website. The S3 bucket currently has default permissions of all objects being private to prevent inadvertent exposure of the premier content to non-paying website visitors. How can Company A provide only paid subscribers the ability to download a premier content file in the S3 bucket?",
    "explanation": [
      "Correct answer is B as pre signed urls can be used to allow paid users to download the objects.",
      "All objects in S3 by default are private. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.",
      "Refer to AWS documentation for S3 Share Object Pre Signed URL",
      "Option A, C and D are wrong as they do not prevent or limit the user from downloading the objects"
    ],
    "id": 214,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a new IAM role and associated policies within the new region",
      "B.Assign existing IAM role to the Amazon EC2 instances in the new region",
      "C.Copy the IAM role and associated policies to the new region and attach it to the instances",
      "D.Create an Amazon Machine Image (AMI) of the instance and copy it to the desired region using the AMI Copy feature "
    ],
    "detail": "A company needs to deploy services to an AWS region, which they have not previously used. The company currently has an AWS identity and Access Management (IAM) role for the Amazon EC2 instances, which permits the instance to have access to Amazon DynamoDB. The company wants their EC2 instances in the new region to have the same privileges. How should the company achieve this?",
    "explanation": [
      "Correct answer is B as IAM Role are global and are valid across regions. IAM role once created can be assigned to EC2 instances launched across regions",
      "IAM Role are global. No region is required to be specified when you define IAM Role and can use AWS services in any geographic region."
    ],
    "id": 215,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM role that allows access from the corporate network to Amazon S3",
      "B.Configure a proxy on Amazon EC2 and use an Amazon S3 VPC endpoint",
      "C.Use Amazon API Gateway to do IP whitelisting.",
      "D.Configure IP whitelisting on the customers gateway. "
    ],
    "detail": "A legacy application running on-premises requires a Solutions Architect to be able to open a firewall to allow access to several Amazon S3 buckets. The Architect has a VPN connection to AWS in place. How should the Architect meet this requirement?",
    "explanation": [
      "Correct answer is B as S3 is a public service if accessed directly from the on-premises instances, the request is routed through internet and would not be routed through the VPN connection. For enabling access, the on-premises instances can connect to an proxy on EC2 via VPN which can then help route request to S3 through VPC endpoint.",
      "The instances in the VPN-only subnet can't reach the Internet directly; any Internet-bound traffic must first traverse the virtual private gateway to your network, where the traffic is then subject to your firewall and corporate security policies. If the instances send any AWS-bound traffic (for example, requests to the Amazon S3 or Amazon EC2 APIs), the requests must go over the virtual private gateway to your network and then egress to the Internet before reaching AWS. Currently, we do not support IPv6 for VPN connections.",
      "Any traffic from your network going to an Elastic IP address for an instance in the public subnet goes over the Internet, and not over the virtual private gateway. You could instead set up a route and security group rules that enable the traffic to come from your network over the virtual private gateway to the public subnet.",
      "Option A is wrong as IAM role would not help access S3 from on-premises through VPN.",
      "Option C is wrong as API Gateway would need to be accessed from internet.",
      "Option D is wrong as IP whitelisting on customers gateway would not help S3 access."
    ],
    "id": 216,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.MySQL",
      "B.Microsoft SQL Server",
      "C.Oracle",
      "D.Amazon Aurora "
    ],
    "detail": "A company is migrating their on-premise 10TB MySQL database to AWS. They expect the database to quadruple in size within a year and want to utilize read replicas to improve read heavy operations with the sub 100 milliseconds replica lag. Which Amazon RDS engine meets the above business requirement?",
    "explanation": [
      "Correct answer is D as Amazon Aurora",
      "Refer AWS documentation - RDS Aurora & Aurora Replication",
      "Amazon Aurora (Aurora) is a fully managed, MySQL- and PostgreSQL-compatible, relational database engine. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.",
      "Aurora Replicas are independent endpoints in an Aurora DB cluster, best used for scaling read operations and increasing availability. Up to 15 Aurora Replicas can be distributed across the Availability Zones that a DB cluster spans within an AWS Region. The DB cluster volume is made up of multiple copies of the data for the DB cluster. However, the data in the cluster volume is represented as a single, logical volume to the primary instance and to Aurora Replicas in the DB cluster.",
      "As a result, all Aurora Replicas return the same data for query results with minimal replica lag—usually much less than 100 milliseconds after the primary instance has written an update. Replica lag varies depending on the rate of database change. That is, during periods where a large amount of write operations occur for the database, you might see an increase in replica lag.",
      "Option A is wrong as MySQL as the maximum size supported is 16TB, which would not suffice for the requirement. Also, the replica lag of sub 100 milliseconds may not be possible.",
      "Option B & C are wrong as Microsoft SQL Server and Oracle do not support read replicas."
    ],
    "id": 217,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Add Auto Scaling with minimum and maximum capacity as one",
      "B.Add Auto Scaling with minimum capacity as 1 and maximum capacity as two",
      "C.Change the instance type to t2.large",
      "D.Host the web service using Lambda "
    ],
    "detail": "A company is currently running their java web service on a single c4.xlarge instance with the usage being minimal and expected to grow later. How can the company architect the solution in a cost-effective, highly available and performant manner?",
    "explanation": [
      "Correct answer is D as Lambda can be used to host the web service with minimal effort, which would scale as per the demand and you pay as per the usage. There are no charges for idle time.",
      "Refer AWS documentation - Lambda",
      "AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running. With AWS Lambda, you can run code for virtually any type of application or backend service - all with zero administration. AWS Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging.",
      "Option A is wrong as Auto Scaling with 1 min and max capacity would provide High Availability, but does not improve the performance for reduce cost.",
      "Option B is wrong as Auto Scaling with 1 min and 2 max capacity would provide High Availability and little better performance, but does not reduce cost.",
      "Option C is wrong as reducing the instance type would reduce cost, however does not provide scalability and High Availability."
    ],
    "id": 218,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Auto Scaling group with a minimum of one instance and a maximum of two instances, then use an Application Load Balancer to balance the traffic. ",
      "B.Recreate the API using Amazon API Gateway and use AWS Lambda as the service backend. ",
      "C.Create an Auto Scaling group with a minimum and a maximum of two instances, then use an Application Load Balancer to balance the traffic. ",
      "D.Recreate the API using Amazon API Gateway and integrate the new API with the existing backend service. "
    ],
    "detail": "Your company deployed a simple API for their website that receives about 1000 requests each day and has an average response time of 50 ms. It is currently hosted on one c4.large instance. Which changes to the architecture will provide high availability at the LOWEST cost?",
    "explanation": [
      "Correct answer is B as the most cost effective solution would be to implement serverless architecture using API gateway with Lambda without having to manage the compute resources.",
      "Amazon API Gateway tightly integrates with AWS Lambda to allow you to create completely serverless APIs. With Amazon API Gateway, you create REST APIs that your mobile and web applications can use to call publicly available AWS services through your code running in AWS Lambda. AWS Lambda runs your code on a high-availability compute infrastructure and performs all the heavy lifting and administration of your compute resources.",
      "Option A, C & D are wrong as running 24x7 compute resources is an expensive solution."
    ],
    "id": 219,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Convert the database to Amazon Redshift",
      "B.Create a CloudFront distribution",
      "C.Convert the database to use EBS provisioned IOPS",
      "D.Create one or more read replicas. "
    ],
    "detail": "A popular e-commerce application runs on AWS. The application encounters performance issues. The database is unable to handle the amount of queries and load during peak times. The database is running on the RDS Aurora engine on the largest instance size available. What should an administrator do to improve performance?",
    "explanation": [
      "Correct answer is D as read replicas can help reduce the load on the primary database and help improve performance.",
      "Refer AWS documentation - Aurora Read Replicas",
      "Aurora Replicas are independent endpoints in an Aurora DB cluster, best used for scaling read operations and increasing availability. Up to 15 Aurora Replicas can be distributed across the Availability Zones that a DB cluster spans within an AWS Region. The DB cluster volume is made up of multiple copies of the data for the DB cluster. However, the data in the cluster volume is represented as a single, logical volume to the primary instance and to Aurora Replicas in the DB cluster.",
      "As a result, all Aurora Replicas return the same data for query results with minimal replica lag—usually much less than 100 milliseconds after the primary instance has written an update. Replica lag varies depending on the rate of database change. That is, during periods where a large amount of write operations occur for the database, you might see an increase in replica lag.",
      "Aurora Replicas work well for read scaling because they are fully dedicated to read operations on your cluster volume. Write operations are managed by the primary instance. Because the cluster volume is shared among all DB instances in your DB cluster, minimal additional work is required to replicate a copy of the data for each Aurora Replica.",
      "Option A is wrong as Redshift is more of a data warehouse solution, rather than a database.",
      "Option B is wrong as CloudFront distribution is for caching contents from web application. It does not integrate directly with RDS.",
      "Option C is wrong as Aurora does not expose underlying volumes."
    ],
    "id": 220,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use the ReceiveMessage API call to retrieve the message, the ChangeMessageVisibility API call to lower the visibility timeout, and the DeleteMessage API call to delete the message when processing completes.",
      "B.Use the ReceiveMessage API call to retrieve the message, the ChangeMessageVisibility API call to lower the visibility timeout, and the DeleteMessage API call to delete the message when processing completes.",
      "C.Use the ReceiveMessage API call to retrieve the message, the ChangeMessageVisibility API call to increase the visibility timeout, and the DeleteMessage API call to delete the message when processing completes",
      "D.Use the ReceiveMessage API call to retrieve the message and the DeleteMessage API call to delete the message when processing completes. "
    ],
    "detail": "Your application instance takes 60 seconds to process instructions received in an SQS message. Assuming the SQS queue is configured with the default Visibility Timeout, what is the best way to configure your application to ensure that no other instances retrieve a message that has already been processed or is currently being processed? Choose the correct answer",
    "explanation": [
      "Correct answer is C as the default Visibility Timeout is 30 seconds, but the application takes 60 seconds to process the instructions from the message. It is therefore necessary to increase the Visibility Timeout of the message to prevent it from becoming visible in the queue for other instances to process while it is still being processed by the first instance. (Another solution could be to increase the visibility timeout of the entire queue.) It is also necessary for the instance to delete the message from the queue once it has finished processing it, otherwise the message will become visible in the queue after the Visibility Timeout expires.",
      "Refer AWS documentation - SQS Visibility Timeout",
      "Each queue starts with a default setting of 30 seconds for the visibility timeout. You can change that setting for the entire queue. Typically, you'll set the visibility timeout to the average time it takes to process and delete a message from the queue. When receiving messages, you can also set a special visibility timeout for the returned messages without changing the overall queue timeout."
    ],
    "id": 221,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.You should use the Gateway-Virtual Tape Library (VTL) as Gateway-Cached Volumes and Gateway-Stored Volumes cannot be used for backups.",
      "B.You should use Gateway-Cached Volumes. You will have quicker access to the data, and it is a more preferred backup solution than Gateway-Stored volumes.",
      "C.It doesn't matter whether you use Gateway-Cached volumes or Gateway-Stored volumes as long as you also combine either of these solutions with the Gateway-Virtual Tape Library (VTL).",
      "D.You should use Gateway-Stored Volumes as it is preferable to Gateway-Cached Volumes as a backup storage medium. "
    ],
    "detail": "You have been given the task of designing a backup strategy for your organization's AWS resources with the only caveat being that you must use the AWS Storage Gateway. Which of the following is the most correct statement surrounding the backup strategy on the AWS Storage Gateway? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is D as the question mainly targets backup strategy, it would make sense to use Gateway Storage to have the backups in AWS while the data also resides on-premises. Gateway cached volume is mainly an actual storage option, where the entire data sits in AWS, which only the frequently accessed data on premises for low latency access.",
      "Refer AWS documentation - Storage gateway"
    ],
    "id": 222,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a bastion host that authenticates users against the corporate directory. ",
      "B.Create a bastion host with security group rules that only allow traffic from the corporate network. ",
      "C.Attach an IAM role to the bastion host with relevant permissions. ",
      "D.Configure the web servers security group to allow SSH traffic from a bastion host. ",
      "E.Deny all SSH traffic from the corporate network in the inbound network ACL. "
    ],
    "detail": "A solution Architect needs to allow developers to have SSH connectivity to web servers. The requirements are as follow: – Limit access to users originating from the corporate network. – Web servers cannot have SSH access directly from the internet. – Web servers reside in a private subnet. Which combination of steps must the Architect complete to meet these requirements? (Select TWO)",
    "explanation": [
      "Correct answer are B & D. To allow secure access you would need a Bastion host in public subnet which allows access from only the corporate network, which is controlled with security groups. The instances in private subnet can then be configured to allow SSH access only from bastion hosts.",
      "Option A is wrong as Bastion host cannot authenticate to corporate network.",
      "Option C is wrong as IAM role is used to access AWS Services and would not control SSH access to instances.",
      "Option E is wrong as Deny in ACL would not allow access to corporate network."
    ],
    "id": 223,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Edit AWS IAM policies to require MFA for all users",
      "B.Federate IAM against corporate AD that requires MFA ",
      "C.Use Amazon API Gateway and require SSE for photos",
      "D.Use Amazon Cognito Identity with SMS-based MFA "
    ],
    "detail": "An organization designs a mobile application for their customers to upload photos to a site. The application needs a secure login with MFA. The organization wants to limit the initial build time and maintenance of the solution. Which solution should a Solutions Architect recommend to meet the requirements?",
    "explanation": [
      "Correct answer is D as AWS Cognito provides an AWS managed secure solution with no maintenance and easy integration with other identity providers. It also supports MFA using SMS.",
      "Q: What is Amazon Cognito?Amazon Cognito lets you easily add user sign-up and authentication to your mobile and web apps. Amazon Cognito also enables you to authenticate users through an external identity provider and provides temporary security credentials to access your app’s backend resources in AWS or any service behind Amazon API Gateway. Amazon Cognito works with external identity providers that support SAML or OpenID Connect, social identity providers (such as Facebook, Twitter, Amazon) and you can also integrate your own identity provider.",
      "Q: Does Cognito Identity support SMS-based multi-factor authentication (MFA)?",
      "Yes, you can enable the end users of your application to sign in with SMS-based MFA. With SMS-based MFA enabled, your users will be prompted for their password (the first factor—what they know), and for a security code that can only be received on their mobile phone via SMS (the second factor—what they have)."
    ],
    "id": 224,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.The instance gets terminated automatically by the ELB.",
      "B.The instance gets quarantined by the ELB for root cause analysis.",
      "C.The instance is replaced automatically by the ELB.",
      "D.The ELB stops sending traffic to the instance that failed its health check "
    ],
    "detail": "Your web application front end consists of multiple EC2 instances behind an Elastic Load Balancer. You configured ELB to perform health checks on these EC2 instances, if an instance fails to pass health checks, which statement will be true?",
    "explanation": [
      "Correct answer id D as ELB performs health check on the instances and if the Health check fails, it will stop sending traffic to it",
      "Refer AWS documentation - ELB Health Checks",
      "The load balancer routes requests only to the healthy instances. When the load balancer determines that an instance is unhealthy, it stops routing requests to that instance. The load balancer resumes routing requests to the instance when it has been restored to a healthy state.",
      "Option A & C are wrong as instance termination and replacement is performed by Auto Scaling."
    ],
    "id": 225,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Run EC2 instances in multiple AWS Availability Zones in single Region and leverage an Elastic Load Balancer with session stickiness to route traffic to the appropriate zone to create their profile",
      "B.Run EC2 instances in multiple Regions and leverage Route 53’s Latency Based Routing capabilities to route traffic to the appropriate region to create their profile",
      "C.Run EC2 instances in multiple Regions and leverage a third-party data provider to determine if a user needs to be redirect to the appropriate region to create their profile",
      "D.Run EC2 instances in multiple AWS Availability Zones in a single Region and leverage a third-party data provider to determine if a user needs to be redirect to the appropriate zone to create their profile "
    ],
    "detail": "The compliance department within your multi-national organization requires that all data for your customers that reside in the European Union (EU) must not leave the EU and also data for customers that reside in the US must not leave the US without explicit authorization. What must you do to comply with this requirement for a web based profile management application running on EC2?",
    "explanation": [
      "Correct answer is C as the key here is the compliance requirement of data not leaving the region. Can use a third-party provider to correctly determine the region to route the traffic to.",
      "Option B is wrong as Latency based routing policy would not guarantee the compliance requirement and it might route the traffic to different region based on the latency",
      "Refer AWS documentation - Route 53 Latency Based Routing",
      "Amazon Route 53 latency-based routing lets you use DNS to route user requests to the Amazon EC2 region that will give your users the fastest response.",
      "Latency between hosts on the Internet can change over time as a result of changes in network connectivity and routing. Latency-based routing is based on latency measurements performed over a period of time, and the measurements reflect these changes. For example, if you have load balancers in the Oregon and Singapore Amazon EC2 regions, a request that is routed to the Oregon region this week might be routed to the Singapore region next week if latency from the user to the Singapore region improves.",
      "Option A & D are wrong as the data should be in 2 different regions – US and Europe, as that the data does not traverse across region"
    ],
    "id": 226,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Stop and start the instance so that it will be able to be redeployed on a healthy host system that most likely will fix the “impaired” system status",
      "B.Reboot your instance so that the operating system will have a chance to boot in a clean healthy state that most likely will fix the ‘impaired” system status",
      "C.Add another dynamic private IP address to me instance and try to connect via that new path, since the networking stack of the OS may be locked up causing the “impaired” system status.",
      "D.Add another Elastic Network Interface to the instance and try to connect via that new path since the networking stack of the OS may be locked up causing the “impaired” system status",
      "E.un-map and then re-map the EIP to the instance, since the IGW/NAT gateway may not be working properly, causing the “impaired” system status "
    ],
    "detail": "You have a Linux EC2 web server instance running inside a VPC. The instance is in a public subnet and has an EIP associated with it so you can connect to it over the Internet via HTTP or SSH. The instance was also fully accessible when you last logged in via SSH and was also serving web requests on port 80. Now you are not able to SSH into the host nor does it respond to web requests on port 80 that were working fine last time you checked. You have double-checked that all networking configuration parameters (security groups route tables, IGW, EIP. NACLs etc.) are properly configured and you haven’t made any changes to those anyway since you were last able to reach the Instance. You look at the EC2 console and notice that system status check shows “impaired.” Which should be your next step in troubleshooting and attempting to get the instance back to a healthy state so that you can log in again?",
    "explanation": [
      "Correct answer is A",
      "Option B is wrong as reboot does not help and launches the instance on the same machine & host.",
      "Refer AWS documentation - EC2 Troubleshooting Initial steps"
    ],
    "id": 227,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Upgrade the m1.small to a larger instance type",
      "B.Add an additional ENI to the test instance",
      "C.Use the EBS optimized option to offload EBS traffic",
      "D.Configure Amazon CloudWatch to provision more network bandwidth when network utilization exceeds 80% "
    ],
    "detail": "You maintain an application on AWS to provide development and test platforms for your developers. Currently both environments consist of an m1.small EC2 instance. Your developers notice performance degradation as they increase network load in the test environment. How would you mitigate these performance issues in the test environment?",
    "explanation": [
      "Correct answer is A as the m1.small is not able to perform, the best option is to scale up and use a larger instance type",
      "Option B is wrong as adding additional ENI would not help reduce load but more of an HA and Failover solution.",
      "Option C is wrong as EBS optimized with help improve performance for the EBS volumes by minimizing contention between Amazon EBS I/O and other traffic from your instance",
      "Option D is wrong as CloudWatch cannot help provision more network bandwidth, but can help scale out."
    ],
    "id": 228,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon SNS ",
      "B.AWS STS ",
      "C.Amazon SQS ",
      "D.Amazon Route 53 ",
      "E.AWS Glue "
    ],
    "detail": "Legacy applications currently send messages through a single Amazon EC2 instance, which then routes the messages to the appropriate destinations. The Amazon EC2 instance is a bottleneck and single point of failure, so the company would like to address these issues. Which services could address this architectural use case?",
    "explanation": [
      "Correct answer are A & C as SNS would allow message to publish and the messages can then to be published to SQS referred by appropriate destinations. Both the services are AWS managed and are scalable and Highly Available.",
      "Option B is wrong as STS is a security token service to provide temporary access.",
      "Option D is wrong as Route 53 is DNS service",
      "Option E is wrong as Glue is an ETL service."
    ],
    "id": 229,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AES-256 encryption of data stored on any shared storage device",
      "B.Decommissioning of storage devices using industry-standard practices",
      "C.Background virus scans of EBS volumes and EBS snapshots",
      "D.Replication of data across multiple AWS Regions",
      "E.Secure wiping of EBS data when an EBS volume is un-mounted "
    ],
    "detail": "Which is an operational process performed by AWS for data security?",
    "explanation": [
      "Correct answer is B",
      "Refer AWS Security Whitepaper",
      "Option A is wrong as it is User responsibility",
      "Option B is wrong as No virus scan is performed by AWS on User instances",
      "Option C is wrong as AWS does not replicate data across regions unless done by User",
      "Option D is wrong as data is not wiped off on EBS volume when unmounted and it can be remounted on other EC2 instance"
    ],
    "id": 230,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy a Bastion host on the corporate network that has access to all instances in the VPC.",
      "B.Deploy a Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere. Allow SSH access to EC2 instances from Bastion host.",
      "C.Deploy a Bastion host with an Elastic IP address in the private subnet and restrict access to the bastion from only the corporate public IP addresses. Allow SSH access to EC2 instances from Bastion host.",
      "D.Deploy a Bastion host with an Elastic IP address in the public subnet and restrict access to the bastion from only the corporate public IP addresses. Allow SSH access to EC2 instances from Bastion host. "
    ],
    "detail": "A customer is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They want the control the access to the EC2 instances such that the instances should be accessible only from the corporate network and there should be no direct access to the instances. Which of the following deployment scenarios will meet this requirement?",
    "explanation": [
      "Correct answer is D as the architecture needs to be aligned as per the below",
      "1. Bastion Host must be in Public Subnet with Elastic/Public IP address to be internet accessible",
      "2. Bastion access should be restricted from the Corporate IPs only",
      "3. All Instances in public and private subnet should be configured to allow SSH access from the Bastion host only.",
      "Option A is wrong as the Bastion host needs to be on AWS",
      "Option B is wrong as Bastion host needs to have restricted access from the corporate network only",
      "Option C is wrong as the Bastion host needs to be on the public subnet."
    ],
    "id": 231,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure the table to have a partition key on the name attribute, and a sort key on the office identifier ",
      "B.Configure the table to have a sort key on the name attribute, and a partition key on the office identifier ",
      "C.Configure a partition key on the name attribute and no sort key ",
      "D.Configure a partition key on the office Identifier attribute and no sort key "
    ],
    "detail": "An application stores payroll information nightly in DynamoDB for a large number of employees across hundreds of offices. Item attributes consist of individual name, office identifier, and cumulative daily hours. Managers run reports for ranges of names working in their office. One query is. \"Return all Items in this office for names starting with A through E\". Which table configuration will result in the lowest impact on provisioned throughput for this query?",
    "explanation": [
      "Correct answer is B as a partition key on the office identifier and the sort key on the Name attribute.",
      "Refer AWS documentation - DynamoDB FAQs",
      "A composite partition-sort key is indexed as a partition key element and a sort key element. This multi-part key maintains a hierarchy between the first and second element values. For example, a composite partition-sort key could be a combination of “UserID” (partition) and “Timestamp” (sort). \nHolding the partition key element constant, you can search across the sort key element to retrieve items. This would allow you to use the Query API to, for example, retrieve all items for a single UserID across a range of timestamps."
    ],
    "id": 232,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D",
      "F"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 Cluster placement groups",
      "B.Enhanced networking",
      "C.Amazon PV AMI ",
      "D.Amazon HVM AMI",
      "E.Amazon Linux",
      "F.Amazon VPC "
    ],
    "detail": "You have multiple Amazon EC2 instances running in a cluster across multiple Availability Zones within the same region. What combination of the following should be used to ensure the highest network performance (packets per second), lowest latency, and lowest jitter? Choose 3 answers",
    "explanation": [
      "Correct answer are B, D & F as we need Enhanced Networking for lowest latency, and lowest jitter across multiple AZs and Enhanced Networking works only within a VPC on an HVM virtualization.",
      "Refer AWS documentation Enhanced Networking",
      "Enhanced networking uses single root I/O virtualization (SR-IOV) to provide high-performance networking capabilities on supported instance types. SR-IOV is a method of device virtualization that provides higher I/O performance and lower CPU utilization when compared to traditional virtualized network interfaces. Enhanced networking provides higher bandwidth, higher packet per second (PPS) performance, and consistently lower inter-instance latencies",
      "Option A is wrong as placement groups works only within the AZ scope. This refers to the old Cluster placement groups.",
      "NOTE - With Spread Placement groups introduced, Placement groups can span multiple AZs.",
      "Option C is wrong as Enhanced Networking does not work with PV virtualization",
      "Option E is wrong as Enhanced Networking configurations are only enabled by default on the Amazon Linux, but are not limited to Amazon Linux AMI. It can work on other flavors of Unix like ubuntu as well. Refer AWS documentation"
    ],
    "id": 233,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure Auto Scaling for the NAT instance in order to handle increase in load",
      "B.Create a VPC S3 endpoint",
      "C.Increase the NAT instance size; network throughput increases with an increase in instance size",
      "D.Launch an additional NAT instance in another subnet and replace one of the routes in a subnet to the new instance "
    ],
    "detail": "A company is managing a customer's application which currently includes a three-tier application configuration. The first tier manages the web instances and is configured in a public subnet. The second layer is the application layer. As part of the application code, the application instances upload large amounts of data to Amazon S3. Currently, the private subnets that the application instances are running for on have a route to a single NAT t2.micro NAT instance. The application, during peak loads, becomes slow and customer uploads from the application to S3 are not completing and taking a long time. Which steps might you take to solve the issue using the most cost efficient method? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is B as VPC S3 endpoint would help the instances to connect to S3 without having to route the traffic through NAT and IGW.",
      "Refer AWS documentation - VPC Endpoints",
      "A VPC endpoint enables you to create a private connection between your VPC and another AWS service without requiring access over the Internet, through a NAT device, a VPN connection, or AWS Direct Connect. Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and AWS services without imposing availability risks or bandwidth constraints on your network traffic."
    ],
    "id": 234,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Access the data through an Internet Gateway.",
      "B.Access the data through a VPN connection.",
      "C.Access the data through a NAT Gateway.",
      "D.Access the data through a VPC endpoint for Amazon S3. "
    ],
    "detail": "An application running on EC2 instances processes sensitive information stored on Amazon S3. The information is accessed over the Internet. The security team is concerned that the Internet connectivity to Amazon S3 is a security risk. Which solution will resolve the security concern?",
    "explanation": [
      "Correct answer is D as VPC endpoints allows EC2 instances to access S3 without traversing through internet.",
      "Refer AWS documentation - VPC Endpoints",
      "A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.",
      "Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.",
      "Option A and C are wrong as NAT Gateways and Internet Gateways route traffic over the Internet to the public endpoint for Amazon S3.",
      "Option B is wrong as there is no way to connect to Amazon S3 via VPN."
    ],
    "id": 235,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon DynamoDB",
      "B.Amazon Redshift",
      "C.Amazon S3",
      "D.Amazon RDS "
    ],
    "detail": "You’ve been tasked with choosing a datastore to persist GPS coordinates for a new app. The service needs consistent, single-digit millisecond latency at any scale. In order to support future growth, the datastore must also support cross-region replication. Which AWS service meets your requirements?",
    "explanation": [
      "Correct answer is A as DynamoDB provides a highly scalable, consistent, low latency datastore with a cross region replication ability.",
      "Refer AWS documentation - DynamoDB",
      "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity, makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.",
      "Refer AWS documentation - DynamoDB Cross Region Replication",
      "DynamoDB cross-region replication solution uses the Amazon DynamoDB Cross-Region Replication Library. This library uses DynamoDB Streams to keep DynamoDB tables in sync across multiple regions in near real time. When you write to a DynamoDB table in one region, those changes are automatically propagated by the Cross-Region Replication Library to your tables in other regions."
    ],
    "id": 236,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Upload all the logs to the SQS Service and then use EC2 Instances to scan the logs.",
      "B.Upload the logs to Amazon Kinesis and then analyze the logs accordingly.",
      "C.Upload the logs to CloudTrail and then analyze the logs accordingly.",
      "D.Upload the logs to Glacier and then analyze the logs accordingly. "
    ],
    "detail": "A company has a set of web servers. It is required to ensure that all the logs from these web servers can be analyzed in real time for any sort of threat detection. Which of the following would assist in this regard?",
    "explanation": [
      "Correct answer is B as Kinesis provide a scalable storage for log capture and processing at real time.",
      "Refer AWS documentation - Kinesis",
      "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to cost-effectively process streaming data at any scale, along with the flexibility to choose the tools that best suit the requirements of your application. With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. Amazon Kinesis enables you to process and analyze data as it arrives and respond instantly instead of having to wait until all your data is collected before the processing can begin.",
      "Option A is wrong as SQS with EC2 instances would need a lot of resources to scale.",
      "Option C is wrong as CloudTrail is not a storage option and allows capture audit logs.",
      "Option D is wrong as Glacier is for archival and does not offer real time storage and analysis of data."
    ],
    "id": 237,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Vault Lock",
      "B.Expedited retrieval",
      "C.Bulk retrieval",
      "D.Standard retrieval "
    ],
    "detail": "A Solutions Architect is designing a solution to store and archive corporate documents and has determined that Amazon Glacier is the right solution. Data has to be retrieved within 3-5 hrs as directed by the management. Which feature in Amazon Glacier can help meet this requirement and ensure cost-effectiveness?",
    "explanation": [
      "Correct answer is D as Glacier provides the most cost effective solution with standard retrievals completing within 3-5 hours.",
      "Refer AWS documentation - Glacier FAQs",
      "Q: What are Standard retrievals?",
      "Standard retrievals allow you to access any of your archives within several hours. Standard retrievals typically complete within 3 – 5 hours.",
      "Q: How do I use Standard retrievals?",
      "To make a Standard retrieval, set the “Tier” parameter in the InitiateJob API request to “Standard”. If no tier is specified, the request will default to Standard."
    ],
    "id": 238,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.The routing table of subnet A has no target route to subnet B",
      "B.The security group attached to instance B does not allow inbound ICMP traffic",
      "C.The policy linked to the IAM role on instance A is not configured correctly",
      "D.The NACL on subnet B does not allow outbound ICMP traffic "
    ],
    "detail": "Instance A and instance B are running in two different subnets A and B of a VPC. Instance A is not able to ping instance B. What are two possible reasons for this? (Pick 2 correct answers)",
    "explanation": [
      "Correct answer is B & D as for instance to instance communication is basically controlled using Security Groups configured at the instance level and NACLs configured at the subnet level. Security groups are stateful and need to allow inbound ICMP, while NACL being stateless need to allow both inbound and outbound ICMP",
      "Option A is wrong as subnets within a VPC can communicate with each other and need routing configured.",
      "Option C is wrong as IAM role on instance is to control what the instance can access."
    ],
    "id": 239,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Add an S3 lifecycle rule to move any new files from the bucket in us-east-1 to the bucket in ap-southeast-2 ",
      "B.Create a Lambda function to be triggered for every new file in us-east-1 that copies the file to the bucket in ap-southeast-2",
      "C.Use SNS to notify the bucket in ap-southeast-2 to create a file whenever a file is created in the bucket in us-east-1 ",
      "D.Enable versioning and configure cross-region replication from the bucket in us-east-1 to the bucket in ap-southeast-2 "
    ],
    "detail": "A company needs to quickly ensure that all files created in an Amazon S3 bucket in us-east-1 are also available in another bucket in ap-southeast-2. Which option represents the SIMPLEST way to implement this design?",
    "explanation": [
      "Correct answer is D as the simplest way to replicate data across regions is using cross region replication, which can be done with couple of clicks. Although it increased the cost due to multiple versions of the objects being stored.",
      "Refer AWS documentation - S3 Cross Region Replication",
      "Cross-region replication (CRR) enables automatic, asynchronous copying of objects across buckets in different AWS Regions. Buckets configured for cross-region replication can be owned by the same AWS account or by different accounts.",
      "Cross-region replication is enabled with a bucket-level configuration. You add the replication configuration to your source bucket. In the minimum configuration, you provide the following:",
      "Option A is wrong as lifecycle policy does not allow copying the data to different regions. You can only apply transition of expiration policies.",
      "Option B is wrong as it is not a simplest way as you need to write, deploy and configure Lambda function with S3 for copying the data.",
      "Option C is wrong as S3 bucket cannot create the file by itself."
    ],
    "id": 240,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.EC2 Instance security",
      "B.EBS volume Encryption",
      "C.Physical network infrastructure security",
      "D.User access control to the AWS environment "
    ],
    "detail": "You are a consultant tasked with migrating an on-premise application architecture to AWS. During your design process, you have to give consideration to current on-premise security and determine which security attributes you are responsible for on AWS. Which of the following does AWS provide for you as part of the shared responsibility model?",
    "explanation": [
      "Correct answer is C as Physical network infrastructure is AWS responsibility.",
      "Refer AWS Security Whitepaper",
      "AWS data centers are housed in nondescript facilities. Physical access is strictly controlled both at the perimeter and at building ingress points by professional security staff utilizing video surveillance, intrusion detection systems, and other electronic means. Authorized staff must pass two-factor authentication a minimum of two times to access data center floors. All visitors and contractors are required to present identification and are signed in and continually escorted by authorized staff.",
      "AWS only provides data center access and information to employees and contractors who have a legitimate business need for such privileges. When an employee no longer has a business need for these privileges, his or her access is immediately revoked, even if they continue to be an employee of Amazon or Amazon Web Services. All physical access to data centers by AWS employees is logged and audited routinely."
    ],
    "id": 241,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Direct Connect provides greater redundancy than an Internet-based VPN connection.",
      "B.AWS Direct Connect provides greater resiliency than an Internet-based VPN connection.",
      "C.AWS Direct Connect provides greater bandwidth than an Internet-based VPN connection.",
      "D.AWS Direct Connect provides greater control of network provider selection than an Internet-based VPN connection. "
    ],
    "detail": "An organization has established an Internet-based VPN connection between their on-premises data center and AWS. They are considering migrating from VPN to AWS Direct Connect. Which operational concern should drive an organization to consider switching from an Internet-based VPN connection to AWS Direct Connect?",
    "explanation": [
      "Correct answer is C as \nAWS Direct Connect does not involve the Internet; instead, it uses dedicated, private network connections between your intranet and Amazon VPC.\n In many circumstances, private network connections can reduce costs, increase bandwidth, and provide a more consistent network experience than Internet-based connections.",
      "Refer AWS documentation - Direct Connect FAQs",
      "Option A & B are wrong as Direct Connect connection are not redundant and resilient",
      "Q. Are connections to AWS Direct Connect redundant?Each connection consists of a single dedicated connection between ports on your router and an Amazon router. We recommend establishing a second connection if redundancy is required. When you request multiple ports at the same AWS Direct Connect location, they will be provisioned on redundant Amazon routers.",
      "Option D is wrong as you are limited to either AWS or AWS APN Partners for helping setup Direct Connect connection"
    ],
    "id": 242,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use EBS Volumes to store the videos. Create a script to delete the videos after a month.",
      "B.Use transition rule in S3 to move the files to Glacier after a month and use expiration rule to delete it after a year",
      "C.Store the videos in Amazon Glacier for a year and then use Lifecycle Policies for expiration to delete it after a year",
      "D.Store the videos using Instance Store Volumes. Create a script to delete the videos after a month. "
    ],
    "detail": "A storage solution is required in AWS to store videos uploaded by the user. Over a period of a month the videos are frequently accessed, after which the videos can be archived for a year. The videos should be purged after a year. How should this be implemented in a cost-effective manner?",
    "explanation": [
      "Correct answer is B as S3 Object Lifecycle management helps automated object transition across storage class and expiration as well. The object can be held in S3 for a month, and then transitioned to glacier for a year for archival. After a year it can be purged.",
      "Refer AWS documentation - S3 Object Lifecycle management",
      "To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A \nlifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:",
      "Option A & D are wrong as EBS and Instance store volumes are not cost effective and durable for storage and archival",
      "Option C is wrong as Glacier is no ideal for frequent access of data for the first month."
    ],
    "id": 243,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Move the Internet gateway for the VPC to a private subnet. Route all Internet traffic through the Internet gateway.",
      "B.Create an Amazon EC2 NAT instance with a second elastic network interface (ENI) in a public subnet. Route all private subnet Internet traffic through the NAT gateway",
      "C.Create a NAT gateway in a public subnet route all private subnet Internet traffic through the NAT gateway",
      "D.Create an Auto Scaling group of Amazon EC2 NAT instances in a public subnet. Route all private subnet Internet traffic through the NAT. "
    ],
    "detail": "You have been asked to design a NAT solution for your company’s VPC-based web application. Traffic from the private subnets varies throughout the day from 500 Mbps to spikes of 7 Gbps. What is the most cost-effective and scalable solution?",
    "explanation": [
      "Correct answer is C as the most cost effective and scalable solution is to use the AWS NAT Gateway, which is an AWS managed NAT solution.",
      "Refer AWS documentation - NAT Gateway",
      "You can use a network address translation (NAT) gateway to enable instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances.",
      "You are charged for creating and using a NAT gateway in your account. NAT gateway hourly usage and data processing rates apply. Amazon EC2 charges for data transfer also apply.",
      "Option A is wrong as Internet gateway cannot be moved to private subnet and the traffic from private subnets needs to the route through the Internet gateway via public subnet.",
      "Option B is wrong as a single instance would be able scalable.",
      "Option D is wrong as creating an Auto Scaling group of NAT instances, would cost more depending on the bandwidth provided the instances and number of instances required."
    ],
    "id": 244,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use a T2 burstable performance instance.",
      "B.Use a c4.large instance with enhanced networking.",
      "C.Use two t2.nano instances that have single Root I/O Virtualization.",
      "D.Use t2.nano instance and add spot instances when they are required. "
    ],
    "detail": "You have a legacy application running that uses an m4.large instance size and cannot scale with Auto Scaling, but only has peak performance 5% of the time. This is a huge waste of resources and money, so your Senior Technical Manager has set you the task of trying to reduce costs while still keeping the legacy application running as it should. Which of the following would best accomplish the task your manager has set you? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is A to use T2 burstable instances as they allow credits to be accumulated over the non-usage period with the ability to burst.",
      "Refer AWS Blog for EC2 Burstable Instances",
      "The T2 instances are built around a processing allocation model that provides you a generous, assured baseline amount of processing power coupled with the ability to automatically and transparently scale up to a full core when you need more compute power. Your ability to burst is based on the concept of “CPU Credits” that you accumulate during quiet periods and spend when things get busy. You can provision an instance of modest size and cost and still have more than adequate compute power in reserve to handle peak demands for compute power.",
      "T2 instances are a new low-cost, General Purpose instance type that provide a baseline level of CPU performance with the ability to burst above the baseline. With On-Demand Instance prices starting at $0.0065 per hour, T2 instances are the lowest-cost Amazon EC2 instance option and are ideal for web servers, developer environments, and small databases."
    ],
    "id": 245,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon API Gateway and AWS Lambda ",
      "B.Elastic Load Balancing with Auto Scaling groups and Amazon EC2 ",
      "C.Amazon API Gateway and Amazon EC2 ",
      "D.Amazon CloudFront and AWS Lambda. "
    ],
    "detail": "A Solutions Architect is developing a new web application on AWS. The architect expects the application to become very popular, so the application must scale to support the load. The Architect wants to focus on software development and deploying new features without provisioning or managing instances. Which solution is appropriate?",
    "explanation": [
      "Correct answer is A as API Gateway and AWS Lambda are both AWS managed services, which scale automatically without an need for provisioning compute resources.",
      "Option B is wrong as EC2 instances with Auto Scaling would need provisioning and configuring instances.",
      "Option C is wrong as EC2 instances would need provisioning.",
      "Option D is wrong as CloudFront with Lambda does not provide the API interface."
    ],
    "id": 246,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Store your log in Amazon CloudWatch Logs. ",
      "B.Store your logs in Amazon Glacier. ",
      "C.Store your logs in Amazon S3, and use lifecycle policies to archive to Amazon Glacier. ",
      "D.Store your logs in HDFS on an Amazon EMR cluster. ",
      "E.Store your logs on Amazon EBS, and use Amazon EBS snapshots to archive them. "
    ],
    "detail": "You have been given a business requirement to retain log files for your application for 10 years. You need to regularly retrieve the most recent logs for troubleshooting. Your logging system must be cost-effective, given the large volume of logs. What technique should you use to meet these requirements?",
    "explanation": [
      "Correct answer is C as the recent logs can be stored initially in S3 for troubleshooting till required and then moved to Glacier for long term, low cost archival.",
      "Refer AWS Blog S3 to Glacier"
    ],
    "id": 247,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Set a CORS configuration",
      "B.Set a bucket policy to encrypt all Amazon S3 objects",
      "C.Enable default encryption on the bucket",
      "D.Set permissions for users "
    ],
    "detail": "A solutions architect is defining a shared Amazon S3 bucket where corporate applications will save objects. How can the Architect ensure that when an application uploads an object to the Amazon S3 bucket, the object is encrypted?",
    "explanation": [
      "Correct answer is C as the S3 default encryption can be enabled to automatically encrypt the objects before they are stored into S3.",
      "Refer AWS documentation - S3 Default Encryption",
      "Amazon S3 default encryption provides a way to set the default encryption behavior for an S3 bucket. You can set default encryption on a bucket so that all objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS).",
      "When you use server-side encryption, Amazon S3 encrypts an object before saving it to disk in its data centers and decrypts it when you download the objects.",
      "Default encryption works with all existing and new S3 buckets. Without default encryption, to encrypt all objects stored in a bucket, you must include encryption information with every object storage request. You must also set up an S3 bucket policy to reject storage requests that don't include encryption information."
    ],
    "id": 248,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Multi-AZ feature on the RDS MySQL database. ",
      "B.ELB Classic Load Balancer in front of the web application tier. ",
      "C.Amazon SQS in front of RDS MySQL database. ",
      "D.Amazon ElastiCache in front of the RDS MySQL Database. "
    ],
    "detail": "A Solutions Architect is designing an architecture for a mobile gaming application. The application is expected to be very popular. The Architect needs to prevent the Amazon RDS MySQL database from becoming a bottleneck due to frequently accessed queries. Which service or feature should the Architect add to prevent a bottleneck?",
    "explanation": [
      "Correct answer is D as ElastiCache can help cache the frequently accessed data from RDS providing low latency access and reducing the load on RDS.",
      "Q: How does Amazon ElastiCache interact with other Amazon Web Services?",
      "Amazon ElastiCache is ideally suited as a front-end for Amazon Web Services like Amazon RDS and Amazon DynamoDB, providing extremely low latency for high performance applications and offloading some of the request volume while these services provide long lasting data durability. The service can also be used to improve application performance in conjunction with Amazon EC2 and EMR.",
      "Option A is wrong as Multi-AZ is a High Availability feature and does not aid in scalability",
      "Option B is wrong as web application tier is not an issue.",
      "Option C is wrong as SQS does not reduce the load on database."
    ],
    "id": 249,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable HTTP access on the AWS Lambda functions.",
      "B.Use the API Gateway and provide integration with the AWS Lambda functions.",
      "C.Add EC2 Instances with an API server installed. Integrate the server with AWS Lambda functions.",
      "D.Use S3 websites to make calls to the Lambda functions "
    ],
    "detail": "You currently have a set of Lambda functions which have business logic embedded in them. You want customers to have the ability to call these functions via HTTP. How can they design the solution to be performant?",
    "explanation": [
      "Correct answer is B as API Gateway can act as http interface to Lambda functions.",
      "Refer AWS documentation - API Gateway with Lambda",
      "With Amazon API Gateway, you can provide your clients with a consistent and scalable programming interface to access three types of endpoints in the backend: invoking AWS Lambda functions, calling other AWS services, and accessing an HTTP website or webpage. To do this, you create an API Gateway API to integrate each API method with a backend endpoint. Each backend endpoint is associated with an integration type.",
      "Option A is wrong as Lambda does not have a HTTP access interface.",
      "Option C is wrong as using EC2 instances need to be scaled and is not a cost effective option",
      "Option D is wrong as S3 websites are static and do not emit events for Lambda"
    ],
    "id": 250,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use Cost Explorer to generate the report for the past 12 months and to provide the forecast.",
      "B.Use the AWS Usage Reports to generate the report spend over the last 12 months, and project the forecast based on the results for those reports.",
      "C.Use the Consolidated Bill Details reports for the report spend over the last 12 months, and project the forecast based on the results of those reports.",
      "D.Use Amazon CloudWatch to generate the report spend over the last 12 months, and AWS Config to help determine the forecast. "
    ],
    "detail": "An Administrator is tasked with creating a detailed report that shows expenditures over the past 12 months, as well as a forecast of expenditures over the next three months. The report should be split across the different AWS sections the company is utilizing. What should the Administrator use to generate the reports?",
    "explanation": [
      "Correct answer is A as Cost Explorer allows you to generate cost reports for the past 13 months and forecast for 3 months, with the ability to filter the data over a variety of filters.",
      "Refer AWS documentation - Cost Explorer",
      "Cost Explorer is a free tool that you can use to view your costs. You can view your costs as either a cash-based view (costs are recorded when cash is received or paid) with unblended costs or as an accrual-based view (costs are recorded when income is earned or costs are incurred). You can view data for up to the last 13 months, forecast how much you are likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase. You can use Cost Explorer to see patterns in how much you spend on AWS resources over time, identify areas that need further inquiry, and see trends that you can use to understand your costs. You can also specify time ranges for the data, and view time data by day or by month.",
      "For example, you can use Cost Explorer to see which service you use the most, which Availability Zone (AZ) most of your traffic is in, which linked account uses AWS the most, and more.",
      "With Cost Explorer, you can filter your view by a variety of filters:"
    ],
    "id": 251,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Ensure the application instances are properly configured with an Elastic Load Balancer",
      "B.Ensure the application instances are launched in private subnets with the EBS-optimized option enabled",
      "C.Ensure the application instances are launched in public subnets with the associate-public-IP-address=true option enabled",
      "D.Launch application instances in private subnets with an Auto Scaling group and Auto Scaling triggers configured to watch the SQS queue size "
    ],
    "detail": "You have been asked to leverage Amazon VPC EC2 and SQS to implement an application that submits and receives millions of messages per second to a message queue. You want to ensure your application has sufficient bandwidth between your EC2 instances and SQS. Which option will provide the most scalable solution for communicating between the application and SQS?",
    "explanation": [
      "Correct answer is D as SQS with Job Observer pattern would help scaling and improve the handling.",
      "Refer Job Observer pattern",
      "Option B is wrong as EBS-optimized would improve the bandwidth between EC2 and EBS, however not between SQS and EC2 handling.",
      "An Amazon EBS–optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O. This optimization provides the best performance for your EBS volumes by minimizing contention between Amazon EBS I/O and other traffic from your instance."
    ],
    "id": 252,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a Simple routing policy",
      "B.Configure a Weighted policy",
      "C.Configure a Multivalue Answer policy",
      "D.Configure a Latency policy "
    ],
    "detail": "A company hosts 5 web servers in AWS. They want to ensure that Route 53 can be used to route user traffic to random web servers when they request for the underlying web application. Which routing policy should be used to fulfill to improve the availability and resiliency?",
    "explanation": [
      "Refer AWS documentation - Route 53 Multivalue Answer policy",
      "Multivalue answer routing lets you configure Amazon Route 53 to return multiple values, such as IP addresses for your web servers, in response to DNS queries. You can specify multiple values for almost any record, but multivalue answer routing also lets you check the health of each resource, so Route 53 returns only values for healthy resources. It's not a substitute for a load balancer, but the ability to return multiple health-checkable IP addresses is a way to use DNS to improve availability and load balancing.",
      "To route traffic approximately randomly to multiple resources, such as web servers, you create one multivalue answer record for each resource and, optionally, associate a Route 53 health check with each record. Route 53 responds to DNS queries with up to eight healthy records and gives different answers to different DNS resolvers. If a web server becomes unavailable after a resolver caches a response, client software can try another IP address in the response.",
      "Option A is wrong as Simple routing is used for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website.",
      "Option B is wrong as weighted policy helps direct traffic is a proper proportion across resources",
      "Option D is wrong as latency policy helps direct the traffic to the resource with minimal latency"
    ],
    "id": 253,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use multiple copies of the Lambda function, each with API Gateway as the trigger. You are changed per request not per function",
      "B.Use one Lambda function with API Gateway as the trigger. Lambda will allocate capacity to match the rate of incoming events",
      "C.Use one Lambda function with API Gateway as the trigger. Increase the amount of memory configured for the Lambda function",
      "D.Use multiple API Gateway endpoints, each triggering a Lambda function "
    ],
    "detail": "You have created an API powered by API gateway and AWS Lambda. Because of a new feature release, you expect traffic volume on your API to increase 10-fold Which configuration should you use?",
    "explanation": [
      "Correct answer is B as Lambda will automatically allocate additional capacity to match the incoming request rate.",
      "Refer AWS documentation - Lambda FAQs",
      "Q: How do I scale an AWS Lambda function?",
      "You do not have to scale your Lambda functions – AWS Lambda scales them automatically on your behalf. Every time an event notification is received for your function, AWS Lambda quickly locates free capacity within its compute fleet and runs your code. Since your code is stateless, AWS Lambda can start as many copies of your function as needed without lengthy deployment and configuration delays. There are no fundamental limits to scaling a function. AWS Lambda will dynamically allocate capacity to match the rate of incoming events."
    ],
    "id": 254,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a secondary S3 bucket. Then, use an AWS Lambda to sync the contents to the primary bucket.",
      "B.Use Pre-Signed URLs instead to upload the images.",
      "C.Use ECS Containers to upload the images.",
      "D.Upload the images to SQS and then push them to the S3 bucket. "
    ],
    "detail": "A mobile based application requires uploading images to S3. As an architect, you do not want to make use of the existing web server to upload the images due to the load that it would incur. How can this be handled?",
    "explanation": [
      "Correct answer is B as S3 allows creation of S3 pre-signed urls for object uploads. The urls would provide direct access to S3 upload without having to route the upload through the web application.",
      "Refer AWS documentation - S3 Upload Object with PreSigned URL",
      "A pre-signed URL gives you access to the object identified in the URL, provided that the creator of the pre-signed URL has permissions to access that object. That is, if you receive a pre-signed URL to upload an object, you can upload the object only if the creator of the pre-signed URL has the necessary permissions to upload that object.",
      "All objects and buckets by default are private. The pre-signed URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. When you create a pre-signed URL, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (PUT for uploading objects), and an expiration date and time. The pre-signed URLs are valid only for the specified duration",
      "Option A is wrong as even with a secondary bucket the upload needs to happen through the application.",
      "Option C is wrong as even with containers the upload would be routed through the application.",
      "Option D is wrong as S3 is not suitable for image uploads"
    ],
    "id": 255,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Place the Redshift cluster in a private subnet. ",
      "B.Encrypt the Amazon EBS volumes. ",
      "C.Use the AWS KMS Default Customer master key. ",
      "D.Encrypt the data using SSL/TLS. "
    ],
    "detail": "A Solutions Architect is designing an application that will encrypt all data in an Amazon redshift cluster. Which action will encrypt the data at rest?",
    "explanation": [
      "Correct answer is C as Redshift allows encryption of cluster using KMS.",
      "Refer AWS documentation - Redshift Encryption",
      "When you choose AWS KMS for key management with Amazon Redshift, there is a four-tier hierarchy of encryption keys. These keys, in hierarchical order, are the master key, a cluster encryption key (CEK), a database encryption key (DEK), and data encryption keys.",
      "When you launch your cluster, Amazon Redshift returns a list of the customer master keys (CMKs) that your AWS account has created or has permission to use in AWS KMS. You select a CMK to use as your master key in the encryption hierarchy.",
      "By default, Amazon Redshift selects your default key as the master key. Your default key is an AWS-managed key that is created for your AWS account to use in Amazon Redshift. AWS KMS creates this key the first time you launch an encrypted cluster in a region and choose the default key.",
      "Option A is wrong as placing Redshift in private subnet does not encrypt the data.",
      "Option B is wrong as Redshift does not expose underlying volumes.",
      "Option D is wrong as it does not provide encryption at rest, but provides encryption in transit"
    ],
    "id": 256,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with Customer-Provided Keys (SSE-C) ",
      "B.Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3) ",
      "C.Create an Amazon S3 bucket to store the reports and use Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)",
      "D.Create an Amazon S3 bucket to store the reports and use Amazon S3 versioning with Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3) "
    ],
    "detail": "A company is evaluating Amazon S3 as a data storage solution for their daily analyst reports. The company has implemented stringent requirements concerning the security of the data at rest. Specifically, the CISO asked for the use of envelope encryption with separate permissions for the use of an envelope key, automated rotation of the encryption keys, and visibility into when an encryption key was used and by whom. Which steps should a Solutions Architect take to satisfy the security requirements requested by the CISO?",
    "explanation": [
      "Correct answer is C as SSE-KMS allows envelope encryption with separate permissions for the use of an envelope key, automated rotation of the encryption keys, and visibility into when an encryption key was used using CloudTrail.",
      "Refer AWS documentation - S3 SSE-KMS",
      "The highlights of SSE-KMS are:",
      "Automatic key rotation is disabled by default on customer managed CMKs. When you enable (or re-enable) key rotation, AWS KMS automatically rotates the CMK 365 days after the enable date and every 365 days thereafter.",
      "Option A is wrong as with SSE-C, the customer needs to maintain, rotate and audit the keys.",
      "Option B & D are wrong as SSE-S3 does not provide access to the master key and it is maintained by S3."
    ],
    "id": 257,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Increase the number of nodes in your cluster",
      "B.Tweak the max_item_size parameter",
      "C.Shrink the number of nodes in your cluster",
      "D.Increase the size of the nodes in the cluster "
    ],
    "detail": "You are using ElastiCache Memcached to store session state and cache database queries in your infrastructure. You notice in CloudWatch that Evictions and Get Misses are both very high. What two actions could you take to rectify this? Choose 2 answers",
    "explanation": [
      "Correct answer is A & D",
      "Refer AWS documentation - ElastiCache Cache Metrics",
      "Evictions",
      "This is a cache engine metric, published for both Memcached and Redis cache clusters. We recommend that you determine your own alarm threshold for this metric based on your application needs.",
      "Memcached: If you exceed your chosen threshold, scale you cache cluster up by using a larger node type, or scale out by adding more nodes.Redis: If you exceed your chosen threshold, scale your cluster up by using a larger node type."
    ],
    "id": 258,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a Glacier vault. Use a Glacier Connector and mount it as an iSCSI device.",
      "B.Create an S3 bucket. Use an S3 Connector and mount it as an iSCSI device.",
      "C.Use the EFS file service and mount the different file systems to the on-premise servers.",
      "D.Use the AWS Storage Gateway-cached volumes service. "
    ],
    "detail": "A company needs to extend their storage infrastructure to the AWS Cloud. The storage needs to be available as iSCSI devices for on-premises application servers. Which of the following would be able to fulfill this requirement?",
    "explanation": [
      "Correct answer is D as Storage Gateway Cached volumes help extend the storage on AWS with the ability to access device as iSCSI devices.",
      "Refer AWS documentation - Storage Gateway FAQs",
      "The volume gateway provides block storage to your applications using the iSCSI protocol. Data on the volumes is stored in Amazon S3. To access your iSCSI volumes in AWS, you can take EBS snapshots which can be used to create EBS volumes.",
      "The volume gateway represents the family of gateways that support block-based volumes, previously referred to as gateway-cached and gateway-stored modes.",
      "In the cached volume mode, your data is stored in Amazon S3 and a cache of the frequently accessed data is maintained locally by the gateway. With this mode, you can achieve cost savings on primary storage, and minimize the need to scale your storage on-premises, while retaining low-latency access to your most used data.",
      "In the stored volume mode, data is stored on your local storage with volumes backed up asynchronously as Amazon EBS snapshots stored in Amazon S3. This provides durable and inexpensive off-site backups. You can recover these backups locally to your gateway or in-cloud to Amazon EC2, for example, if you need replacement capacity for disaster recovery."
    ],
    "id": 259,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OAI.",
      "B.Add the CloudFront account security group “amazon-cu/amazon-cf-sg” to the appropriate S3 bucket policy.",
      "C.Create an Identity and Access Management (IAM) User for CloudFront and grant access to the objects in your S3 bucket to that IAM User.",
      "D.Create a S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN). "
    ],
    "detail": "You are building a system to distribute confidential training videos to employees. Using CloudFront, what method could be used to serve content that is stored in S3, but not publicly accessible from S3 directly?",
    "explanation": [
      "Correct answer is A as CloudFront OAI can be used to keep the S3 contents private and accessible only through CloudFront.",
      "Refer AWS documentation - Private Content Restricting Access to S3"
    ],
    "id": 260,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon CloudWatch to monitor utilization ",
      "B.Use Amazon API Gateway to monitor availability",
      "C.Use an Amazon Elastic Load Balancer",
      "D.Use Amazon Route 53 health checks. "
    ],
    "detail": "A solutions architect is designing a highly-available website that is served by multiple web servers hosted outside AWS. If an instance becomes unresponsive, the Architect needs to remove it from the rotation. What is the MOST efficient way to fulfill this requirement?",
    "explanation": [
      "Correct answer is D as Route 53 allows routing requests to instances outside AWS as well as providing health checks to route traffic to only healthy instances.",
      "Refer AWS documentation - Route 53 FAQs",
      "Q. What is Amazon Route 53?",
      "Amazon Route 53 provides highly available and scalable Domain Name System (DNS), domain name registration, and health-checking web services. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like example.com into the numeric IP addresses, such as 192.0.2.1, that computers use to connect to each other. \nYou can combine your DNS with health-checking services to route traffic to healthy endpoints or to independently monitor and/or alarm on endpoints. You can also purchase and manage domain names such as example.com and automatically configure DNS settings for your domains. Route 53 effectively connects user requests to infrastructure running in AWS – such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets – \nand can also be used to route users to infrastructure outside of AWS."
    ],
    "id": 261,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Import the logs into an RDS MySQL instance",
      "B.Use AWS Data pipeline to import the logs into a DynamoDB table",
      "C.Write the files to an S3 bucket and use Amazon Athena to query the data",
      "D.Import the logs to an Amazon Redshift cluster "
    ],
    "detail": "A Solutions Architect must design a storage solution for incoming billing reports in CSV format. The data does not need to be scanned frequently and is discarded after 30 days. Which service will be MOST cost-effective in meeting these requirements?",
    "explanation": [
      "Correct answer is C as S3 provides the most cost effective solution to store the log data without processing it. Athena can be used to query data and with lifecycle policies the data can be expired.",
      "Option A is wrong as the data needs to processed and RDS is not a cost effective solution and expiration needs to be handled",
      "Option B is wrong as the data needs to processed and DynamoDB even though provides item expiration is not a cost effective solution as compared to S3.",
      "Option D is wrong as Redshift is not store the logs file and is not cost effective and expiration needs to be handled"
    ],
    "id": 262,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use ElastiCache in front of DynamoDB",
      "B.Use DynamoDB inbuilt caching",
      "C.Use DynamoDB Accelerator",
      "D.Use RDS with ElastiCache instead "
    ],
    "detail": "A company has setup an application in AWS that interacts with DynamoDB. DynamoDB is currently responding in milliseconds, but the application response guidelines requires it to respond within microseconds. How can the performance of DynamoDB be further improved?",
    "explanation": [
      "Correct answer is C as DynamoDB Accelerator helps provide caching for DynamoDB to give a 10x performance.",
      "Refer AWS documentation - DynamoDB DAX",
      "Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.",
      "While DynamoDB offers consistent single-digit millisecond latency, DynamoDB + DAX takes performance to the next level with response times in microseconds for millions of requests per second for read-heavy workloads. With DAX, your applications remain fast and responsive, even when a popular event or news story drives unprecedented request volumes your way. No tuning required."
    ],
    "id": 263,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Enable MFA for privileged users ",
      "B.Create individual IAM users",
      "C.Keep rotating your secure access credentials at regular intervals ",
      "D.Create strong access key and secret access key and attach to the root account "
    ],
    "detail": "Which of the below mentioned options is not a best practice to securely manage the AWS access credentials?",
    "explanation": [
      "Correct answer is D as you should never use root account, except for billing. Best practice is to create an Admin account and generate access keys only if needed.",
      "Refer AWS documentation - IAM Best Practices"
    ],
    "id": 264,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 Spot Instances ",
      "B.On-Demand Amazon EC2 instances ",
      "C.Scheduled Reserved Instances ",
      "D.Dedicated Amazon EC2 Instances "
    ],
    "detail": "A Solutions Architect needs to design an architecture for a new, mission-critical batch processing billing application. The application is required to run on weekends from 5 AM to 11 AM. Which is the MOST cost-effective Amazon EC2 pricing model?",
    "explanation": [
      "Correct answer is C as the jobs are not run continuously but do have a regular schedule, Scheduled RIs can help decrease costs and ensure the capacity is always available.",
      "Refer AWS documentation - EC2 RI types",
      "• Standard RIs: These provide the most significant discount (up to 75% off On-Demand) and are best suited for steady-state usage.",
      "• Convertible RIs: These provide a discount (up to 54% off On-Demand) and the capability to change the attributes of the RI as long as the exchange results in the creation of Reserved Instances of equal or greater value. Like Standard RIs, Convertible RIs are best suited for steady-state usage.",
      "• Scheduled RIs: These are available to launch within the time windows you reserve. This option allows you to match your capacity reservation to a predictable recurring schedule that only requires a fraction of a day, a week, or a month.",
      "Scheduled Reserved Instances (Scheduled Instances) enable you to purchase capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term. You reserve the capacity in advance, so that you know it is available when you need it. You pay for the time that the instances are scheduled, even if you do not use them.",
      "Scheduled Instances are a good choice for workloads that do not run continuously, but do run on a regular schedule. For example, you can use Scheduled Instances for an application that runs during business hours or for batch processing that runs at the end of the week.",
      "If you require a capacity reservation on a continuous basis, Reserved Instances might meet your needs and decrease costs.",
      "Option A is wrong as Spot instances are not ideal for mission critical processing as the availability cannot be guaranteed. Also,",
      "Option B is wrong as On-Demand instances are not ideal for mission critical processing as the availability cannot be guaranteed. Also, they are expensive compared to Reserved Instances.",
      "Option D is wrong as Dedicated instances is ideal for compliance maintaining a single tenant requirement and are expensive."
    ],
    "id": 265,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.EBS provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EFS "
    ],
    "detail": "An application with a 150 GB relational database runs on an EC2 Instance. While the application is used infrequently with small peaks in the morning and evening, what is the most cost effective storage type among the options below?",
    "explanation": [
      "Correct answer is C as EBS General Purpose SSD with its burst capability can help meet the requirement of occasional peaks.",
      "Refer AWS documentation - EBS Volume Types",
      "Performance of gp2 volumes is tied to volume size, which determines the baseline performance level of the volume and how quickly it accumulates I/O credits; larger volumes have higher baseline performance levels and accumulate I/O credits faster. I/O credits represent the available bandwidth that your gp2 volume can use to burst large amounts of I/O when more than the baseline performance is needed. The more credits your volume has for I/O, the more time it can burst beyond its baseline performance level and the better it performs when more performance is needed."
    ],
    "id": 266,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Web Identity Federation",
      "B.AWS Cognito with SMS MFA",
      "C.IAM Role with SMS MFA",
      "D.IAM User with SMS MFA "
    ],
    "detail": "A company is building a mobile app for consumers to post cat pictures online. They want to launch the app quickly without spending much time in implementing authentication. However, as a part of security requirement the Mobile app needs to have a two-factor authentication. As a solution architect how would you implement this feature?",
    "explanation": [
      "Correct answer is B as the company wants a quick authentication mechanism with 2FA, Cognito can be quickly integrated.",
      "Refer AWS documentation - Cognito FAQs",
      "Q: Does Cognito Identity support SMS-based multi-factor authentication (MFA)?",
      "Yes, you can enable the end users of your application to sign in with SMS-based MFA. With SMS-based MFA enabled, your users will be prompted for their password (the first factor—what they know), and for a security code that can only be received on their mobile phone via SMS (the second factor—what they have)."
    ],
    "id": 267,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.EBS provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EFS "
    ],
    "detail": "An application with a 150 GB relational database runs on an EC2 Instance. While the application is used infrequently with small peaks in the morning and evening, what is the MOST cost effective storage type among the options below?",
    "explanation": [
      "Correct answer is C as General Purpose SSD with its ability to support burst capacity would be the cost effective solution to be able to handle the occasional peak performance.",
      "Refer AWS documentation - EBS Volume Types",
      "General Purpose SSD (gp2) volumes offer cost-effective storage that is ideal for a broad range of workloads. These volumes deliver single-digit millisecond latencies and the ability to burst to 3,000 IOPS for extended periods of time. Between a minimum of 100 IOPS (at 33.33 GiB and below) and a maximum of 10,000 IOPS (at 3,334 GiB and above), baseline performance scales linearly at 3 IOPS per GiB of volume size. AWS designs gp2 volumes to deliver the provisioned performance 99% of the time. A gp2 volume can range in size from 1 GiB to 16 TiB."
    ],
    "id": 268,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Enable a read replica in another Availability Zone. ",
      "B.Enable multiple Availability Zones in a different AWS Region. ",
      "C.Enable multiple Availability Zones in the same AWS Region. ",
      "D.Enable Amazon RDS instance snapshots in on Availability Zone. "
    ],
    "detail": "A solutions architect is migrating a company’s MySQL database to an Amazon RDS MySQL database. The company requires the database to be resilient with minimum downtime when failures occur. How can these requirements be met?",
    "explanation": [
      "Correct answer is C as Multi-AZ RDS provides the resiliency with minimal downtime. Multi-AZ works by maintaining a synchronous copy of the database in a different AZ within the same region.",
      "Refer AWS documentation - RDS Multi-AZ",
      "Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.",
      "Option A is wrong as Read Replica does not provide resiliency but is more of a scalability solution.",
      "Option B is wrong as Multi-AZ works within the same region.",
      "Option D is wrong as Snapshots would need manual intervention to create volumes and create RDS database instance."
    ],
    "id": 269,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Public IPs of the ALB nodes",
      "B.IP range of the ALB subnets",
      "C.Security group attached to the ALB",
      "D.VPC CIDR "
    ],
    "detail": "An application runs in a VPC on Amazon EC2 instances behind an Application Load Balancer. Traffic to the EC2 instances must be limited from the Application Load Balancer. Based on these requirements, the security group configuration should only allow traffic from?",
    "explanation": [
      "Correct answer is C as ALB security group needs to be configured as the inbound Source IP on the EC2 instances.",
      "Refer AWS documentation - EC2 Security Group Rules",
      "The security group rules for your instances must allow the load balancer to communicate with your instances on both the listener port and the health check port.",
      "The ID of the load balancer security group",
      "Options A, B & C are wrong as ALB does not have a fixed ip and its public."
    ],
    "id": 270,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use an AWS Classic Load Balancer with a host-based routing option to route traffic to the correct service.",
      "B.Use the AWS CLI to update Amazon Route 53 hosted zone to route traffic as services get updated.",
      "C.Use an AWS Application Load Balancer with host-based routing option to route traffic to the correct service.",
      "D.Use Amazon CloudFront to manage and route traffic to the correct service. "
    ],
    "detail": "A large media site has multiple applications in Amazon ECS. A Solutions Architect needs to use content metadata and route traffic to specific services. What is the MOST efficient method to perform this task?",
    "explanation": [
      "Correct answer is C as ALB allows content-based routing.",
      "Refer AWS documentation - ALB",
      "A load balancer serves as the single point of contact for clients. The load balancer distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones. This increases the availability of your application. You add one or more listeners to your load balancer. A listener checks for connection requests from clients, using the protocol and port that you configure, and forwards requests to one or more target groups, based on the rules that you define. Each rule specifies a target group, condition, and priority. When the condition is met, the traffic is forwarded to the target group. You must define a default rule for each listener, and you can add rules that specify different target groups based on the content of the request (also known as content-based routing).",
      "Option A is wrong as Classic ELB does not provide content-based routing.",
      "Option B is wrong as Route 53 does not perform routing",
      "Option D is wrong as CloudFront does not perform routing"
    ],
    "id": 271,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Perform a cache refresh on the CloudFront distribution that is serving the content ",
      "B.Perform an invalidation on the CloudFront distribution that is serving the content",
      "C.Create a new cache behavior path with the updated content ",
      "D.Change the TTL value for removing the old objects. "
    ],
    "detail": "A company has an application that uses Amazon CloudFront for content that is hosted on an Amazon S3 bucket. After an unexpected refresh, the users are now seeing old content. Which steps should the Solution Architect take to ensure that new content is displayed?",
    "explanation": [
      "Correct answer is B as the objects are already cached, the only way to refresh the content is to invalidate the cache.",
      "Refer AWS Knowledge Center - CloudFront serving outdated content",
      "By default, Amazon CloudFront caches a response from Amazon S3 for 24 hours (Default TTL of 86,400 seconds). If your request lands at an edge location that served the Amazon S3 response within 24 hours, Amazon CloudFront uses the cached response even if you updated the content in Amazon S3.",
      "Use one of the following ways to push the updated S3 content from Amazon CloudFront:"
    ],
    "id": 272,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create a launch configuration with a desired capacity of two web servers across multiple Availability Zones. Create an Auto Scaling group with the AMI ID of the web server image. Use Amazon Route 53 latency-based routing to balance traffic across the Auto Scaling group",
      "B.Create a launch configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple regions. Use an Application Load Balancer (ALB) to balance traffic across the Auto Scaling group.",
      "C.Create a launch configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration, and a desired capacity of two web servers across multiple Availability Zones. Use an ALB to balance traffic across the Auto Scaling group",
      "D.Create a launch configuration with the AMI ID of the web server image. Create an Auto Scaling group using the newly-created launch configuration and a desired capacity of two web servers across multiple AZ. Use Route 53 weighted routing to balance traffic across the Auto Scaling group. "
    ],
    "detail": "A workload in an Amazon VPC consists of a single web server launched from a custom AMI. Session state is stored in a database. How should the Solutions Architect modify this workload to be both highly available and scalable?",
    "explanation": [
      "Correct answer is C as a launch configuration can be created with AMI ID with Auto Scaling and ALB to enable scalability depending upon the demand. Auto Scaling configured multiple AZs provide the high availability.",
      "Refer AWS documentation - Auto Scaling + Load Balancer",
      "You can automatically increase the size of your Auto Scaling group when demand goes up and decrease it when demand goes down. As the Auto Scaling group adds and removes EC2 instances, you must ensure that the traffic for your application is distributed across all of your EC2 instances. The Elastic Load Balancing service automatically routes incoming web traffic across such a dynamically changing number of EC2 instances. Your load balancer acts as a single point of contact for all incoming traffic to the instances in your Auto Scaling group.",
      "Option A is wrong as AMI ID needs to be configured with Auto Scaling Launch Configuration. Route 53 cannot be used to route traffic across Auto Scaling group.",
      "Option B is wrong as an Auto Scaling group can contain EC2 instances from multiple Availability Zones within the same Region. However, an Auto Scaling group can't contain EC2 instances from multiple Regions.",
      "Option D is wrong as Route 53 cannot be used to route traffic across Auto Scaling group."
    ],
    "id": 273,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Take snapshots of the EBS volumes and terminate the instances",
      "B.Sell the instances on the AWS Reserved Instance Marketplace",
      "C.Stop the instances as soon as possible",
      "D.Terminate the Reserved instance contract and contact AWS for refund. "
    ],
    "detail": "Your AWS environment contains several reserved EC2 instances dedicated to a project that has just been cancelled. Your supervisor would like to recuperate cost for these reserved instances, but also does not want to lose the data just yet in case the project is revived next fiscal year. What can you do to minimize charges for these instances? Choose the 2 correct answers",
    "explanation": [
      "Correct answers are A & B as the requirement is to reduce cost, the reserved instances can be sold while taking a backup with snapshots.",
      "Refer AWS documentation - Reserved Instances Fundamentals",
      "Before you confirm your purchase, review the details of the Reserved Instances that you plan to buy, and make sure that all the parameters are accurate. After you purchase a Reserved Instance (either from a third-party seller in the Reserved Instance Marketplace or from AWS), you cannot cancel your purchase. However, you may be able to sell the Reserved Instance if your needs change."
    ],
    "id": 274,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon RDS with provisioned IOPS up to the anticipated peak writes throughput.",
      "B.Amazon Simple Queue Service (SQS) for capturing the writes and draining the queue to write to the database.",
      "C.Amazon ElastiCache to store the writes until the writes are committed to the database.",
      "D.Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput. "
    ],
    "detail": "Your company plans to host a large donation website on Amazon Web Services (AWS). You anticipate a large and undetermined amount of traffic that will create many database writes. To be certain that you do not drop any writes to a database hosted on AWS. Which service should you use?",
    "explanation": [
      "Correct answer is B as SQS can be used to provide the durability with at least once delivery of the message and buffer the writes to DynamoDB.",
      "Option A is wrong as RDS is not ideal solution because it cannot scale horizontally to handle the writes.",
      "Option C is wrong as ElastiCache is for caching and not ideal for storing the writes.",
      "Option D is wrong as there is large and undetermined amount of traffic the write throughput cannot be provisioned."
    ],
    "id": 275,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use Kinesis Data Firehose with S3 to take the logs and store them in S3 for further processing.",
      "B.Launch an Elastic Beanstalk application to take the processing job of the logs.",
      "C.Launch an EC2 instance with enough EBS volumes to consume the logs which can be used for further processing.",
      "D.Use CloudTrail to store all the logs which can be analyzed at a later stage. "
    ],
    "detail": "A company has an infrastructure that consists of machines which keep sending log information every minute. The number of these machines can run into thousands and it is required to ensure that the data can be analyzed at a later stage. Which of the following would help in fulfilling this requirement?",
    "explanation": [
      "Correct answer is A as the Kinesis data firehose can be used to capture data and push to S3 with the frequency from multiple producers",
      "Refer AWS documentation - Kinesis Data Firehose",
      "Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon Elasticsearch Service (Amazon ES), and Splunk. With Kinesis Data Firehose, you don't need to write applications or manage resources. You configure your data producers to send data to Kinesis Data Firehose, and it automatically delivers the data to the destination that you specified. You can also configure Kinesis Data Firehose to transform your data before delivering it.",
      "Option B is wrong as Elastic beanstalk would not scale for the data frequency.",
      "Option C is wrong as EBS volumes would not scale for the data with EC2 instance.",
      "Option D is wrong as CloudTrail is for auditing and does not help capture external logs."
    ],
    "id": 276,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use Cost Explorer to generate the report for the past 12 months and to provide the forecast.",
      "B.Use the AWS Usage Reports to generate the report spend over the last 12 months, and project the forecast based on the results for those reports.",
      "C.Use the Consolidated Bill Details reports for the report spend over the last 12 months, and project the forecast based on the results of those reports.",
      "D.Use Amazon CloudWatch to generate the report spend over the last 12 months, and AWS Config to help determine the forecast. "
    ],
    "detail": "An Administrator is tasked with creating a detailed report that shows expenditures over the past 12 months, as well as a forecast of expenditures over the next three months. The report should be split across the different AWS sections the company is utilizing. What should the Administrator use to generate the reports?",
    "explanation": [
      "Correct answer is A as Cost Explorer allows you to generate cost reports for the past 13 months and forecast for 3 months, with the ability to filter the data over a variety of filters.",
      "Refer AWS documentation - Cost Explorer",
      "Cost Explorer is a free tool that you can use to view your costs. You can view your costs as either a cash-based view (costs are recorded when cash is received or paid) with unblended costs or as an accrual-based view (costs are recorded when income is earned or costs are incurred). You can view data for up to the last 13 months, forecast how much you are likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase. You can use Cost Explorer to see patterns in how much you spend on AWS resources over time, identify areas that need further inquiry, and see trends that you can use to understand your costs. You can also specify time ranges for the data, and view time data by day or by month.",
      "For example, you can use Cost Explorer to see which service you use the most, which Availability Zone (AZ) most of your traffic is in, which linked account uses AWS the most, and more.",
      "With Cost Explorer, you can filter your view by a variety of filters:"
    ],
    "id": 277,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use an ALB and an auto scaling group to distribute the load across multiple instances. Write orders to an Amazon SQS queue. Use EC2 instances in an AutoScaling group to read from the SQS queue and process orders into the database.",
      "B.Increase the instance size of the web server when traffic is high. Write orders as messages to Amazon SNS, ensuring the database is subscribed to the SNS topic.",
      "C.Use an ALB and an Auto Scaling group to distribute the load across multiple instances. Write orders to an SQS queue. When instances have spare CPU available, read from the SQS and process orders into the database.",
      "D.Use an ALB and an Auto Scaling group to distribute the load across multiple instances. Write orders as messages to SNS, ensuring that the database is subscribed to the SNS topic. "
    ],
    "detail": "An application is used to process customer orders using an Amazon EC2 instance which saves the orders to an Amazon Aurora database. Occasionally when traffic is high the workload does not process orders fast enough. What will ensure that the orders are written to the database as quickly as possible?",
    "explanation": [
      "Correct answer is A as the design handles the increase in traffic through ALB and Auto Scaling to handle the load as well as using SQS for decoupling and scaling the processing to store the data in Aurora.",
      "Option B is wrong as Instance size cannot be increased on a running instance and the instance must be stopped. Also, there would be a bit of downtime. Database cannot subscribe to the SNS topic and process the messages.",
      "Option C is wrong as the design cannot fulfill the requirement to write as quickly as possible.",
      "Option D is wrong as database cannot subscribe to the SNS topic and process the messages."
    ],
    "id": 278,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "A company has opted to store their cold data on EBS Volumes. Ensuring optimal cost, which of the following would be the ideal EBS Volume type to host this type of data?",
    "explanation": [
      "Correct answer is D as EBS Cold HDD is the best option for infrequent accessed cold data.",
      "Refer AWS documentation - EBS Volume Types",
      "Cold HDD (sc1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. With a lower throughput limit than st1, sc1 is a good fit ideal for large, sequential cold-data workloads. If you require infrequent access to your data and are looking to save costs, sc1 provides inexpensive block storage"
    ],
    "id": 279,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Elastic Transcoder",
      "B.AWS Simple Notification Service",
      "C.AWS Simple Queue Service",
      "D.AWS Glacier "
    ],
    "detail": "A user has created photo editing software and hosted it on EC2. The software accepts requests from the user about the photo format and resolution and sends a message to S3 to enhance the picture accordingly. Which of the below mentioned AWS services will help make a scalable software with the AWS infrastructure in this scenario?",
    "explanation": [
      "Correct answer is C as SQS can be used to architect a scalable software by decoupling the requests and scaling dynamically as per the load",
      "Refer AWS documentation - SQS",
      "Amazon Simple Queue Service (Amazon SQS) offers a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. It moves data between distributed application components and helps you decouple these components",
      "Option A is wrong as Elastic Transcoder helps transcode videos to different formats.",
      "Option B is wrong as SNS is a notification service",
      "Option C is wrong as Glacier is more of an archival solution"
    ],
    "id": 280,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.ELB DNS record’s TTL is set too high.",
      "B.The new instances are not being added to the ELB during the Auto Scaling cooldown period.",
      "C.The website uses the dynamic content feature of Amazon CloudFront which is keeping connections alive to the ELB.",
      "D.ELB is continuing to send requests with previously established sessions to the same backend instances rather than spreading them out to the new instances. "
    ],
    "detail": "A customer has a web application that uses cookie-based sessions to track logged-in users. It is deployed on AWS using Elastic Load Balancing and Auto Scaling. When load increases, Auto Scaling launches new instances, but the load on the other instances does not decrease; this causes all existing users to have a slow experience. What could be the cause of the poor user experience?",
    "explanation": [
      "Correct answer is D as ELB is stateful and uses cookie-based sessions. So, it might be continuing to send requests to previously established sessions and hence existing users having a poor experience.",
      "Option A is wrong as Elastic Load Balancing uses a TTL setting on the DNS record of 60 seconds and there is no mention of what is the configuration.",
      "Option B is wrong as instances would still be added to reduce a load and only new instances after those would depend on the cooldown period.",
      "Option C is wrong as CloudFront will route traffic back to the origin servers depending on the TTL"
    ],
    "id": 281,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a Read Replica of the primary database and deploy it in a different AWS Region. ",
      "B.Enable Multi-AZ to create a standby database in a different Availability Zone. ",
      "C.Enable Multi-AZ to create a standby database in a different AWS Region. ",
      "D.Create a Read Replica of the primary database and deploy it in a different Availability Zone. "
    ],
    "detail": "A solutions Architect is deploying a new production MySQL database on AWS. It is critical that the database is highly available. What should the Architect to do achieve this goal with Amazon RDS?",
    "explanation": [
      "Correct answer is B as Multi-AZ setup for RDS enabled High Availability with a standby instance in a different AZ within the same region.",
      "Refer AWS documentation - Multi-AZ RDS",
      "Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.",
      "Option A & D are wrong as Read Replica is a Scalability solution rather than High Availability solution.",
      "Option C is wrong as Multi-AZ setup creates a standup instance in a separate AZ within the same region. It cannot span across region."
    ],
    "id": 282,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use the Amazon Elastic Container Service for Kubernetes.",
      "B.Install a custom orchestration tool on EC2 Instances.",
      "C.Use SQS to orchestrate the messages between docker containers.",
      "D.Use AWS Lambda functions to embed the logic for container orchestration. "
    ],
    "detail": "A company wants to deploy docker containers to the AWS Cloud. They also want a highly scalable service which can help manage the orchestration of these containers. Which of the following would be ideal for such a requirement?",
    "explanation": [
      "Correct answer is A as Elastic Container Service for Kubernetes can provide docker container orchestration.",
      "Refer AWS documentation - EKS",
      "Amazon Elastic Container Service for Kubernetes (Amazon EKS) makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS.",
      "Amazon EKS runs the Kubernetes management infrastructure for you across multiple AWS availability zones to eliminate a single point of failure. Amazon EKS is certified Kubernetes conformant so you can use existing tooling and plugins from partners and the Kubernetes community. Applications running on any standard Kubernetes environment are fully compatible and can be easily migrated to Amazon EKS."
    ],
    "id": 283,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon DynamoDB",
      "B.Amazon S3",
      "C.Amazon EBS",
      "D.Amazon EFS "
    ],
    "detail": "A company has a legacy application using a proprietary file system and plans to migrate the application to AWS. Which storage service should the company use?",
    "explanation": [
      "Correct answer is D as EFS provides a file system. Amazon EFS provides shared access to data using a traditional file sharing permissions model and hierarchical directory structure via the NFSv4 protocol. Applications that access data using a standard file system interface provided through the operating system can use Amazon EFS to take advantage of the scalability and reliability of file storage in the cloud without writing any new code or adjusting applications.",
      "Refer AWS documentation - When to choose EFS",
      "Option A is wrong as DynamoDB is a NoSQL storage.",
      "Option B is wrong as S3 is an object storage. Amazon S3 is an object storage platform that uses a simple API for storing and accessing data. Applications that do not require a file system structure and are designed to work with object storage can use Amazon S3 as a massively scalable, durable, low-cost object storage solution.",
      "Option C is wrong as EBS provides block based storage system. Amazon EBS is a cloud block storage service that provides direct access from a single Amazon EC2 instance to a dedicated storage volume. Applications that require persistent dedicated block access for a single host can use Amazon EBS as a highly available, low-latency block storage solution."
    ],
    "id": 284,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use General Purpose SSD",
      "B.Use Provisioned IOPS ",
      "C.Use SSD Instance Store",
      "D.Use Magnetic "
    ],
    "detail": "A company is planning to use RDS for their production online transaction processing (OLTP) workloads. The application is I/O-intensive and requires low I/O latency and consistent I/O throughput. What is an ideal storage solution?",
    "explanation": [
      "Correct answer is B as Provisioned IOPS is designed for I/O intensive workloads with the requirement of low I/O latency and consistent I/O throughput.",
      "Refer AWS documentation - RDS Storage"
    ],
    "id": 285,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Decrease the size of the SQS messages from 70 KB to 60 KB",
      "B.Switch from short polling to long polling",
      "C.Increase the visibility timeout for messages in the SQS queue",
      "D.Use Auto Scaling to grow and shrink the number of EC2 instances based on the number of messages in the SQS queue "
    ],
    "detail": "You manage an application that uses EC2 instances and SQS to process requests from end users. Your application is working great, but your supervisor is concerned about the cost of the AWS resources it uses. Which of the following would not help address that concern? Choose the correct answer",
    "explanation": [
      "Correct answer is C as increasing the visibility timeout does not impact cost, but just makes the message unavailable for other customers for processing.",
      "Refer AWS documentation - SQS Pricing",
      "Option A is wrong as reducing the size to 60KB would help reduce cost",
      "Each 64 KB chunk of a payload is billed as 1 request",
      "Option B is wrong as long polling only helps reduce the cost. Refer SQS Long Polling",
      "Long polling helps reduce your cost of using Amazon SQS by reducing the number of empty responses (when there are no messages available to return in reply to a ReceiveMessage request sent to an Amazon SQS queue) and eliminating false empty responses (when messages are available in the queue but aren't included in the response):",
      "Option D is wrong as EC2 instance can be scaled based on the SQS queue demand to cut cost."
    ],
    "id": 286,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Add a Step Scaling policy",
      "B.Add a Dynamic Scaling policy",
      "C.Add a Scheduled Scaling action",
      "D.Add Amazon EC2 Spot instances. "
    ],
    "detail": "An e-commerce application is hosted in AWS. The last time a new product was launched, the application experienced a performance issue due to an enormous spike in traffic. Management decided that capacity must be doubled the week before of future product launches. Which is the MOST efficient way for management to ensure that capacity requirements are met?",
    "explanation": [
      "Correct answer is C as Auto Scaling scheduled actions can help planned and scale for known demand patterns.",
      "Refer AWS documentation - Scheduled Scaling using AWS Auto Scaling",
      "Scaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application.",
      "Option A & B are wrong as Step Up and Dynamic Scaling respond to events and scale out/in as the demand changes.",
      "Option D is wrong as Spot instances do not guarantee availability and can be terminated any time."
    ],
    "id": 287,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon DynamoDB",
      "B.Amazon S3",
      "C.Amazon Aurora",
      "D.Amazon Redshift "
    ],
    "detail": "An application requires a highly available relational database with an initial storage capacity of 8 TB. The database will grow by 8 GB every day. To support expected traffic, at least eight read replicas will be required to handle database reads. Which option will meet these requirements?",
    "explanation": [
      "Correct answer is C as Aurora provides relational database features with the ability to scale upto 64TB and support upto 15 read replicas.",
      "Refer AWS documentation - Aurora & Aurora Replication",
      "Aurora Replicas are independent endpoints in an Aurora DB cluster, best used for scaling read operations and increasing availability. Up to 15 Aurora Replicas can be distributed across the Availability Zones that a DB cluster spans within an AWS Region."
    ],
    "id": 288,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EFS",
      "C.Amazon EBS",
      "D.Cached Volumes "
    ],
    "detail": "A Solutions Architect is developing a solution for sharing files in an organization. The solution must allow multiple users to access the storage service at once from different virtual machines and scale automatically. It must also support file-level locking. Which storage service meets the requirements of this use case?",
    "explanation": [
      "Correct answer is B as EFS scales automatically, can be access from multiple machines and provides file-level locking.",
      "Refer AWS documentation - EFS FAQs",
      "Q. What is Amazon Elastic File System?",
      "Amazon EFS is a fully-managed service that makes it easy to set up and scale file storage in the Amazon Cloud. With a few clicks in the AWS Management Console, you can create file systems that are accessible to Amazon EC2 instances via a file system interface (using standard operating system file I/O APIs) and supports full file system access semantics (such as strong consistency and file locking).",
      "Amazon EFS file systems can automatically scale from gigabytes to petabytes of data without needing to provision storage. Tens, hundreds, or even thousands of Amazon EC2 instances can access an Amazon EFS file system at the same time, and Amazon EFS provides consistent performance to each Amazon EC2 instance. Amazon EFS is designed to be highly durable and highly available. With Amazon EFS, there is no minimum fee or setup costs, and you pay only for the storage you use.",
      "Q. What type of locking does Amazon EFS support?",
      "Locking in Amazon EFS follows the NFSv4.1 protocol for advisory locking, and enables your applications to use both whole file and byte range locks."
    ],
    "id": 289,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create individual IAM users for everyone in your organization",
      "B.Configure MFA on the root account and for privileged IAM users",
      "C.Assign IAM users and groups configured with policies granting least privilege access",
      "D.Ensure all users have been assigned and are frequently rotating a password, access ID/secret key, and X.509 certificate "
    ],
    "detail": "Your organization is preparing for a security assessment of your use of AWS. In preparation for this assessment, which two IAM best practices should you consider implementing? Choose 2 answers",
    "explanation": [
      "Correct answer is B & C as the IAM best practices is to provide least privilege and configured MFA for privileged account.",
      "Refer AWS documentation - IAM Best Practices",
      "Option A is wrong as you don't need to create IAM users for all users and can leverage organization AD and use Roles.",
      "Option D is wrong as access keys and certs although should be frequently rotated, they should be generated as per the functionality used by the User."
    ],
    "id": 290,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Generate an access key ID and a secret key, and assign an IAM role with least privilege",
      "B.Create an IAM policy granting access to all services and assign it to the Amazon EC2 instance profile",
      "C.Create an IAM role granting least privilege and assign it to the Amazon EC2 instance profile",
      "D.Generate temporary access keys to grant users temporary access to the Amazon EC2 instance "
    ],
    "detail": "An application that runs on an Amazon EC2 instance must make secure calls to Amazon S3 buckets. Which steps can a Solutions Architect take to ensure that the calls are made without exposing credentials?",
    "explanation": [
      "Correct answer is C as the IAM best practice is to grant least privilege and using IAM role with EC2 instance to prevent exposing credentials.",
      "Refer AWS documentation - IAM Best Practices - Use Roles with EC2",
      "Applications that run on an Amazon EC2 instance need credentials in order to access other AWS services. To provide credentials to the application in a secure way, use IAM roles. A role is an entity that has its own set of permissions, but that isn't a user or group. Roles also don't have their own permanent set of credentials the way IAM users do. In the case of Amazon EC2, IAM dynamically provides temporary credentials to the EC2 instance, and these credentials are automatically rotated for you.",
      "When you launch an EC2 instance, you can specify a role for the instance as a launch parameter. Applications that run on the EC2 instance can use the role's credentials when they access AWS resources. The role's permissions determine what the application is allowed to do.",
      "Option A is wrong as this approach is not recommended.",
      "Option B is wrong as you need an IAM role to be assigned to the instance profile and it should be given least privilege.",
      "Option D is wrong as EC2 instance needs access to the services and not the users."
    ],
    "id": 291,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable AWS CloudTrail to audit all Amazon S3 bucket access.",
      "B.Enable server access logging for all required Amazon S3 buckets",
      "C.Enable the Requester Pays option to track access via AWS Billing",
      "D.Enable Amazon S3 event notifications for Put and Post. "
    ],
    "detail": "A customer wants to track access to their Amazon Simple Storage Service (S3) buckets and also use this information for their internal security and access audits. Which of the following will meet the Customer requirement?",
    "explanation": [
      "Correct answer is B",
      "In order to track requests for access to your bucket, you can enable access logging. Each access log record provides details about a single access request, such as the requester, bucket name, request time, request action, response status, and error code, if any. Access log information can be useful in security and access audits",
      "Refer to AWS documentation for S3 Server logs",
      "Option A is wrong as CloudTrail would only give information for the API calls to S3 and not the individual access information",
      "Option C is wrong as it only helps handle billing if you want the user to pay for the object access",
      "Option D is wrong as event notifications does not cover all the information"
    ],
    "id": 292,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Configure web server VPC security groups to allow traffic from your customers’ IPs",
      "B.Configure your web servers to filter traffic based on the ALB’s \"X-forwarded-for\" header",
      "C.Configure your web servers to filter traffic based on the ALB’s \"Proxy Protocol\" header",
      "D.Configure ELB security groups to allow traffic from your customers’ IPs and deny all outbound traffic",
      "E.Configure a VPC NACL to allow web traffic from your customers’ IPs and deny all outbound traffic "
    ],
    "detail": "You have a business-to-business web application running in a VPC consisting of an Application Load Balancer (ALB), application servers and a database. Your web application should only accept traffic from predefined customer IP addresses. Which two options meet this security requirement? Choose 2 answers",
    "explanation": [
      "Correct answers are B & D as",
      "Option B as ALB can be configured with X-forwarded-for header to pass the actual client address to the webserver which can then do the filtering.",
      "Refer AWS documentation - ELB X Forwarded For",
      "Option D as ELB security group can be directly configured for security group rules to allow traffic from the customers IP address.",
      "Option A is wrong as the web servers do not accept traffic from Customers but from the ELB. So, it should be using X-Forward-for header which can give you the actual customer IP address and Security groups with just the customer IP address and deny all outbound as it is stateful.",
      "Option C is wrong Proxy Protocol is for TCP/SSL listener which ALB does not support.",
      "Option E is wrong as It should not be NACL cause even through NACL can be configured to allow web traffic from Customer IPs it should still allow Outbound traffic on ephemeral ports."
    ],
    "id": 293,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Application Load Balancer",
      "B.Amazon CloudFront ",
      "C.Amazon Route 53 ",
      "D.AWS Classic Load Balancer "
    ],
    "detail": "An application tier currently hosts two web services on the same set of instances, listening on different ports. Which AWS service should a solutions architect use to route traffic to the service based on the incoming request?",
    "explanation": [
      "Correct answer is A as ALB allows routing to multiple services hosted on the same instance based on host or path based rules.",
      "Refer AWS documentation - ALB",
      "Using an Application Load Balancer instead of a Classic Load Balancer has the following benefits:",
      "Option B, C & D do not support routing based on port."
    ],
    "id": 294,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Change the Auto Scaling group’s scale out event to scale based on network utilization.",
      "B.Create an Auto Scaling scheduled action to scale out the necessary resources at 8:30 AM every morning.",
      "C.Use Reserved Instances to ensure the system has reserved the right amount of capacity for the scale-up events.",
      "D.Permanently keep a steady state of instances that is needed at 9:00 AM to guarantee available resources, but leverage Spot Instances. "
    ],
    "detail": "A call center application consists of a three-tier application using Auto Scaling groups to automatically scale resources as needed. Users report that every morning at 9:00 AM the system becomes very slow for about 15 minutes. A Solutions Architect determines that a large percentage of the call center staff starts work at 9:00 AM, so Auto Scaling does not have enough time to scale out to meet demand. How can the Architect fix the problem?",
    "explanation": [
      "Correct answer is B as Auto Scaling scheduled actions can help planned and scale for known demand patterns. Also starting the scaling at 8:30 gives ample time to meet the sudden demand at 9:00.",
      "Refer AWS documentation - Scheduled Scaling using AWS Auto Scaling",
      "Scaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application.",
      "Option A is wrong as Auto Scaling does not have enough time to scale out to meet demand even though based on Network utilization.",
      "Option C is wrong as Reserved instances allow only for cost savings, they do not speed up the scale out time which would still be an issue.",
      "Option D is wrong as Spot instances do not guarantee availability and can be terminated any time."
    ],
    "id": 295,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.ELB SSL termination",
      "B.ELB Using Proxy Protocol v1",
      "C.CloudFront Viewer Protocol Policy set to HTTPS redirection",
      "D.Telling S3 to use AES 256 on the server-side "
    ],
    "detail": "You are creating an application, which stores extremely sensitive financial information. All information in the system must be encrypted at rest and in transit. Which of these is a violation of this policy?",
    "explanation": [
      "Correct answer is A as ELB SSL Termination would terminate the SSL at the ELB side itself and the traffic between ELB and the Instance would be unencrypted.",
      "Refer AWS documentation - ELB Listener Config",
      "Option B is wrong as ELB proxy protocol would enable complete data in transit encryption from Client to ELB to EC2 instances.",
      "Option C is wrong as CloudFront Viewer Protocol would enable data in transit encryption. Viewers can only access your content if they're using HTTPS",
      "Option D is wrong as S3 AES 256 encryption would provide data at rest encryption."
    ],
    "id": 296,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Local secondary index with a partition key of CustomerID and sort key of PurchaseDate; project the TotalPurchaseValue attribute",
      "B.Local secondary index with a partition key of PurchaseDate and sort key of CustomerID; project the TotalPurchaseValue attribute",
      "C.Global secondary index with a partition key of CustomerID and sort key of PurchaseDate; project the TotalPurchaseValue attribute",
      "D.Global secondary index with a partition key of PurchaseDate and sort key of CustomerID; project the TotalPurchaseValue attribute "
    ],
    "detail": "You are creating a DynamoDB table with the following attributes: - PurchaseOrderNumber (partition key) - CustomerID - PurchaseDate - TotalPurchaseValueOne of your applications must retrieve items from the table to calculate the total value of purchases for a particular customer over a date range. What secondary index do you need to add to the table?",
    "explanation": [
      "Correct answer is C as the query is for a particular CustomerID, so a Global Secondary Index is needed for a different partition key. To retrieve only the desired date range, the PurchaseDate must be the sort key. Projecting the TotalPurchaseValue into the index provides all the data needed to satisfy the use case.",
      "Refer AWS documentation - DynamoDB GSI"
    ],
    "id": 297,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use AWS OpsWorks to launch containers in new Amazon EC2 Instances. ",
      "B.Use Amazon ECS and Service Auto Scaling. ",
      "C.Use Spot Instances for orchestration and for scaling containers on existing Amazon EC2 Instances. ",
      "D.Use Auto Scaling groups to launch containers on existing Amazon EC2 Instances. "
    ],
    "detail": "A Company is developing several critical long-running applications hosted on Docker. How should a Solutions Architect design a solution to meet the scalability and orchestration requirements on AWS?",
    "explanation": [
      "Correct answer is B as ECS helps in container orchestration and Service Auto Scaling would help in providing scalability.",
      "Refer AWS documentation - Service Auto Scaling",
      "Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.",
      "Your Amazon ECS service can optionally be configured to use Service Auto Scaling to adjust its desired count up or down in response to CloudWatch alarms. Service Auto Scaling leverages the Application Auto Scaling service to provide this functionality. Service Auto Scaling is available in all regions that support Amazon ECS.",
      "Option A is wrong as OpsWorks does not provide container orchestration",
      "Option C is wrong as Spot instances do not provide container orchestration",
      "Option D is wrong as Auto Scaling groups cannot launch containers."
    ],
    "id": 298,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon RDS",
      "B.Amazon Redshift",
      "C.Amazon DynamoDB",
      "D.Amazon Aurora "
    ],
    "detail": "A Solutions Architect is designing a ride-sharing application. The application needs consistent and single-digit millisecond latency. In addition, the application must integrate with a highly scalable and fully managed database service to track GPS coordinate and user data for all rides. Which database service should the Solutions Architect use to meet these performance requirements?",
    "explanation": [
      "Correct answer is C as DynamoDB provides consistent, single-digit milliseconds managed database service.",
      "Refer AWS documentation - Database Services - DynamoDB",
      "Amazon DynamoDB is designed to deliver consistent, fast performance at any scale for all applications. Average service-side latencies are typically single-digit milliseconds. As your data volumes grow and application performance demands increase, Amazon DynamoDB uses automatic partitioning and SSD technologies to meet your throughput requirements and deliver low latencies at any scale.",
      "Option A is wrong as RDS does not provide single-digit milliseconds performance nor does it is highly scalable.",
      "Option B is wrong as Redshift is a data warehousing solution.",
      "Option D is wrong as Aurora does not meet the single-digit milliseconds. You can further scale read operations using read replicas that have very low 10 ms latency. Also, the question does not mention it has to be relation database."
    ],
    "id": 299,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Direct Connect",
      "B.Placement Groups",
      "C.VPC private subnets",
      "D.EC2 Dedicated Instances",
      "E.Multiple Availability Zones "
    ],
    "detail": "In order to optimize performance for a compute cluster that requires low inter-node latency, which feature in the following list should you use?",
    "explanation": [
      "Correct answer is B as placement groups help have instances close to each other providing low inter node latency.",
      "A placement group is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both"
    ],
    "id": 300,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Object lifecycle and service access logging",
      "B.Object versioning and Multi-factor authentication",
      "C.Access controls and server-side encryption",
      "D.Website hosting and Amazon S3 policies "
    ],
    "detail": "Which set of Amazon S3 features helps to prevent and recover from accidental data loss?",
    "explanation": [
      "Correct answer is B as Object Versioning will help to recover data in case of accidental deletion while MFA provides and additional layer to security before deletion.",
      "Option A is wrong as life cycle is for object transition while server access logs help in audits, but none help prevent or recover data loss.",
      "Option C is wrong as ACLs will only restrict access and SSE helps protect data at rest, but none help recover data",
      "Option Dis wrong as S3 policies will only restrict access and website hosting is irrelevant and none help recover data"
    ],
    "id": 301,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create a new peering connection Between Prod and Dev along with appropriate routes.",
      "B.Create a new entry to Prod in the Dev route table using the peering connection as the target.",
      "C.Attach a second gateway to Dev. Add a new entry in the Prod route table identifying the gateway as the target.",
      "D.The VPCs have non-overlapping CIDR blocks in the same account. The route tables contain local routes for all VPCs. "
    ],
    "detail": "A company has an AWS account that contains three VPCs (Dev, Test, and Prod) in the same region. Test is peered to both Prod and Dev. All VPCs have non-overlapping CIDR blocks. The company wants to push minor code releases from Dev to Prod to speed up time to market. Which of the following options helps the company accomplish this?",
    "explanation": [
      "Correct answer is A as VPC peering is not transitive, a new peering connection needs to be created between Dev and Prod for the push to happen",
      "Refer AWS documentation - VPC Peering"
    ],
    "id": 302,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Access the data through an Internet Gateway.",
      "B.Access the data through a VPN connection.",
      "C.Access the data through a VPC endpoint for Amazon S3.",
      "D.Access the data through a NAT Gateway. "
    ],
    "detail": "An application running on EC2 instances processes sensitive information stored on Amazon S3. The information is accessed over the Internet. The security team is concerned that the Internet connectivity to Amazon S3 is a security risk. Which solution will resolve the security concern?",
    "explanation": [
      "Correct answer is C as VPC endpoints allows EC2 instances to access DynamoDB without traversing through internet.",
      "Refer AWS documentation - VPC Endpoints",
      "A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.",
      "Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components that allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.",
      "Option A and D are wrong as NAT Gateways and Internet Gateways route traffic over the Internet to the public endpoint for DynamoDB.",
      "Option B is wrong as there is no way to connect to DynamoDB via VPN."
    ],
    "id": 303,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Implement an Amazon API Gateway to serve as the HTTP endpoint , Have the API Gateway trigger an AWS Lambda function to process the messages, and save the results to an Amazon DynamoDB table.",
      "B.Create an Amazon EC2 instance to serve as the HTTP endpoint and to process the messages. Save the results to Amazon S3 for the Data Analysis team to download.",
      "C.Use Amazon Route 53 to direct incoming sensor messages to a Lambda function to process the message and save the results to an Amazon DynamoDB table.",
      "D.Use AWS Direct Connect to connect sensors to DynamoDB so that data can be written directly to a DynamoDB table where it can be accessed by the Data Analysis team. "
    ],
    "detail": "A retail company has sensors placed in its physical retail stores. The sensors send messages over HTTP when customers interact with in-store product. A Solutions Architect needs to implement a system for processing those sensor messages, the results must be available for the Data Analysis team. Which scalable architecture should be used to meet these requirements?",
    "explanation": [
      "Correct answer is A as API Gateway with Lambda can provide a scalable HTTP endpoint for the data capture and DynamoDB can help store the results for Data Analysis team.",
      "Option B is wrong as a single EC2 instance is not scalable.",
      "Option C is wrong as Route 53 alone cannot route the messages to an Lambda function.",
      "Option D is wrong as Direct Connect is a cloud service solution that makes it easy to create special network connections from your location to AWS. It cannot help connect sensors directly to DynamoDB."
    ],
    "id": 304,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Provision DynamoDB tables across a minimum of two Availability Zones",
      "B.Provision the EC2 instances evenly across a minimum of two AZ in two regions",
      "C.Provision the EC2 instances evenly across a minimum of two AZ in a single region",
      "D.Provision the ELB to distribute connections across multiple AZ "
    ],
    "detail": "A workload in an Amazon VPC consists of an Elastic Load Balancer that distributes incoming requests across a fleet of six Amazon EC2 instances. Each instance stores and retrieves data from an Amazon DynamoDB table. Which of the following provisions will ensure that this workload is highly available?",
    "explanation": [
      "Correct answer is C as the application can be made highly available by placing the instances across 2 AZs in a single region.",
      "Refer AWS documentation - EC2 Increase Availability",
      "Suppose that you start out running your app or website on a single EC2 instance, and over time, traffic increases to the point that you require more than one instance to meet the demand. You can launch multiple EC2 instances from your AMI and then use Elastic Load Balancing to distribute incoming traffic for your application across these EC2 instances. This increases the availability of your application. \nPlacing your instances in multiple Availability Zones also improves the fault tolerance in your application. If one Availability Zone experiences an outage, traffic is routed to the other Availability Zone.",
      "Option A is wrong as DynamoDB is AWS managed highly available service.",
      "Option B is wrong as ELB cannot route traffic across regions.",
      "Option D is wrong as ELB distributes load across AZs, depending upon the instances attached."
    ],
    "id": 305,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create a load balancer, and register the Amazon EC2 instance with it",
      "B.Create a CloudFront distribution, and configure the Amazon EC2 instance as the origin",
      "C.Create an Auto Scaling group from the instance using the CreateAutoScalingGroup action",
      "D.Create a launch configuration from the instance using the CreateLaunchConfiguration action "
    ],
    "detail": "You have a content management system running on an Amazon EC2 instance that is approaching 100% CPU utilization. Which option will reduce load on the Amazon EC2 instance?",
    "explanation": [
      "Correct answer is C as Auto Scaling would help scale and reduce the load on the instances",
      "Option D is wrong as launch configuration is just a template and creating a template does not help.",
      "Option A is wrong as creating ELB is only for load balancing over instances, and would still direct the traffic to the underlying EC2 instances.",
      "Option B is wrong as there is no indicate where is the read only system and if using CloudFront would help reduce the load. Else, CloudFront would too direct the traffic to the underlying origin which is the EC2 instance"
    ],
    "id": 306,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Company could start using Gateway Cached Volumes.",
      "B.Company could start using Gateway Stored Volumes.",
      "C.Company could start using the Simple Storage Service.",
      "D.Company could start using Amazon Glacier. "
    ],
    "detail": "A company has a lot of data hosted on their On-premise infrastructure. Running out of storage space, the company wants a quick win solution using AWS. Which of the following would allow easy extension of their data infrastructure to AWS?",
    "explanation": [
      "Correct answer is A as Storage Gateway Cached volumes help store the data to AWS, while providing low latency access to the frequently accessed data.",
      "Refer AWS documentation - Storage Gateway FAQs",
      "The volume gateway provides block storage to your applications using the iSCSI protocol. Data on the volumes is stored in Amazon S3. To access your iSCSI volumes in AWS, you can take EBS snapshots which can be used to create EBS volumes.",
      "The volume gateway represents the family of gateways that support block-based volumes, previously referred to as gateway-cached and gateway-stored modes.",
      "In the cached volume mode, your data is stored in Amazon S3 and a cache of the frequently accessed data is maintained locally by the gateway. With this mode, you can achieve cost savings on primary storage, and minimize the need to scale your storage on-premises, while retaining low-latency access to your most used data.",
      "In the stored volume mode, data is stored on your local storage with volumes backed up asynchronously as Amazon EBS snapshots stored in Amazon S3. This provides durable and inexpensive off-site backups. You can recover these backups locally to your gateway or in-cloud to Amazon EC2, for example, if you need replacement capacity for disaster recovery."
    ],
    "id": 307,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Using security groups that reference the security groups of the other application.",
      "B.Using security groups that reference the application servers IP address. ",
      "C.Using Network Access Control Lists to allow/deny traffic based on application IP address. ",
      "D.Migrating the applications to separate subnets from each other. "
    ],
    "detail": "Two Auto Scaling applications, Application A and Application B currently run within a shared set of subnets. A solution architect wants to make sure that Application A can make request to Application B, but Application B should be denied from making request to Application A. Which is the SIMPLEST solution to achieve this policy?",
    "explanation": [
      "Correct answer is A as the instances are launched using Auto Scaling the IPs can change and it would be best to control the access by referencing the security groups.",
      "Refer AWS documentation - VPC Security Groups",
      "A \nsecurity group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC could be assigned to a different set of security groups. If you don't specify a particular group at launch time, the instance is automatically assigned to the default security group for the VPC.",
      "For each security group, you add \nrules that control the inbound traffic to instances, and a separate set of rules that control the outbound traffic. This section describes the basic things you need to know about security groups for your VPC and their rules.",
      "Instances associated with a security group can't talk to each other unless you add rules allowing it",
      "Option B and C are wrong as the IPs can change with auto scaling actions.",
      "Option D is wrong as migrating the applications to different subnets does not control the access between the applications."
    ],
    "id": 308,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Adding a bucket policy on the S3 bucket.",
      "B.Configuring lifecycle configuration rules on the S3 bucket.",
      "C.Creating an IAM policy for the S3 bucket.",
      "D.Enabling CORS on the S3 bucket. "
    ],
    "detail": "An application saves the logs to an S3 bucket. A user wants to keep the logs for one month for troubleshooting purposes, and then purge the logs. What feature will enable this?",
    "explanation": [
      "Correct answer is B as S3 allows lifecycle management rules to be defined, that can execute expiration actions to delete the objects once they expire.",
      "Refer AWS documentation - S3 Object Lifecycle Management",
      "Expiration actions—Define when objects expire. Amazon S3 deletes expired objects on your behalf.",
      "The lifecycle expiration costs depend on when you choose to expire objects.",
      "Option A and C are wrong as Bucket policies and IAM define access to objects in an S3 bucket.",
      "Option D is wrong as CORS enables clients in one domain to interact with resources in a different domain."
    ],
    "id": 309,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS ElastiCache Memcached",
      "B.Amazon Simple Storage Service",
      "C.Amazon EC2 instance storage",
      "D.Amazon DynamoDB "
    ],
    "detail": "You are configuring your company’s application to use Auto Scaling and need to move user state information. Which of the following AWS services provides a shared data store with durability and low latency?",
    "explanation": [
      "Correct answer is D",
      "Q: How does Amazon DynamoDB achieve high uptime and durability?",
      "To achieve high uptime and durability, Amazon DynamoDB synchronously replicates data across three facilities within an AWS Region.",
      "Option A is wrong as Memcached does not allow writes as well as its not persistent and hence not durable",
      "Option B is wrong as S3 although is durable, does not provide low latency access",
      "Option C is wrong as instance store is not durable as the data is available only for the lifetime of the instance it is attached to."
    ],
    "id": 310,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Importing data and optimizing queries",
      "B.Installing and periodically patching the database software",
      "C.Creating and maintaining automated database backups with a point-in-time recovery of up to five minutes",
      "D.Creating and maintaining automated database backups in compliance with regulatory long-term retention requirements "
    ],
    "detail": "When working with Amazon RDS, by default AWS is responsible for implementing which two management-related activities? (Pick 2 correct answers)",
    "explanation": [
      "Correct answers are B & C",
      "Refer AWS documentation - RDS FAQs & RDS PIT",
      "Once your database is up and running, Amazon RDS automates common administrative tasks such as performing backups and patching the software that powers your database.",
      "Amazon RDS automated backup feature automatically creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just individual databases. You can restore to any point in time during your backup retention period. To determine the latest restorable time for a DB instance, use the AWS CLI describe-db-instances command and look at the value returned in the LatestRestorableTime field for the DB instance. The latest restorable time for a DB instance is typically within 5 minutes of the current time.",
      "Option A is wrong as it is user's responsibility",
      "Option D is wrong as automated backup retention period is maximum 35 days and is not suitable for regulatory requirements. Use manual snapshots instead.",
      "After you create a DB instance, you can modify the backup retention period. You can set the backup retention period to between 1 and 35 days. You can also set the backup retention period to 0, which disables automated backups."
    ],
    "id": 311,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Auto Scaling ",
      "B.CloudFront",
      "C.Elastic Load Balancer",
      "D.WAF "
    ],
    "detail": "A company is hosting an application on a single EC2 instance. The users are accessing the instance using the host name. The Company added a new instance to host the same application but do not want the user to make a choice to access the application. How can the company provide user a single access point?",
    "explanation": [
      "Correct answer is C as Elastic Load Balancer can help provide a single access point to the EC2 instances.",
      "Refer AWS documentation - ELB",
      "A load balancer accepts incoming traffic from clients and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. When the load balancer detects an unhealthy target, it stops routing traffic to that target, and then resumes routing traffic to that target when it detects that the target is healthy again.",
      "Option A is wrong as Auto Scaling helps in scaling but would not provide a single access point",
      "Option B is wrong as CloudFront would help caching but would not provide a single access point",
      "Option D is wrong as WAF is to provide firewall but would not provide a single access point"
    ],
    "id": 312,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create separate Target Groups, create a classic Load Balancer and attach the different Target Groups",
      "B.Use the SQS Queue to store the videos which need to be directed to the relative EC2 Instances",
      "C.Create separate Target Groups, create an Application Load Balancer and attach the different Target Groups",
      "D.Use Placement Groups to direct the requests for the videos to the set of EC2 Instances in that placement Groups. "
    ],
    "detail": "You have a requirement to host a web application using EC2 Instances in AWS. You need to have high availability built for your application. You also want to ensure that requests to the relative URL /video/* is directed to a set of EC2 Instances for processing. Which of the following can be used to fulfil this requirement?",
    "explanation": [
      "Correct answer is C as Application Load Balancer supports path based routing. Classic Load Balancer does not support it.",
      "Refer AWS documentation - Application Load Balancer",
      "Support for path-based routing. You can configure rules for your listener that forward requests based on the URL in the request. This enables you to structure your application as smaller services, and route requests to the correct service based on the content of the URL."
    ],
    "id": 313,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Implement Amazon ElastiCache to improve database performance and remove the need to scale the read/write units.",
      "B.Implement Amazon DynamoDB Accelerator to improve database performance and remove the need to scale the read/write units.",
      "C.Use a scheduled job to scale out EC2 before 9:00 a.m. on Monday and to scale down after 9:30 a.m.",
      "D.Use Amazon CloudFront to cache web request and reduce the load on EC2 and DynamoDB "
    ],
    "detail": "A university is running an internal web application on AWS that students can access from the university network to check their exam results. The web application runs on Amazon EC2 instances and pulls results from an Amazon DynamoDB table. Auto Scaling is currently configured to add a new web server when CPU greater than 80% for 5 minutes. DynamoDB is configured to increase both read and write capacity units by five when utilization is greater than 80%. Exam are released at 9:00 a.m., each Monday, and 80% of students attempt to access their unique results within the first 30 minutes. Despite Auto Scaling enabled, students are complaining of slow response times and errors when they view the site. There are no performance complaints after 9:30 a.m. Which recommendation should a Solutions Architect make to improve performance in a cost-effective manner?",
    "explanation": [
      "Correct answer is C as the pattern of the traffic is known and the configured dynamic scaling is not able to meet the sudden demands with speed, Scheduled scaling is best suited to scale out before 9:00 a.m. and scale in after 9:30 a.m.",
      "Refer AWS documentation - Auto Scaling Scheduled Scaling",
      "Scaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application",
      "Option A, B & D are wrong as the access is related to unique results per student, CloudFront, ElastiCache and DAX would not be of much help."
    ],
    "id": 314,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Elastic Load Balancing request routing",
      "B.An Amazon Route 53 weighted routing policy",
      "C.Elastic Load Balancing cross-zone load balancing",
      "D.An Amazon Route 53 latency routing policy "
    ],
    "detail": "Which of the following features ensures even distribution of traffic to Amazon EC2 instances in multiple Availability Zones registered with a load balancer?",
    "explanation": [
      "Correct answer is C",
      "Refer AWS documentation - ELB Cross Zone Load Balancing",
      "Cross-zone load balancing reduces the need to maintain equivalent numbers of instances in each enabled Availability Zone, and improves your application's ability to handle the loss of one or more instances. However, we still recommend that you maintain approximately equivalent numbers of instances in each enabled Availability Zone for higher fault tolerance.",
      "Option B & D are wrong as Route 53 routing policy can help route traffic to ELB or instances on the basis of latency or weight."
    ],
    "id": 315,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon ElastiCache to provide a caching layer",
      "B.Use a Lambda function to make concurrent request for caching",
      "C.Use Amazon DynamoDB Accelerator (DAX) to provide a caching layer",
      "D.Obtain reserved Capacity for Amazon DynamoDB to manage the increased number of queries "
    ],
    "detail": "A company has a Node.js application running on Amazon EC2 that currently retrieves data for customers from a DynamoDB table. The company is seeing many repeat queries for the same items, and the number of queries is continuing to increase as the application gains popularity. What solution will reduce the number of read capacity units (RCUs) required while minimizing the amount of refactoring that must be done to the application?",
    "explanation": [
      "Correct answer is C as the queries are repeated, DynamoDB Accelerator can help cache the results from DynamoDB and can help improve performance and reduce load and cost.",
      "Refer AWS documentation - DynamoDB DAX",
      "Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.",
      "Option A is wrong as ElastiCache does not directly integrate with DynamoDB.",
      "Option B is wrong as there needs to be a caching solution.",
      "Option D is wrong as it does not reduce the RCUs and would increase the cost as well."
    ],
    "id": 316,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Store the files in Amazon EBS and create a Lifecycle Policy to remove files after 3 months.",
      "B.Store the files in Amazon S3 and create a Lifecycle Policy to remove files after 3 months.",
      "C.Store the files in Amazon Glacier and create a Lifecycle Policy to remove files after 3 months.",
      "D.Store the files in Amazon EFS and create a Lifecycle Policy to remove files after 3 months. "
    ],
    "detail": "A Company is designing a highly scalable system to track records. These records must remain available for immediate download for up to three months and then must be deleted. What is the most cost effective solution?",
    "explanation": [
      "Correct answer is B as S3 with lifecycle policies can provide a scalable and cost effective solution.",
      "Refer AWS documentation - S3 Object Lifecycle Management",
      "To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A \nlifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:",
      "Option A and D are wrong as EBS and EFS are not cost effective and do not have lifecycle policies",
      "Option C is wrong as Glacier is not ideal solution for immediate access of data and does not have lifecycle policy"
    ],
    "id": 317,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Step Functions",
      "B.AWS Lambda",
      "C.Amazon SNS",
      "D.Amazon SQS "
    ],
    "detail": "A Solution Architect is designing a three-tier web application that will allow customers to upload pictures from a mobile application. The application will then generate a thumbnail of the picture and return a message to the user confirming that the image was successfully uploaded. Generation of the thumbnail may take up to 5 seconds. To provide a sub-second response time to the customers uploading the images, the solutions architect wants to separate the web tier from the application tier. Which service would allow the presentation tier to asynchronously dispatch the request to the application tier?",
    "explanation": [
      "Correct answer is D as SQS helps create a decoupled architecture, which can help to provide a quick response without the web tier having to wait for the thumbnail generation.",
      "Refer AWS documentation - SQS",
      "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.",
      "Option A and B are wrong as Step Functions & Lambda does not decouple the architecture.",
      "Option C is wrong as even though SNS is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. It cannot be used alone and would need SQS."
    ],
    "id": 318,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Kinesis Stream ",
      "B.Amazon SQS standard queue ",
      "C.Amazon SQS FIFO queue ",
      "D.AWS CloudTrail trail "
    ],
    "detail": "A company’s website receives 50000 request each second, and the company wants to use multiple applications to analyze the navigation patterns of the users on their website so that the experience can be personalized. What can a Solutions Architect use to collect page clicks for the website and process them sequentially for each user?",
    "explanation": [
      "Correct answer is A as Kinesis streams provides ability to consume massive data and process sequentially.",
      "Refer AWS documentation - Kinesis Streams FAQs",
      "Q: What is Amazon Kinesis Data Streams?",
      "Amazon Kinesis Data Streams enables you to build custom applications that process or analyze streaming data for specialized needs. You can continuously add various types of data such as clickstreams, application logs, and social media to an Amazon Kinesis data stream from hundreds of thousands of sources. Within seconds, the data will be available for your Amazon Kinesis Applications to read and process from the stream.",
      "Q: How does Amazon Kinesis Data Streams differ from Amazon SQS?",
      "Amazon Kinesis Data Streams enables real-time processing of streaming big data. It provides ordering of records, as well as the ability to read and/or replay records in the same order to multiple Amazon Kinesis Applications. The Amazon Kinesis Client Library (KCL) delivers all records for a given partition key to the same record processor, making it easier to build multiple applications reading from the same Amazon Kinesis data stream (for example, to perform counting, aggregation, and filtering).",
      "Option B is wrong as SQS standard queue does not guarantee order.",
      "Option C is wrong as SQS FIFO, although provides order, the message cannot be consumed at a high rate. FIFO queues support up to 300 messages per second and 3000 with batching.",
      "Option D is wrong as CloudTrail is for governance and auditing."
    ],
    "id": 319,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Your application does not issue a delete command to the SQS queue after processing the message",
      "B.You can only have one EC2 instance polling the SQS queue at a time",
      "C.This is expected behavior when using short polling because SQS does not guarantee that there will not be duplicate messages processed",
      "D.This is expected behavior when using long polling because SQS does not guarantee that there will not be duplicate messages processed "
    ],
    "detail": "You design an application that checks for new items in an S3 bucket once per hour. If new items exist, a message is added to an SQS queue. You have several EC2 instances which retrieve messages from the SQS queue, parse the file, and send you an email containing the relevant information from the file. You upload one test file to the bucket, wait a couple hours and find that you have hundreds of emails from the application. What is the most likely cause for this volume of email?",
    "explanation": [
      "Correct answer is A cause if the consumer does not delete the message it would be visible in the queue after the timeout and processed again leading to multiple emails.",
      "Refer AWS documentation - SQS Visibility Timeout",
      "When a consumer receives and processes a message from a queue, the message remains in the queue. Amazon SQS doesn't automatically delete the message: Because it's a distributed system, there is no guarantee that the component will actually receive the message (the connection can break or a component can fail to receive the message). Thus, the consumer must delete the message from the queue after receiving and processing it."
    ],
    "id": 320,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Multi-AZ mode on the RDS instance",
      "B.Use ElastiCache to offload the analytics job data",
      "C.Create RDS Read-Replicas for the analytics work",
      "D.Run the RDS instance on the largest size possible "
    ],
    "detail": "Your business is building a new application that will store its entire customer database on an RDS MySQL database, and will have various applications and users that will query that data for different purposes. Large analytics jobs on the database are likely to cause other applications to not be able to get the query results they need to, before time out. Also, as your data grows, these analytics jobs will start to take more time, increasing the negative effect on the other applications. How do you solve the contention issues between these different workloads on the same data?",
    "explanation": [
      "Correct answer is C as Read Replicas can be used to help transfer the load from the master database.",
      "Refer AWS documentation - RDS Read Replica",
      "Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This replication feature makes it easy to elastically scale out beyond the capacity constraints of a single DB Instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances."
    ],
    "id": 321,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EFS",
      "C.Amazon Kinesis",
      "D.Amazon DynamoDB "
    ],
    "detail": "A Solutions Architect is building a new feature using Lambda to create metadata when a user uploads a picture to Amazon S3. All metadata must be indexed. Which AWS service should the Architecture use to store this metadata?",
    "explanation": [
      "Correct answer is D as DynamoDB is an ideal storage option for storing the metadata for objects stored in S3.",
      "Refer AWS whitepaper - Storage Options",
      "Access to Amazon S3 from within Amazon EC2 in the same region is fast. Amazon S3 is designed so that server-side latencies are insignificant relative to Internet latencies. Amazon S3 is also built to scale storage, requests, and users to support a virtually unlimited number of web-scale applications. If you access Amazon S3 using multiple threads, multiple applications, or multiple clients concurrently, total Amazon S3 aggregate throughput will typically scale to rates that far exceed what any single server can generate or consume.",
      "To speed access to relevant data, many developers pair Amazon S3 with a database, such as Amazon DynamoDB or Amazon RDS. Amazon S3 stores the actual information, and the database serves as the repository for associated metadata (e.g., object name, size, keywords, and so on). Metadata in the database can easily be indexed and queried, \nmaking it very efficient to locate an object’s reference via a database query. This result can then be used to pinpoint and then retrieve the object itself from Amazon S3.",
      "Option A, B, C are wrong as S3, Kinesis and EFS is not ideal for storing indexed metadata."
    ],
    "id": 322,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Route 53 record sets with weighted routing policy",
      "B.Route 53 record sets with latency based routing policy",
      "C.Auto Scaling with scheduled scaling actions set",
      "D.Elastic Load Balancing with health checks enabled "
    ],
    "detail": "You have been asked to propose a multi-region deployment of a web-facing application where a controlled portion of your traffic is being processed by an alternate region. Which configuration would achieve that goal?",
    "explanation": [
      "Correct answer is A as Route 53 weighted routing policy can be used to specify the traffic in proportion in a controlled manner. for e.g. 50% across 2 record sets each.",
      "Refer AWS documentation - Route 53 Weighted Routing Policy",
      "Use the weighted routing policy when you have multiple resources that perform the same function (for example, web servers that serve the same website) and you want Amazon Route 53 to route traffic to those resources in proportions that you specify (for example, one quarter to one server and three quarters to the other)."
    ],
    "id": 323,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.VPC peering connection. ",
      "B.NAT gateway ",
      "C.VPC Endpoint. ",
      "D.AWS Direct Connect. "
    ],
    "detail": "A Solutions Architect is designing an Amazon VPC. Applications in the VPC must have private connectivity to Amazon DynamoDB in the same AWS Region. The design should route DynamoDB traffic through.",
    "explanation": [
      "Correct answer is C as VPC Endpoint for DynamoDB helps route the traffic internally through AWS network with no exposure to the public internet.",
      "Refer AWS documentation - DynamoDB VPC Endpoint",
      "VPC endpoints for DynamoDB can alleviate these challenges. A \nVPC endpoint for DynamoDB enables Amazon EC2 instances in your VPC to use their private IP addresses to access DynamoDB with no exposure to the public Internet. Your EC2 instances do not require public IP addresses, and you do not need an Internet gateway, a NAT device, or a virtual private gateway in your VPC. You use endpoint policies to control access to DynamoDB. Traffic between your VPC and the AWS service does not leave the Amazon network.",
      "Option A is wrong as VPC peering connection helps instances in different VPC interact with each other.",
      "Option B is wrong as NAT gateway helps instances in private subnet access Internet.",
      "Option D is wrong as Direct Connect helps dedicated high bandwidth connection between on-premises and AWS network."
    ],
    "id": 324,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Assign Elastic IP addresses to the database instances ",
      "B.Use a NAT Gateway ",
      "C.Allow Internet traffic on the private subnet through the network ACL ",
      "D.Use an egress-only Internet Gateway "
    ],
    "detail": "A Solutions Architect is building a multi-tier website. The web servers will be in a public subnet, and the database servers will be in private subnet. Only the web servers can be accessed from the internet. The database servers must have internet access for software updates. Which solution meets these requirements?",
    "explanation": [
      "Correct answer is B as a NAT Gateway would help keep the database servers in private subnet and provide internet access for downloading the software updates.",
      "Refer AWS documentation - NAT Gateway",
      "You can use a network address translation (NAT) gateway to enable instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances.",
      "Option A is wrong as private instances do not have access to Internet gateway, Elastic IP address does not help.",
      "Option C is wrong as NACLs control only security and do not route internet traffic.",
      "Option D is wrong as an egress-only Internet gateway applies only with IPv6 configured VPCs. It is a horizontally scaled, redundant, and highly available VPC component that allows outbound communication over IPv6 from instances in your VPC to the Internet, and prevents the Internet from initiating an IPv6 connection with your instances."
    ],
    "id": 325,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Move the Internet gateway for the VPC to a private subnet. Route all Internet traffic through the Internet gateway.",
      "B.Create an Amazon EC2 NAT instance with a second elastic network interface (ENI) in a public subnet. Route all private subnet Internet traffic through the NAT gateway",
      "C.Create a NAT gateway in a public subnet route all private subnet Internet traffic through the NAT gateway",
      "D.Create an Auto Scaling group of Amazon EC2 NAT instances in a public subnet. Route all private subnet Internet traffic through the NAT. "
    ],
    "detail": "You have been asked to design a NAT solution for your company’s VPC-based web application. Traffic from the private subnets varies throughout the day from 500 Mbps to spikes of 7 Gbps. What is the most cost-effective and scalable solution?",
    "explanation": [
      "Correct answer is C as the most cost effective and scalable solution is to use the AWS NAT Gateway, which is an AWS managed NAT solution.",
      "Refer AWS documentation - NAT Gateway",
      "You can use a network address translation (NAT) gateway to enable instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances.",
      "You are charged for creating and using a NAT gateway in your account. NAT gateway hourly usage and data processing rates apply. Amazon EC2 charges for data transfer also apply.",
      "Option A is wrong as Internet gateway cannot be moved to private subnet and the traffic from private subnets needs to the route through the Internet gateway via public subnet.",
      "Option B is wrong as a single instance would be able scalable.",
      "Option D is wrong as creating an Auto Scaling group of NAT instances, would cost more depending on the bandwidth provided the instances and number of instances required."
    ],
    "id": 326,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Multi-Factor Authentication for your AWS root account.",
      "B.Assign an IAM role to the Amazon EC2 instance",
      "C.Store the AWS Access Key ID/Secret Access Key combination in software comments.",
      "D.Assign an IAM user to the Amazon EC2 Instance. "
    ],
    "detail": "A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure that AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?",
    "explanation": [
      "Correct answer is B as IAM role can be used by EC2 instance to access other AWS services, which help generate temporary short lived credentials",
      "Refer AWS documentation - IAM Role",
      "An IAM role is similar to a user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. Also, a role does not have any credentials (password or access keys) associated with it. Instead, if a user is assigned to a role, access keys are created dynamically and provided to the user.",
      "Option A is wrong as MFA is to enable two factor authentication",
      "Option C is wrong as storing credentials is not recommended",
      "Option D is wrong as IAM user cannot be assigned to EC2 instance"
    ],
    "id": 327,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C",
      "D",
      "F"
    ],
    "category": "saa",
    "choices": [
      "A.Controlling physical access to compute resources",
      "B.Patch management on the EC2 instance s operating system",
      "C.Encryption of EBS (Elastic Block Storage) volumes",
      "D.Life-cycle management of IAM credentials",
      "E.Decommissioning storage devices",
      "F.Security Group and ACL (Access Control List) settings "
    ],
    "detail": "In AWS, which security aspects are the customer’s responsibilities? Choose 4 answers",
    "explanation": [
      "Correct answers are B, C, D & F",
      "Refer AWS Security Whitepaper",
      "Option A & E are wrong as they are AWS responsibility",
      "Controlling Physical access to data center and facilities.",
      "Physical and Environmental Security",
      "AWS’s data centers are state of the art, utilizing innovative architectural and engineering approaches. Amazon has many years of experience in designing, constructing, and operating large-scale data centers. This experience has been applied to the AWS platform and infrastructure. AWS data centers are housed in nondescript facilities. Physical access is strictly controlled both at the perimeter and at building ingress points by professional security staff utilizing video surveillance, intrusion detection systems, and other electronic means. Authorized staff must pass two-factor authentication a minimum of two times to access data center floors. All visitors and contractors are required to present identification and are signed in and continually escorted by authorized staff."
    ],
    "id": 328,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Sensors probably stopped working on some days, hence data is not sent to the stream.",
      "B.S3 can only store data for a day.",
      "C.Data records are only accessible for a default of 24 hours from the time they are added to a stream.",
      "D.Kinesis streams are not meant to handle IoT related data. "
    ],
    "detail": "IOT sensors monitor the number of bags that are handled at an airport. The data gets sent back to a Kinesis stream with default settings. Every alternate day, the data from the stream is sent to S3 for processing. But it is noticed that S3 is not receiving all of the data that is being sent to the Kinesis stream. What could be the reason for this?",
    "explanation": [
      "Correct answer is C as Kinesis Data Streams stores the data, by default, only for 24 hours. It can be extended up to 168 hours.",
      "Refer AWS documentation - Kinesis Retention",
      "Kinesis Data Streams supports changes to the data record retention period of your stream. A Kinesis data stream is an ordered sequence of data records meant to be written to and read from in real-time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the \nretention period. A Kinesis data stream stores records from 24 hours by default, up to 168 hours."
    ],
    "id": 329,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy two instances in each of three Availability Zones. ",
      "B.Deploy two instances in each of two Availability Zones. ",
      "C.Deploy four instances in each of two Availability Zones. ",
      "D.Deploy one instance in each of three Availability Zones. "
    ],
    "detail": "An application is running on Amazon EC2 instances behind an Application Load Balancer. The Instances run in an auto scaling group across multiple Availability Zones. Four instances are required to handle a predictable traffic load. The Solutions Architect wants to ensure that the operation is fault-tolerant up to the loss of one Availability Zone. Which is the MOST cost-efficient way to meet these requirements?",
    "explanation": [
      "Correct answer is A as 2 instances in 3 AZs would provide the fault tolerance with 4 instances running even if an AZ goes down. It is also cost-effective solution with 6 instances running at a time.",
      "Option B is wrong as it does not provide the fault tolerance with only 2 instances remaining in case of a loss of one AZ.",
      "Option C is wrong as it is not a cost-effective solution with 8 instances running at a time.",
      "Option D is wrong as it does not meet the criteria of 4 instances."
    ],
    "id": 330,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Encrypted data storage",
      "B.CloudTrail for security logs",
      "C.S3 logging",
      "D.Multi Factor Authentication "
    ],
    "detail": "You are consulting for a healthcare company that has strict compliance and auditing requirements. When architecting the application environment on AWS, which services or service features might you enable to take advantage of monitoring to ensure auditing the environment for compliance is easy and follows the strict healthcare compliance requirements? Choose the correct answer",
    "explanation": [
      "Correct answer is B as CloudTrail helps capture the activity and also ensure compliance.",
      "Refer AWS documentation - CloudTrail",
      "With AWS CloudTrail, simplify your compliance audits by automatically recording and storing activity logs for actions made within your AWS account. Integration with Amazon CloudWatch Logs provides a convenient way to search through log data, identify out-of-compliance events, accelerate incident investigations, and expedite responses to auditor requests."
    ],
    "id": 331,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Elastic Load Balancer to place in front of the EC2 instances. Set an appropriate health check on each ELB.",
      "B.Establish VPN Connections between the instances in each region. Rely on BGP to failover in the case of a region wide connectivity outage",
      "C.Create a Route 53 Latency Based Routing Record Set that resolves to an Elastic Load Balancer in each region. Set an appropriate health check on each ELB.",
      "D.Create a Route 53 Latency Based Routing Record Set that resolves to Elastic Load Balancers in each region and has the Evaluate Target Health flag set to true. "
    ],
    "detail": "Your web site is hosted on 10 EC2 instances in 5 regions around the globe with 2 instances per region. How could you configure your site to maintain site availability with minimum downtime if one of the 5 regions was to lose network connectivity for extended period of time?",
    "explanation": [
      "Correct answer is D as a Route 53 latency based routing can be configured with ELB in each region. If a region goes down, Route 53 would automatically redirect the traffic to the region with least latency.",
      "With latency-based routing, Amazon Route 53 can direct your users to the lowest-latency AWS endpoint available. For example, you might associate a DNS name like &lt;a href=\"http://www.example.com\"&gt;www.example.com&lt;/a&gt; with an ELB Classic or Application Load Balancer, or with Amazon EC2 instances or Elastic IP addresses that are hosted in the US East (Ohio) and EU (Ireland) regions",
      "Refer AWS documentation - Latency routing, AWS Blog for Multi Region Latency Routing & Route 53 - Evaluate target health"
    ],
    "id": 332,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon DynamoDB",
      "B.Amazon Redshift",
      "C.Amazon S3",
      "D.Amazon RDS "
    ],
    "detail": "You’ve been tasked with choosing a datastore to persist GPS coordinates for a new app. The service needs consistent, single-digit millisecond latency at any scale. In order to support future growth, the datastore must also support cross-region replication. Which AWS service meets your requirements?",
    "explanation": [
      "Correct answer is A as DynamoDB provides a highly scalable, consistent, low latency datastore with a cross region replication ability.",
      "Refer AWS documentation - DynamoDB",
      "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity, makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.",
      "Refer AWS documentation - DynamoDB Cross Region Replication",
      "DynamoDB cross-region replication solution uses the Amazon DynamoDB Cross-Region Replication Library. This library uses DynamoDB Streams to keep DynamoDB tables in sync across multiple regions in near real time. When you write to a DynamoDB table in one region, those changes are automatically propagated by the Cross-Region Replication Library to your tables in other regions."
    ],
    "id": 333,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.MySQL Installed on two Amazon EC2 Instances in a single Availability Zone",
      "B.Amazon RDS for MySQL with Multi-AZ",
      "C.Amazon ElastiCache",
      "D.Amazon DynamoDB "
    ],
    "detail": "A company is deploying a new two-tier web application in AWS. The company has limited staff and requires high availability, and the application requires complex queries and table joins. Which configuration provides the solution for the company’s requirements?",
    "explanation": [
      "Correct answer is B as RDS provides the ability to handle complex queries and joins with Multi-AZ which provides High Availability.",
      "Option A is wrong as a single AZ does not provide HA.",
      "Option C is wrong as ElastiCache is more of a caching solution.",
      "Option D is wrong as DynamoDB is not ideal for complex queries and joins."
    ],
    "id": 334,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS",
      "B.Amazon DynamoDB",
      "C.Amazon EC2 Instance Store",
      "D.Amazon SQS "
    ],
    "detail": "You are designing a scalable web application with stateless web servers. Which service or feature is well suited to store user session information?",
    "explanation": [
      "Correct answer is B as DynamoDB provides an ideal option to store user session information and provide scalable low latency access.",
      "Refer AWS Storage Options Whitepaper",
      "DynamoDB is ideal for existing or new applications that need a flexible NoSQL database with low read and write latencies, and the ability to scale storage and throughput up or down as needed without code changes or downtime.",
      "Use cases require a highly available and scalable database because downtime or performance degradation has an immediate negative impact on an organization’s business. for e.g. mobile apps, gaming, digital ad serving, live voting and audience interaction for live events, sensor networks, log ingestion, access control for web-based content, metadata storage for S3 objects, e-commerce shopping carts, and web session management"
    ],
    "id": 335,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Physical security of AWS data centers and facilities",
      "B.Logical security of customer SSH private key material",
      "C.Patching of Amazon Elastic Compute Cloud hypervisors",
      "D.Decommissioning storage devices at end of life",
      "E.Encryption of traffic within a virtual private cloud",
      "F.Access control within a virtual private cloud "
    ],
    "detail": "Which of the following does AWS own under the shared security responsibility model? Choose 3 answers.",
    "explanation": [
      "Correct answers are A, C & D as AWS is responsible for Physical security of AWS data centers, hypervisors and decommissioning of storage devices.",
      "Refer AWS documentation - Shared Responsibility Model",
      "Option B, E and F are wrong as anything with and within the VPC is customer's responsibility like security of keys, VPC, instances and data traffic to VPC and instances."
    ],
    "id": 336,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Apply an Amazon S3 Bucket policy",
      "B.Use Amazon EBS provisioned IOPS",
      "C.Use VPC endpoints for S3",
      "D.Request a service limit increase "
    ],
    "detail": "You have an application running on an Amazon EC2 instance that uploads 10 GB video objects to amazon S3. Video uploads are taking longer than expected inspite of using multipart upload cause of internet bandwidth, resulting in poor application performance. Which action can help improve the upload performance?",
    "explanation": [
      "Correct answer is C as the internet is being used, it can be avoided using an VPC endpoint which will allow the communication to happen within the AWS network.",
      "VPC endpoints for Amazon S3 can alleviate these challenges. A VPC endpoint for Amazon S3 enables Application to use a private IP addresses to access Amazon S3 with no exposure to the public internet. Application does not require public IP addresses, and you don't need an internet gateway, a NAT device, or a virtual private gateway in your VPC. You use endpoint policies to control access to Amazon S3. Traffic between your VPC and the AWS service does not leave the Amazon network.",
      "Option A is wrong as S3 bucket policy is for access control.",
      "Option B is wrong as EBS provisioned IOPS would help improve the network performance between EC2 instance and EBS volumes.",
      "Option D is wrong as there is no service limit upload."
    ],
    "id": 337,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A. ELB DNS records Time to Live is set too high",
      "B.ELB is configured to send requests with previously established sessions",
      "C.Website uses CloudFront which is keeping sessions alive",
      "D.New Instances are not being added to the ELB during the Auto Scaling cool down period "
    ],
    "detail": "A customer has an online store that uses the cookie-based sessions to track logged-in customers. It is deployed on AWS using ELB and autoscaling. When the load increases, Auto scaling automatically launches new web servers, but the load on the web servers do not decrease. This causes the customers a poor experience. What could be causing the issue?",
    "explanation": [
      "Correct answer is B as sticky sessions on ELB can cause the requests being routed to the same server, not utilizing the newly added servers.",
      "Refer AWS documentation - ELB Sticky Sessions",
      "By default, a Classic Load Balancer routes each request independently to the registered instance with the smallest load. However, you can use the sticky session feature (also known as session affinity), which enables the load balancer to bind a user's session to a specific instance. This ensures that all requests from the user during the session are sent to the same instance."
    ],
    "id": 338,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an AD policy to modify Windows Firewall settings on all hosts in the VPC to deny access from the IP address block",
      "B.Modify the Network ACLs associated with all public subnets in the VPC to deny access from the IP address block",
      "C.Add a rule to all of the VPC 5 Security Groups to deny access from the IP address block",
      "D.Modify the Windows Firewall settings on all Amazon Machine Images (AMIs) that your organization uses in that VPC to deny access from the IP address block "
    ],
    "detail": "You are currently hosting multiple applications in a VPC and have logged numerous port scans coming in from a specific IP address block. Your security team has requested that all access from the offending IP address block be denied for the next 24 hours. Which of the following is the best method to quickly and temporarily deny access from the specified IP address block?",
    "explanation": [
      "Correct answer is B as NACLs can be used to deny access from the IP address which security group cannot. Also, NACL are working at Subnet level, while Security Groups work at instance level. So, the port scans will not arrive at the Security Groups.",
      "Refer AWS documentation - VPC Security"
    ],
    "id": 339,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Glacier",
      "B.S3-Reduced Redundancy Storage",
      "C.EBS backed storage connected to EC2",
      "D.AWS CloudFront "
    ],
    "detail": "Your company needs to keep all system logs for audit purposes, and may rarely need to retrieve these logs for audit purposes and present them upon request within a week. The logs are 10TB in size. Which option would be the most cost-effective one for storing all these system logs?",
    "explanation": [
      "Correct answer is A as Glacier is the most cost effective archival solution.",
      "Refer AWS documentation - Glacier FAQs",
      "Q: What is Amazon Glacier?",
      "Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and flexible storage for data backup and archival. With Amazon Glacier, customers can reliably store their data for as little as $0.004 per gigabyte per month. Amazon Glacier enables customers to offload the administrative burdens of operating and scaling storage to AWS, so that they don’t have to worry about capacity planning, hardware provisioning, data replication, hardware failure detection and repair, or time-consuming hardware migrations."
    ],
    "id": 340,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Directory Service AD Connector",
      "B.AWS Directory Service Simple AD",
      "C.AWS Identity and Access Management groups",
      "D.AWS Identity and Access Management roles",
      "E.AWS Identity and Access Management users "
    ],
    "detail": "A company is preparing to give AWS Management Console access to developers. Company policy mandates identity federation and role-based access control. Roles are currently assigned using groups in the corporate Active Directory. What combination of the following will give developers access to the AWS console? Choose 2 answers",
    "explanation": [
      "Correct answers are A & D as AD connector is required to connect to on-premises Active Directory and IAM Role can be used for Identity Provider and Federation.",
      "Refer AWS blog - How to connect on-premises active directory using AD Connector",
      "AD Connector is a directory gateway with which you can redirect directory requests to your on-premises Microsoft Active Directory without caching any information in the cloud",
      "Your end users and IT administrators can use their existing corporate credentials to log on to AWS applications such as Amazon WorkSpaces, Amazon WorkDocs, or Amazon WorkMail.",
      "You can manage AWS resources like Amazon EC2 instances or Amazon S3 buckets through IAM role-based access to the AWS Management Console.",
      "Option B is wrong as Simple AD is a standalone AD setup and does not allow connection to the on-premises AD.",
      "Option C & E are wrong as users and groups do not work."
    ],
    "id": 341,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use an Amazon Redshift cluster ",
      "B.Use Amazon CloudFront in front of RDS",
      "C.Use Amazon ElastiCache in front of RDS",
      "D.Use Amazon DynamoDB to store the most queried information "
    ],
    "detail": "An application is used by thousands of concurrent users. Eighty percent of users access the same content inside the Amazon RDS multi-AZ database. How can the overall performance of the database queries be improved?",
    "explanation": [
      "Correct answer is C as ElastiCache integrates seamlessly with RDS and can help cache the results from database for the repeated queries and reduce the load on the RDS instance.",
      "Refer AWS Storage Options Whitepaper",
      "ElastiCache improves application performance by storing critical pieces of data in memory for low-latency access. It is frequently used as a database front end in read-heavy applications, improving performance and reducing the load on the database by caching the results of I/O-intensive queries. It is also frequently used to manage web session data, to cache dynamically generated web pages, and to cache results of computationally-intensive calculations, such as the output of recommendation engines. For applications that need more complex data structures than strings, such as lists, sets, hashes, and sorted sets, the Redis engine is often used as an in-memory NoSQL database.",
      "Option A is wrong as Redshift is a fast and scalable data warehouse that makes analyzing your entire data data simple and cost-effective throughout your data warehouse and data lake.",
      "Option B is wrong as CloudFront does not support RDS as origin.",
      "Option D is wrong as DynamoDB is a non-relational database for applications that require high performance on various scales and is not suitable for caching query results."
    ],
    "id": 342,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Attach an Elastic IP address to each Amazon EC2 instance and add a route from the private subnet to the public subnet.",
      "B.Launch a NAT gateway in the public subnet and add a route to it from the private subnet.",
      "C.Launch Amazon EC2 instances in the public subnet and change the security group to allow outbound traffic on port 80",
      "D.Launch a NAT gateway in the private subnet and deploy a NAT instance in the private subnet. "
    ],
    "detail": "A Solutions Architect is designing a web application. The web and application tiers are hosted in private subnets and need to access the internet, but they cannot be accessed from the Internet. Which of the following steps is required?",
    "explanation": [
      "Correct answer is B as to access internet for instances in private subnet, a NAT Gateway must be launched in the public subnet with the traffic routed through it.",
      "Refer AWS documentation - VPC NAT",
      "You can use a NAT device to enable instances in a private subnet to connect to the Internet (for example, for software updates) or other AWS services, but prevent the Internet from initiating connections with the instances. A NAT device forwards traffic from the instances in the private subnet to the Internet or other AWS services, and then sends the response back to the instances. When traffic goes to the Internet, the source IPv4 address is replaced with the NAT device’s address and similarly, when the response traffic goes to those instances, the NAT device translates the address back to those instances’ private IPv4 addresses.",
      "Option A is wrong as Elastic IP address does not enable traffic routing from private to public subnets.",
      "Option C is wrong as EC2 instances can act as NAT instances, however the source/dest flag needs to be disabled and the traffic routed through these instances.",
      "Option D is wrong as NAT Gateway needs to be launched in public subnet with access to Internet Gateway."
    ],
    "id": 343,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.You must use an Amazon ECS-optimized AMI for instances to connect with an Amazon ECS cluster.",
      "B.Amazon ECS does not work with Ubuntu. Only Amazon Linux and Windows instances are supported.",
      "C.The Amazon ECS container agent is not installed and properly configured on the new instances.",
      "D.The instances are of different types. Amazon ECS container instances must all be of the same type. "
    ],
    "detail": "You have launched a set of Amazon ECS container instances using the Ubuntu Server Linux AMI. Your new instances do not appear as resources in your Amazon ECS cluster. What could be causing the problem?",
    "explanation": [
      "Correct answer is C as with non ECS Optimized AMIs the ECS container agent is not installed and needs to installed.",
      "Refer AWS documentation - ECS Container launch Instance",
      "Choose an AMI for your container instance. You can choose the Amazon ECS-optimized AMI, or another operating system, such as CoreOS or Ubuntu. If you do not choose the Amazon ECS-optimized AMI, you must follow the procedures in Installing the Amazon ECS Container Agent."
    ],
    "id": 344,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.All at once deployment",
      "B.Immutable deployment",
      "C.Rolling deployment",
      "D.Linear deployment",
      "E.Blue/Green deployment "
    ],
    "detail": "An organization is using AWS Elastic Beanstalk for a web application. The Developer needs to configure the Elastic Beanstalk environment with deployment methods that will create new instances and deploy code to those instances. Which methods will deploy code ONLY to new instances? Choose 2 answers",
    "explanation": [
      "Correct answer is B & E as immutable and blue/green deployments always deploy the applications on new instances and do not use existing instances.",
      "Refer AWS documentation - Elastic Beanstalk Deployment Strategies",
      "Option A & C are wrong as both of them deploy the application on the existing instances.",
      "Option D is wrong as Linear deployment does not exist for Elastic Beanstalk"
    ],
    "id": 345,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.The user should create a separate IAM user for each mobile application and provide DynamoDB access with it",
      "B.The user should create an IAM role with DynamoDB and EC2 access. Attach the role with EC2 and route all calls from the mobile through EC2",
      "C.The application should use an IAM role with web identity federation which validates calls to DynamoDB with identity providers, such as Google, Amazon, and Facebook",
      "D.Create an IAM Role with DynamoDB access and attach it with the mobile application "
    ],
    "detail": "A user has created a mobile application, which makes calls to DynamoDB to fetch certain data. The application is using the DynamoDB SDK and root account access/secret access key to connect to DynamoDB from mobile. Which of the below mentioned statement is true with respect to the best practice for security in this scenario?",
    "explanation": [
      "Correct answer is C as you can authenticate with any OpenID compliant identity provider and have an IAM role to use temporary credentials.",
      "Option A is wrong as using IAM user which would need hard coding security credentials is not recommended.",
      "Option B is wrong as using EC2 to redirect calls in unnecessary",
      "Option D is wrong as you cannot directly attach a role to the mobile application."
    ],
    "id": 346,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Enable cross-region replication in the Amazon S3 bucket",
      "B.Create a Lambda function for each Availability Zone the application is deployed in.",
      "C.Enable Multi-AZ on the RDS PostgreSQL database.",
      "D.Create a DynamoDB stream for the DynamoDB table. "
    ],
    "detail": "A team has an application that detects new objects being uploaded into an Amazon S3 bucket. The uploads trigger Lambda function to write object metadata into an Amazon DynamoDB table and RDS PostgreSQL database. Which action should the team take to ensure high availability?",
    "explanation": [
      "Correct answer is C as PostgreSQL is a standalone DB instance and needs High Availability which can be provided by Multi-AZ configuration.",
      "Refer AWS documentation - RDS Multi-AZ",
      "Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments. Amazon RDS uses several different technologies to provide failover support. Multi-AZ deployments for Oracle, PostgreSQL, MySQL, and MariaDB DB instances use Amazon's failover technology. SQL Server DB instances use SQL Server Mirroring.",
      "Option A is wrong as S3 provides 99.99% Availability and the data is replicated across multiple facilities.",
      "Option B is wrong as \nAWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.",
      "Option D is wrong as \nDynamoDB takes away one of the main stumbling blocks of scaling databases: the management of database software and the provisioning of the hardware needed to run it. You can deploy a nonrelational database in a matter of minutes. DynamoDB automatically scales throughput capacity to meet workload demands, and partitions and repartitions your data as your table size grows. Also, DynamoDB synchronously replicates data across three facilities in an AWS Region, giving you high availability and data durability."
    ],
    "id": 347,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Apply an Amazon S3 Bucket policy",
      "B.Use Amazon EBS provisioned IOPS",
      "C.Use VPC endpoints for S3",
      "D.Request a service limit increase "
    ],
    "detail": "You have an application running on an Amazon EC2 instance that uploads 10 GB video objects to amazon S3. Video uploads are taking longer than expected inspite of using multipart upload cause of internet bandwidth, resulting in poor application performance. Which action can help improve the upload performance?",
    "explanation": [
      "Correct answer is C as the internet is being used, it can be avoided using an VPC endpoint which will allow the communication to happen within the AWS network.",
      "VPC endpoints for Amazon S3 can alleviate these challenges. A VPC endpoint for Amazon S3 enables Application to use a private IP addresses to access Amazon S3 with no exposure to the public internet. Application does not require public IP addresses, and you don't need an internet gateway, a NAT device, or a virtual private gateway in your VPC. You use endpoint policies to control access to Amazon S3. Traffic between your VPC and the AWS service does not leave the Amazon network.",
      "Option A is wrong as S3 bucket policy is for access control.",
      "Option B is wrong as EBS provisioned IOPS would help improve the network performance between EC2 instance and EBS volumes.",
      "Option D is wrong as there is no service limit upload."
    ],
    "id": 348,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy a NAT instance into the public subnet.",
      "B.Assign an Elastic IP address to the fourth instance",
      "C.Configure a publicly routable IP Address in the host OS of the fourth instance.",
      "D.Modify the routing table for the public subnet. "
    ],
    "detail": "You have an environment that consists of a public subnet using Amazon VPC and 3 instances that are running in this subnet. These three instances can successfully communicate with other hosts on the Internet. You launch a fourth instance in the same subnet, using the same AMI and security group configuration you used for the others, but find that this instance cannot be accessed from the internet. What should you do to enable Internet access?",
    "explanation": [
      "Correct answer is B as the instance needs to either have a public IP or Elastic IP address to be reachable from internet.",
      "Refer AWS documentation - EC2 Internet Connectivity",
      "Option A is wrong as NAT is for instances in private subnet to reach to internet.",
      "Option C is wrong as this configuration is not valid.",
      "Option D is wrong as 3 instances already can be reached from Internet, the route table, security groups and NACLs are fine."
    ],
    "id": 349,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Duplicate the exact application architecture in another region and configure DNS latency-based routing",
      "B.Build out additional capacity to ensure there is no scenario in which the application can fail",
      "C.Enable failover to an on-premise data center",
      "D.Use Route 53 and the failover option to failover to a static S3 website bucket or CloudFront distribution in the event of an issue "
    ],
    "detail": "Your company is posting a big article on the front page of your website tomorrow. It is expected that the demand could potentially overwhelm your infrastructure. In the event of a load failure, how can you set up DNS failover to a static website?",
    "explanation": [
      "Correct answer is D as Route 53 can be configured to failover to a static S3 website or CloudFront in case of an issue.",
      "Refer AWS documentation - Knowledge Center Article Route 53 - S3",
      "DNS Failover pairs up well with Amazon S3s website hosting feature to create a simple, low-cost, and reliable way to deploy a backup website. Of course no one wants their site to go down, but things happen, whether due to deploying bad code, network outages, or other issues, and its helpful to have a backup which gives your customers a good experience in the event that your primary website does go down."
    ],
    "id": 350,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.enable S3 versioning on the bucket",
      "B.access S3 data using only signed URLs",
      "C.disable S3 delete using an IAM bucket policy",
      "D.enable S3 Reduced Redundancy Storage",
      "E.enable Multi-Factor Authentication (MFA) protected access "
    ],
    "detail": "To protect S3 data from both accidental deletion and accidental overwriting, you should",
    "explanation": [
      "Correct answer is A as using Object Versioning. Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite as it maintains the versions of Objects and can be reverted back to."
    ],
    "id": 351,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.A network ACL that allows communication between the two subnets.",
      "B.Both instances are the same instance class and using the same key-pair.",
      "C.That the default route is set to a NAT instance or Internet Gateway (IGW) for them to communicate.",
      "D.Security groups are set to allow the application host to talk to the database on the right port/protocol "
    ],
    "detail": "You have two Elastic Compute Cloud (EC2) instances inside a Virtual Private Cloud (VPC) in the same Availability Zone (AZ) but in different subnets. One instance is running a database and the other instance an application that will interface with the database. You want to confirm that they can talk to each other for your application to work properly. Which two things do we need to confirm in the VPC settings so that these EC2 instances can communicate inside the VPC? Choose 2 answers",
    "explanation": [
      "Correct answers are A & D as NACLs and Security groups can be configured for the instances to communicate with each other.",
      "Option B is wrong as key pair is to login to the instances and would not allow them to communicate.",
      "Option C is wrong as NAT just allows private instances internet access while IGW will not allow access within the VPC but would be routed through internet",
      "Refer AWS documentation - Web DB using Security Groups"
    ],
    "id": 352,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Set up your web app on more EC2 instances and set them behind an Elastic Load Balancer.",
      "B.Set up an ElastiCache in front of the EC2 instance.",
      "C.Set up your web app on more EC2 instances and use Route 53 to route requests accordingly.",
      "D.Set up DynamoDB behind your EC2 Instances. "
    ],
    "detail": "You currently have an EC2 instance hosting a web application. The number of users is expected to increase in the coming months and hence, you need to add more elasticity to your setup. Which of the following methods can help add elasticity to your existing setup? Choose 2 answers",
    "explanation": [
      "Correct answers are A & C as multiple EC2 instances can be used to serve the traffic with ELB or Route 53 acting as the interface.",
      "Refer AWS documentation - Route 53 Routing & ELB",
      "If your application is running on Amazon EC2 instances in two or more Amazon EC2 regions, and if you have more than one Amazon EC2 instance in one or more regions, you can use latency-based routing to route traffic to the correct region and then use weighted records to route traffic to instances within the region based on weights that you specify.",
      "For example, suppose you have three Amazon EC2 instances with Elastic IP addresses in the US East (Ohio) region and you want to distribute requests across all three IPs evenly for users for whom US East (Ohio) is the appropriate region. Just one Amazon EC2 instance is sufficient in the other regions, although you can apply the same technique to many regions at once."
    ],
    "id": 353,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.SQS guarantees the order of the messages.",
      "B.SQS synchronously provides transcoding output.",
      "C.SQS checks the health of the worker instances.",
      "D.SQS helps to facilitate horizontal scaling of encoding tasks "
    ],
    "detail": "A company has a workflow that sends video files from their on-premise system to AWS for transcoding. They use EC2 worker instances that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?",
    "explanation": [
      "Correct answer is D as SQS allows horizontal scaling depending on the work demand",
      "Refer AWS documentation - SQS Throughput"
    ],
    "id": 354,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon SQS",
      "B.Amazon SNS",
      "C.Amazon ECS",
      "D.AWS STS "
    ],
    "detail": "An application relies on messages being sent and received in order. The volume will never exceed more than 300 transactions each second. As a Solution Architect, which service would you recommend?",
    "explanation": [
      "Correct answer is A as SQS FIFO queues can process the messages in order and can handle 300 messages per second or 3000 messages per second when batched.",
      "Refer AWS documentation - SQS FIFO Queues",
      "FIFO (First-In-First-Out) queues are designed to enhance messaging between applications when the order of operations and events is critical, or where duplicates can't be tolerated, for example:",
      "FIFO queues also provide exactly-once processing but have a limited number of transactions per second (TPS):",
      "Option B is wrong as Amazon Simple Notification Service (SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.",
      "Option C is wrong as ECS helps in container orchestration.",
      "Option D is wrong as STS is a security token service to grant temporary credentials"
    ],
    "id": 355,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable CloudTrail for the production VPC",
      "B.Enable VPC Flow Logs for the production VPC",
      "C.Enable both CloudTrail and VPC Flow Logs for the production VPC",
      "D.Enable both CloudTrail and VPC Flow Logs for the AWS account "
    ],
    "detail": "A customer’s security team requires the logging of all network access attempts to Amazon EC2 instances in their production VPC on AWS. Which configuration will meet the security team’s requirement?",
    "explanation": [
      "Correct answer is B as the VPC flow logs needs to be enabled for tracking the access to EC2 instances.",
      "Refer AWS documentation - VPC Flow Logs",
      "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data is stored using Amazon CloudWatch Logs. After you've created a flow log, you can view and retrieve its data in Amazon CloudWatch Logs.",
      "Flow logs can help you with a number of tasks; for example, to troubleshoot why specific traffic is not reaching an instance, which in turn can help you diagnose overly restrictive security group rules. You can also use flow logs as a security tool to monitor the traffic that is reaching your instance",
      "Option A, C & D are wrong as CloudTrail would not help capture access to EC2 instances but only the AWS API calls."
    ],
    "id": 356,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use CloudFront with the on-premises application as the origin",
      "B.Use Route 53 with the on-premises application as the origin",
      "C.Use Application Load Balancer with the on-premises application as the origin",
      "D.User CloudWatch with the on-premises application as the origin "
    ],
    "detail": "A company is hosting a blog web application on-premises mainly hosting their security articles. They want to increase the performance of the application for their global users. As s solution architect, how would be improve the performance?",
    "explanation": [
      "Correct answer is A as CloudFront can help the cache the contents and deliver low latency for global users. CloudFront also works with on-premises as its origin with original content.",
      "Refer AWS documentation - CloudFront Custom Origins",
      "When you create a web distribution, you specify where CloudFront sends requests for the files. CloudFront supports using several AWS resources as origins. For example, you can specify an Amazon S3 buckets or an AWS Elemental MediaStore container, as well as custom origins, such as an Amazon EC2 instance or your own HTTP web server."
    ],
    "id": 357,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Launch Amazon EC2 instances in an Auto Scaling group behind an ELB",
      "B.Store all static files in a Multi-AZ Amazon Aurora database",
      "C.Create a CloudFront distribution pointing to static content in Amazon S3",
      "D.Use Amazon Route 53 to route traffic to the correct region",
      "E.Use Amazon S3 multi-part uploads to improve upload times "
    ],
    "detail": "A Solutions Architect is designing the architecture for a new three-tier web-based e-commerce site that must be available 24/7. Requests are expected to range from 100 to 10000 each minute. Usage can vary depending on time day, holidays, and promotions. The design should be able to handle these volumes, with the ability to handle higher volumes if necessary. How should the Architect design the architecture to ensure the web tier is cost-optimized and can handle the expect traffic? (Select TWO)",
    "explanation": [
      "Correct answer is A & C as ELB with Auto Scaling provides the scaling on demand capability. Caching using CloudFront would help to improve performance and reduce load on the web servers.",
      "Option B is wrong as Aurora is not an ideal storage for static files.",
      "Option D is wrong as Route 53 would help in routing only. It does not help scale or improve performance.",
      "Option E is wrong as S3 multi-uploads only improve upload times and does not help improve web performance."
    ],
    "id": 358,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.AWS OpsWorks",
      "B.Amazon EC2 Elastic Container Service",
      "C.AWS Elastic Beanstalk",
      "D.AWS CloudFormation "
    ],
    "detail": "An organization has a 3-tier architecture. It uses an Apache web server and an application is running on the Docker platform with Amazon RDS on the backend. The organization wants to migrate the application to AWS and does not want to be responsible for deployment, scalability or capacity provisioning of its resources. Which service should be used to meet these requirements?",
    "explanation": [
      "Correct answer is C as Elastic Beanstalk would help deploy the application using docker with RDS, without having to manage underlying infrastructure",
      "Refer AWS documentation - Elastic Beanstalk FAQs",
      "AWS Elastic Beanstalk makes it even easier for developers to quickly deploy and manage applications in the AWS Cloud. Developers simply upload their application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.",
      "Those who want to deploy and manage their applications within minutes in the AWS Cloud. You don’t need experience with cloud computing to get started. AWS Elastic Beanstalk supports Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker web applications.",
      "AWS Elastic Beanstalk uses proven AWS features and services, such as Amazon EC2, Amazon RDS, Elastic Load Balancing, Auto Scaling, Amazon S3, and Amazon SNS, to create an environment that runs your application. The current version of AWS Elastic Beanstalk uses the Amazon Linux AMI or the Windows Server 2012 R2 AMI.",
      "Option A is wrong as OpsWorks help define stacks for your applications and would scripts to provision the application deployment.",
      "Option B is wrong as EC2 Elastic Container Service provides a orchestration service to scale and support docker, however you are still responsible for deployment and RDS hosting.",
      "Option D is wrong as CloudFormation provides Infrastructure as code and would need provisioning scripts."
    ],
    "id": 359,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM user tied to an administrator role. Also provide an additional level of security with MFA.",
      "B.Give him root access to your AWS Infrastructure, because he is an auditor he will need access to every service.",
      "C.Create an IAM user who will have read-only access to your AWS VPC infrastructure and provide the auditor with those credentials.",
      "D.Create an IAM user with full VPC access but set a condition that will not allow him to modify anything if the request is from any IP other than his own. "
    ],
    "detail": "An auditor has been appointed to go through the architecture and artefacts in your AWS account? Which of the below options should be carried out so that he can carry out his audit? Choose the correct answer from the options below.",
    "explanation": [
      "Correct answer is C as Auditor would only need read only access, so the best approach would be to create an IAM user with Read Only access.",
      "Refer AWS documentation - IAM Best Practices",
      "Option A is wrong as the best practice should be to provide least privilege and administrator access would provide all access to AWS except billing.",
      "Option B is wrong as the root access should never be given.",
      "Option D is wrong as the best practice should be to provide least privilege as required by the user."
    ],
    "id": 360,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Merge the two companies, AWS accounts by going to the AWS console and selecting the \"Merge accounts\" option.",
      "B.Invite the acquired company's AWS account to join the existing company’s organization using AWS Organizations.",
      "C.Migrate all AWS resources from the acquired company's AWS account to the master payer account of the existing company.",
      "D.Create a new AWS account and set it up as the master payer. Move the AWS resources from both the existing and acquired companies' AWS accounts to the new account. "
    ],
    "detail": "An organization that is currently using consolidated billing has recently acquired another company that already has a number of AWS accounts. How could an Administrator ensure that all AWS accounts, from both the existing company and the acquired company, are billed to a single account?",
    "explanation": [
      "Correct answer is B as the existing company can be join into existing company using AWS organizations",
      "Refer AWS documentation - AWS Organizations",
      "AWS Organizations helps you manage policies for multiple AWS accounts. With Organizations, you can create groups of accounts, and then attach policies to a group to ensure the correct policies are applied across the accounts. AWS Organizations enables you to set up a single payment method for all the AWS accounts in your organization through consolidated billing."
    ],
    "id": 361,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Remove public read access and use signed URLs with expiry dates",
      "B.Use CloudFront distributions for static content.",
      "C.Block the IPs of the offending websites in Security Groups.",
      "D.Store photos on an EBS volume of the web server. "
    ],
    "detail": "You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?",
    "explanation": [
      "Correct answer is A as the website can use pre signed urls with limited time access and keep refreshing it, so that other websites cannot access them",
      "Refer AWS documentation - S3 Share Object with PreSigned URL",
      "All objects by default are private. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.",
      "Option B is wrong as CloudFront urls can still be directly accessed.",
      "Option C is not scalable",
      "Option D does not work as storing images on EBS would still need to be exposed."
    ],
    "id": 362,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Add an ELB in front of the S3 bucket.",
      "B.Add randomness to the key names.",
      "C.Enable Versioning for the S3 bucket.",
      "D.Enable S3 Accelerator",
      "E.Add a CloudFront distribution in front of the bucket. "
    ],
    "detail": "A company uses the S3 bucket to store its documents. They expect a mix of around 1000 PUT/GET requests per second. How can the company configure their system for maximum performance? Choose 2 answers",
    "explanation": [
      "Correct answers are B & E as S3 recommends using random prefix for scalability of all requests and if the requests are GET-intensive use CloudFront to cache the requests to reduce load from S3",
      "Refer AWS documentation - S3 Performance",
      "The Amazon S3 best practice guidance given in this topic is based on two types of workloads:"
    ],
    "id": 363,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create stateful Lambda functions, to prevent maintaining state externally and introducing latency",
      "B.Create stateless Lambda functions to ensure Lambda can scale",
      "C.Set Read Execute permissions on the files in the uploaded ZIP to ensure Lambda can execute code on your behalf.",
      "D.Set No permissions on the files in the uploaded ZIP to code is not accessible by anyone",
      "E.Initialize all code at startup irrespective of current event, for Lambda to enforce reusability "
    ],
    "detail": "You are preparing to use AWS Lambda for implementing serverless architecture. In preparation for this architecture, which two best practices should you consider implementing? Choose 2 answers",
    "explanation": [
      "Correct answers are B & C as the best practice is to create stateless applications and provide read write permissions for Lambda to be able to execute the code.",
      "Refer AWS documentation - Lambda Best Practices",
      "The following are recommended best practices for using AWS Lambda:"
    ],
    "id": 364,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Kinesis Firehose",
      "B.Amazon Kinesis Streams",
      "C.Amazon CloudFront",
      "D.Amazon SQS "
    ],
    "detail": "Your organization needs to ingest a big data stream into their data lake on Amazon S3. The data may stream in at a rate of hundreds of megabytes per second. What AWS service will accomplish the goal with the least amount of management?",
    "explanation": [
      "Correct answer is A as Kinesis Firehose can help in the data ingestion with least management.",
      "Refer AWS documentation - Kinesis Firehose",
      "Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon Elasticsearch Service (Amazon ES), and Splunk. Kinesis Data Firehose is part of the Kinesis streaming data platform, along with Kinesis Streams and Amazon Kinesis Data Analytics. With Kinesis Data Firehose, you don't need to write applications or manage resources. You configure your data producers to send data to Kinesis Data Firehose, and it automatically delivers the data to the destination that you specified. You can also configure Kinesis Data Firehose to transform your data before delivering it."
    ],
    "id": 365,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Continually send transaction logs from your master database to an S3 bucket and generate the reports off the S3 bucket using S3 byte range requests.",
      "B.Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ",
      "C.Launch an RDS Read Replica connected to your Multi AZ master database and generate reports by querying the Read Replica.",
      "D.Generate the reports by querying the ElastiCache database caching tier. "
    ],
    "detail": "You are running a successful multi-tier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web applications database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented ElastiCache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successfully implement the reporting tier with as little impact as possible to your database.",
    "explanation": [
      "Correct answer is C using Read Replicas",
      "Refer AWS Blog - RDS Read Replica",
      "There are other use cases for a Read Replica beyond increasing effective read traffic capacity. For example, you might want to use a Read Replica for business reporting. This prevents queries by business analysts from impacting the performance of your production DB Instance"
    ],
    "id": 366,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon VPC peering",
      "B.Elastic IP Addresses",
      "C.AWS Direct Connect",
      "D.Amazon VPC virtual private gateway "
    ],
    "detail": "You are building a solution for a customer to extend their on-premises data center to AWS. The customer requires a 50-Mbps dedicated and private connection to their VPC. Which AWS product or feature satisfies this requirement?",
    "explanation": [
      "Correct answer is C",
      "AWS Direct Connect makes it easy to establish a dedicated network connection from your premises to AWS. Using AWS Direct Connect, you can establish private connectivity between AWS and your datacenter, office, or colocation environment, which in many cases can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than Internet-based connections.",
      "Refer Direct Connect FAQs",
      "AWS Direct Connect does not involve the Internet; instead, it uses dedicated, private network connections between your intranet and Amazon VPC."
    ],
    "id": 367,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an image of the instance, and register the image with an IAM role assigned and an Amazon EBS volume mapping.",
      "B.Assign the IAM role to the running instance.",
      "C.Create an image of the instance, add a new IAM role with the same permissions as the desired IAM role, and deregister the image with the new role assigned.",
      "D.Create an image of the instance, and use this image to launch a new instance with the desired IAM role assigned "
    ],
    "detail": "You launch an Amazon EC2 instance without an assigned AWS identity and Access Management (IAM) role. Later, you decide that the instance should be running with an IAM role. Which action must you take in order to have a running Amazon EC2 instance with an IAM role assigned to it?",
    "explanation": [
      "Correct answer is B as IAM Role can be attached to an EC2 instance when it is launched or if it is in running or in stopped state.",
      "Refer AWS documentation - IAM Role for EC2"
    ],
    "id": 368,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create a second, independent LDAP server in AWS for your application to use for authentication",
      "B.Establish a VPN connection so your applications can authenticate against your existing on-premises LDAP servers ",
      "C.Establish a VPN connection between your data center and AWS. Create a LDAP replica on AWS and configure your application to use the LDAP replica for authentication",
      "D.Create a second LDAP domain on AWS establish a VPN connection to establish a trust relationship between your new and existing domains and use the new domain for authentication "
    ],
    "detail": "The majority of your Infrastructure is on premises and you have a small footprint on AWS Your company has decided to roll out a new application that is heavily dependent on low latency connectivity to LDAP for authentication Your security policy requires minimal changes to the company’s existing application user management processes. What option would you implement to successfully launch this application?",
    "explanation": [
      "Key point here achieving low latency on-premises LDAP with minimal changes.",
      "Correct answer is C as creating a Real Only Domain Controller (RODC) helps in low latency and minimal setup",
      "Option A is wrong as independent would not work for authentication as it's a separate copy",
      "Option B is wrong as it not a low latency solution",
      "Option D is wrong as setting up a second LDAP domain (Write Domain controllers) requires changes and is not minimal effort",
      "Refer AWS Directory Services Blog",
      "If the VGW used to connect to the On-Premise AD is not stable or has connectivity issues, the following options can be explored"
    ],
    "id": 369,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.HTTP",
      "B.HTTPS",
      "C.SFTP",
      "D.FTP "
    ],
    "detail": "A company is using S3 as their data store and as a security measure want the data to be encrypted in transit. What can help the company achieve the same?",
    "explanation": [
      "Correct answer is B as S3 allows using SSL endpoints using the HTTPS protocol to protect data in transit.",
      "Refer AWS documentation - S3 FAQs",
      "You can securely upload/download your data to Amazon S3 via SSL endpoints using the HTTPS protocol. If you need extra security you can use the Server-Side Encryption (SSE) option to encrypt data stored at rest. You can configure your Amazon S3 buckets to automatically encrypt objects before storing them if the incoming storage requests do not have any encryption information. Alternatively, you can use your own encryption libraries to encrypt data before storing it in Amazon S3."
    ],
    "id": 370,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.You have not assigned an elastic IP address to this instance.",
      "B.You need to update your route table so as to provide a route out for this instance.",
      "C.You have not configured a routable IP address in the host OS of the fourth instance.",
      "D.You have not configured a NAT in the public subnet. "
    ],
    "detail": "You work for a construction company that has their production environment in AWS. The production environment consists of 3 identical web servers that are launched from a standard Amazon Linux AMI using Auto Scaling. The web servers are launched in to the same public subnet and belong to the same security group. They also sit behind the same ELB. You decide to do some testing: you launch a 4th EC2 instance into the same subnet and same security group. Annoyingly, your 4th instance does not appear to have internet connectivity. What could be the cause of this?",
    "explanation": [
      "Correct answer is A as the instance needs to either have a public IP or Elastic IP address to be reachable from internet.",
      "Refer AWS documentation - EC2 Internet Connectivity",
      "Option A is wrong as 3 instances already can be reached from Internet, the route table, security groups and NACLs are fine.",
      "Option C is wrong as this configuration is not valid.",
      "Option D is wrong as NAT is for instances in private subnet to reach to internet."
    ],
    "id": 371,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EFS",
      "C.Amazon EBS volumes",
      "D.Amazon EC2 Instance store "
    ],
    "detail": "A Solutions Architect is designing an elastic application that will have between 10 and 50 Amazon EC2 concurrent instances running, dependent on load. Each instance must mount storage that will read and write to the same 50 GB folder. Which storage type meets the requirements?",
    "explanation": [
      "Correct answer is B as EFS provides an ability to be shared and mounted across EC2 instances.",
      "Refer AWS documentation - EFS",
      "Amazon EFS provides scalable file storage for use with Amazon EC2. You can create an EFS file system and configure your instances to mount the file system. You can use an EFS file system as a common data source for workloads and applications running on multiple instances.",
      "Option A is wrong as S3 cannot be mounted on EC2 instances",
      "Option C & D are wrong as EBS and Instance store cannot be attached and shared across multiple EC2 instances"
    ],
    "id": 372,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Spot instances",
      "B.Standard Reserved instances",
      "C.On-Demand Instances",
      "D.Scheduled Reserved Instances "
    ],
    "detail": "A Solutions Architect is building an application that will run for eight hours, Monday through Friday. This application will also run a weekly batch process every Saturday night that consistently takes four hours to complete. Which the MOST cost-effective compute solution?",
    "explanation": [
      "Correct answer is D as Scheduled Reserved Instances are suitable for workloads that do not run continuously but have regular schedule and you only pay for the time that the instances are scheduled.",
      "Refer AWS documentation - EC2 Scheduled Reserved Instances",
      "Scheduled Reserved Instances (Scheduled Instances) enable you to purchase capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term. You reserve the capacity in advance, so that you know it is available when you need it. You pay for the time that the instances are scheduled, even if you do not use them.",
      "Scheduled Instances are a good choice for workloads that do not run continuously, but do run on a regular schedule. For example, you can use Scheduled Instances for an application that runs during business hours or for batch processing that runs at the end of the week."
    ],
    "id": 373,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.AWS CloudHSM should be always be used for any payment transactions",
      "B.AWS CloudHSM does not support the processing, storage, and transmission of credit card data by a merchant or service provider, as it has not been validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS); hence, you will need to use KMS",
      "C.KMS is probably adequate unless additional protection is necessary for some applications and data that are subject to strict contractual or regulatory requirements for managing cryptographic keys, then HSM should be used",
      "D.It probably doesn't matter as they both do the same thing "
    ],
    "detail": "Your company is building its first deployment on AWS and is concerned about security in the cloud. There will be a lot of online payment transactions happening once the infrastructure is deployed. Your security officer has come to you and wants to know whether they should be using the Hardware Security Module (HSM) or AWS Key Management Service (KMS) for encryption. Which of the following would be the most correct response to give him? Choose the correct answer",
    "explanation": [
      "Correct answer is C as KMS can work for the requirements and HSM can be used subject to strict regulatory requirements",
      "Refer AWS documentation - CloudHSM",
      "Option B is wrong as \nAWS CloudHSM supports the processing, storage, and transmission of credit card data by a merchant or service provider, and has been validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS)"
    ],
    "id": 374,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.The user should not use his own security key as it is not secure",
      "B.Configure S3 to rotate the user’s encryption key at regular intervals",
      "C.Configure S3 to store the user’s keys securely with SSL",
      "D.Keep rotating the encryption key manually at the client side "
    ],
    "detail": "A user has enabled versioning on an S3 bucket. The user is using server side encryption for data at rest. If the user is supplying his own keys for encryption (SSE-C), what is recommended to the user for the purpose of security?",
    "explanation": [
      "Correct answer is D as the user should rotate the keys manually",
      "You manage a mapping of which encryption key was used to encrypt which object. Amazon S3 does not store encryption keys. You are responsible for tracking which encryption key you provided for which object.",
      "Refer AWS documentation - S3 SSE"
    ],
    "id": 375,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 and Amazon EBS",
      "B.Amazon Kinesis Firehose and Amazon S3",
      "C.Amazon ECS and Amazon RDS",
      "D.Amazon S3 events and AWS Lambda "
    ],
    "detail": "A user is designing a new service that receives location updates from 3600 rental cars every second. The cars location needs to be uploaded to an Amazon S3 bucket. Each location must also be checked for distance from the original rental location. Which services will process the updates and automatically scale?",
    "explanation": [
      "Correct answer is B as Kinesis Firehose can help capture the data and store the data into S3 as well as invoke data transformation or Lambda functions to process the data in real time.",
      "Refer AWS documentation - Kinesis Firehose",
      "Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon Elasticsearch Service (Amazon ES), and Splunk. Kinesis Data Firehose is part of the Kinesis streaming data platform, along with Kinesis Data Streams, Kinesis Video Streams, and Amazon Kinesis Data Analytics. With Kinesis Data Firehose, you don't need to write applications or manage resources. You configure your data producers to send data to Kinesis Data Firehose, and it automatically delivers the data to the destination that you specified. You can also configure Kinesis Data Firehose to transform your data before delivering it."
    ],
    "id": 376,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use Reserved instances",
      "B.Use On-demand instances",
      "C.Use Spot instances",
      "D.Use Dedicated Instances "
    ],
    "detail": "Your company has migrated their production environment into AWS VPC 6 months ago. As a cloud architect, you are required to revise the infrastructure and ensure that it is cost-effective in the long term. There are more than 50 EC2 instances that are up and running all the time to support the business operation. What can you do to lower the cost?",
    "explanation": [
      "Correct answer is A as for long term use Reserved Instances helps reduce the Total Cost of Ownership (TCO)",
      "Refer AWS documentation - EC2 Reserved Instances",
      "Reserved Instances provide you with a significant discount compared to On-Demand Instance pricing. Reserved Instances are not physical instances, but rather a billing discount applied to the use of On-Demand Instances in your account. These On-Demand Instances must match certain attributes in order to benefit from the billing discount.",
      "Option B is wrong as On-Demand are best suited for low-medium usage of EC2 resources.",
      "Option C is wrong as Spot instances would not provide the durability",
      "Option D is wrong as Dedicated instances are expensive and useful when it is required for resource isolation as a part of compliance and security requirement."
    ],
    "id": 377,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.One table, with a primary key that is the sensor ID and a sort key that is the timestamp",
      "B.One table, with a primary key that is the concatenation of the sensor ID and timestamp",
      "C.One table for each week, with a primary key that is the concatenation of the sensor ID and timestamp",
      "D.One table for each week, with a primary key that is the sensor ID and a sort key that is the timestamp "
    ],
    "detail": "A utility company is building an application that stores data coming from more than 10,000 sensors. Each sensor has a unique ID and will send a datapoint (approximately 1KB) every 10 minutes throughout the day. Each datapoint contains the information coming from the sensor as well as a timestamp. This company would like to query information coming from a particular sensor for the past week very rapidly and want to delete all the data that is older than 4 weeks. Using Amazon DynamoDB for its scalability and rapidity, how do you implement this in the most cost effective way",
    "explanation": [
      "Correct answer is D Composite key with Sensor ID and timestamp would help for faster queries",
      "Refer AWS documentation for DynamoDB handling Timeseries data",
      "Option C & D are valid as they are keeping tables for each week. However, with Option C, concatenation will cause queries would be slowerTable should be designed with a composite primary key consisting of Customer ID as the partition key and date/time as the sort keyOption A & B are wrong as One table would not make sense as we need to query only on past week and want data only for 4 weeks. This would impact performance. Also, provisioned throughput consumption is based on the size of the deleted item and its more costly as compared to dropping a table."
    ],
    "id": 378,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use S3 server-side encryption with customer-provided keys.",
      "B.Use S3 client-side encryption",
      "C.Use S3 server-side encryption with Amazon S3 managed keys.",
      "D.Use S3 server-side encryption with AWS KMS managed keys.",
      "E.Use S3 server-side encryption with the company’s own keys imported into AWS KMS "
    ],
    "detail": "A Solutions Architect is designing an application that stores objects encrypted in an Amazon S3 bucket. The company security requirements state that the encryption key is stored by the organization. Which methods meet this requirement? (Select TWO)",
    "explanation": [
      "Correct answers are A & B as the customer can manage their own keys for encryption using either SSE-C or Client Side Encryption. The keys would be stored within the organization and not exposed to AWS&gt;",
      "Refer AWS documentation - S3 Encryption",
      "Use Server-Side Encryption with Customer-Provided Keys (SSE-C) – You manage the encryption keys and Amazon S3 manages the encryption, as it writes to disks, and decryption, when you access your objects.",
      "Use Client-Side Encryption – You can encrypt data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, the encryption keys, and related tools.",
      "Option C, D and E are wrong as keys are managed by AWS and need to be stored within AWS."
    ],
    "id": 379,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.ELB’s normal behavior sends requests from the same user to the same backend instance",
      "B.ELB’s behavior when sticky sessions are enabled causes ELB to send requests in the same session to the same backend",
      "C.A faulty browser is not honoring the TTL of the ELB DNS name.",
      "D.The web application uses long polling such as comet or websockets. Thereby keeping a connection open to a web server tor a long time "
    ],
    "detail": "A customer has a web application that uses cookie-based sessions to track logged in users. It is deployed on AWS using ELB and Auto Scaling. The customer observes that when load increases. Auto Scaling launches new Instances but the load on the existing Instances does not decrease, causing all existing users to have a sluggish experience. Which two answer choices independently describe a behavior that could be the cause of the sluggish user experience? Choose 2 answers",
    "explanation": [
      "Correct answers are B & D",
      "Option B is correct as sticky sessions would cause the user to be routed to the same instance.",
      "Option D is correct as using application is using long polling the connection would be open for a long time and served by the same server.",
      "Option A is wrong as its not by default behavior",
      "Option C is wrong as DNS TTL would only impact the ELB instances if scaled and not the EC2 instances to which the traffic is routed. Also, it might a single client issue due to browser caching, however here all the existing customers are facing the issue."
    ],
    "id": 380,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure the database security group to allow database traffic from the application server IP addresses.",
      "B.Configure the database security group to allow database traffic from the application server security group",
      "C.Configure the database subnet network ACL to deny all inbound non-database traffic from the application-tier subnet.",
      "D.Configure the database subnet network ACL to allow inbound database traffic from the application-tier subnet. "
    ],
    "detail": "A solutions Architect is designing a three-tier web application. The Architect wants to restrict access to the database tier to accept traffic from the application servers only. However, these application servers are in an Auto Scaling group and may vary in quantity. How should the Architect configure the database servers to meet the requirements?",
    "explanation": [
      "Correct answer is B as the database security Group can be configured to allow traffic from the web security group. As the instances are launched using Auto Scaling the IPs would change always.",
      "Option A is wrong as Application IP address is not an ideal option as they would change with Auto Scaling scale out/in actions.",
      "Option C is wrong as ACLs are stateless and the ACLS should be configured on Web and DB subnet to allow outgoing and incoming traffic to each other.",
      "Option D is wrong as ACLs are stateless and need to allow outbound traffic as well."
    ],
    "id": 381,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Cross-Region Replication for the S3 bucket to all regions.",
      "B.Use CloudFront with the S3 bucket as the source.",
      "C.Use API Gateway with S3 bucket as the source.",
      "D.Use AWS Lambda functions to deliver the content to users. "
    ],
    "detail": "A company allows users to upload videos, which are stored to an S3 bucket. The company wants to provide access to the users to view the same. What is the best way to do so, while maintaining a good user experience for all users regardless of the region in which they are located?",
    "explanation": [
      "Correct answer is B as CloudFront with S3 as origin can help cache the contents and distribute is a low latency manner globally using the edge locations.",
      "Refer AWS documentation - CloudFront with S3",
      "Amazon CloudFront is a web service that speeds up distribution of static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called Edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the Edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance. If the content is already in the Edge location with the lowest latency, CloudFront delivers it immediately. If the content is not in that Edge location, CloudFront retrieves it from an Amazon S3 bucket or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.",
      "If you store your objects in an Amazon S3 bucket, you can either have your users get your objects directly from S3, or you can configure CloudFront to get your objects from S3 and distribute them to your users.",
      "Using CloudFront can be more cost effective if your users access your objects frequently because, at higher usage, the price for CloudFront data transfer is lower than the price for Amazon S3 data transfer. In addition, downloads are faster with CloudFront than with Amazon S3 alone because your objects are stored closer to your users."
    ],
    "id": 382,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use DynamoDB streams",
      "B.Use DynamoDB Accelerator",
      "C.Use DynamoDB inbuilt caching",
      "D.Use RDS with ElastiCache instead "
    ],
    "detail": "A Company is developing a social media application which allows users to share pics within their follower’s circle. User and follower’s data are currently stored in DynamoDB. They want to automatically notify the mobile devices of all friends in a circle as soon as a user uploads a new selfie with a sub millisecond response. Currently the notifications are taking few milliseconds even with high provisioned throughput on DynamoDB. How can the read performance on DynamoDB be improved further?",
    "explanation": [
      "Correct answer is B as DynamoDB Accelerator helps provide caching for DynamoDB to give a 10x microseconds performance.",
      "Refer AWS documentation - DynamoDB DAX",
      "Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement – from milliseconds to microseconds – even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.",
      "While DynamoDB offers consistent single-digit millisecond latency, DynamoDB + DAX takes performance to the next level with response times in microseconds for millions of requests per second for read-heavy workloads. With DAX, your applications remain fast and responsive, even when a popular event or news story drives unprecedented request volumes your way. No tuning required."
    ],
    "id": 383,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Protect the EC2 instances against unsolicited access by enforcing the principle of least-privilege access",
      "B.Protect against IP spoofing or packet sniffing",
      "C.Assure all communication between EC2 instances and ELB is encrypted",
      "D.Install latest security patches on EC2 instances "
    ],
    "detail": "You are running a web-application on AWS consisting of the following components an Elastic Load Balancer (ELB) an Auto-Scaling Group of EC2 instances running Linux/PHP/Apache, and Relational Database Service (RDS) MySQL. Which security measures fall into AWS’s responsibility?",
    "explanation": [
      "Correct answer is B as AWS network provides protection against traditional network security issues",
      "Refer AWS Security Whitepaper",
      "Option A, C & D are user responsibility."
    ],
    "id": 384,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Store an access key on the Amazon EC2 instance with rights to the DynamoDB table.",
      "B.Attach an IAM user to the Amazon EC2 instance.",
      "C.Create an IAM role with permissions to write to the DynamoDB table.",
      "D.Attach an IAM role to the Amazon EC2 instance.",
      "E.Attach an IAM policy to the Amazon EC2 instance. "
    ],
    "detail": "A Solutions Architect is designing a web application that is running on an Amazon EC2 instance. The application store data in DynamoDB. The Architect needs to secure access to the DynamoDB table. What combination of steps does AWS recommend to achieve secure authorization? (Select TWO)",
    "explanation": [
      "Correct answers are C & D as IAM roles are a secured and recommended way to grant access to EC2 instances.",
      "Refer AWS documentation - IAM Best Practices - IAM Role with EC2",
      "Applications that run on an Amazon EC2 instance need credentials in order to access other AWS services. To provide credentials to the application in a secure way, use IAM roles. A role is an entity that has its own set of permissions, but that isn't a user or group. Roles also don't have their own permanent set of credentials the way IAM users do. In the case of Amazon EC2, IAM dynamically provides temporary credentials to the EC2 instance, and these credentials are automatically rotated for you.",
      "When you launch an EC2 instance, you can specify a role for the instance as a launch parameter. Applications that run on the EC2 instance can use the role's credentials when they access AWS resources. The role's permissions determine what the application is allowed to do",
      "Option A is wrong as it is not recommended and secure to store access keys on the EC2 instance",
      "Option B is wrong as IAM user cannot be attached to an EC2 instance",
      "Option E is wrong as IAM policy cannot be attached to an EC2 instance."
    ],
    "id": 385,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.The user needs to place a PUT request to decrypt the object",
      "B.The user needs to decrypt the object using a private key",
      "C.Amazon S3 manages encryption and decryption automatically",
      "D.Amazon S3 provides a server-side key for decrypting the object "
    ],
    "detail": "A company is using Amazon S3 as its local repository for weekly analysis reports. One of the company-wide requirements is to secure data at rest using encryption. The company chose Amazon S3 server-side encryption. The company wants to know how the object is decrypted when a GET request is issued. Which of the following answers this question?",
    "explanation": [
      "Correct answer is C as with S3-SSE, S3 automatically manages the encryption before inserting the object and decryption before the object is read.",
      "Refer AWS documentation - S3 Server Side Encryption",
      "Amazon S3 default encryption provides a way to set the default encryption behavior for an S3 bucket. You can set default encryption on a bucket so that all objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS KMS-managed keys (SSE-KMS).",
      "When you use server-side encryption, Amazon S3 encrypts an object before saving it to disk in its data centers and decrypts it when you download the objects."
    ],
    "id": 386,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use S3 with reduced redundancy to store and serve the scanned files. Install a commercial search application on EC2 Instances and configure with Auto-Scaling and an Elastic Load Balancer.",
      "B.Model the environment using CloudFormation. Use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EBS volumes together to store the scanned files with a search index.",
      "C.Use S3 with standard redundancy to store and serve the scanned files. Use CloudSearch for query processing and use Elastic Beanstalk to host the website across multiple Availability Zones.",
      "D.Use a single-AZ RDS MySQL instance to store the search index for the scanned files and use an EC2 instance with a custom application to search based on the index. "
    ],
    "detail": "An organization has a requirement to store 10TB worth of scanned files. They are required to have a search application in place to search through the scanned files. Which of the below mentioned options is ideal for implementing the storage and search facility?",
    "explanation": [
      "Correct answer is C as S3 Standard Redundancy would provide the storage for the files, which can then be indexed using CloudSearch to be searchable.",
      "Refer AWS documentation - S3 Storage Classes & CloudSearch",
      "Amazon CloudSearch is a managed service in the AWS Cloud that makes it simple and cost-effective to set up, manage, and scale a search solution for your website or application.",
      "Amazon CloudSearch supports 34 languages and popular search features such as highlighting, autocomplete, and geospatial search",
      "Option A is wrong as Reduced Redundancy would not an ideal choice for scanned files, as they might not reproducible. Also, commercial search application would not be cost effective",
      "Option B is wrong as EBS striped volumes and custom application would not be cost effective.",
      "Option D is wrong as RDS is not an ideal solution to store files and custom application would not be cost effective to scale."
    ],
    "id": 387,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use Application Load Balancer and enable comet support",
      "B.Use Classic Load Balancer which supports WebSockets",
      "C.Use Application Load Balancer which supports WebSockets",
      "D.Use Classic Load Balancer and enable comet support "
    ],
    "detail": "You are designing an application which requires websockets support, to exchange real-time messages with end-users without the end users having to request (or poll) the server for an update? Which ELB option should you choose ?",
    "explanation": [
      "Correct answer is C as ALB, unlike Classic Load Balancer, supports WebSockets",
      "Refer AWS documentation - ELB Application Load Balancer",
      "WebSockets Support - WebSockets allows a server to exchange real-time messages with end-users without the end users having to request (or poll) the server for an update. The WebSockets protocol provides bi-directional communication channels between a client and a server over a long-running TCP connection."
    ],
    "id": 388,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a custom route table associated with the web tier and block the attacking IP addresses from the IGW (internet Gateway)",
      "B.Change the EIP (Elastic IP Address) of the NAT instance in the web tier subnet and update the Main Route table with the new EIP",
      "C.Create 15 Security Group rules to block the attacking IP addresses over port 80",
      "D.Create an inbound NACL (Network Access control list) associated with the web tier subnet with deny rules to block the attacking IP addresses "
    ],
    "detail": "A benefits enrollment company is hosting a 3-tier web application running in a VPC on AWS, which includes a NAT (Network Address Translation) instance in the public Web tier. There is enough provisioned capacity for the expected workload for the new fiscal year benefit enrollment period plus some extra overhead. Enrollment proceeds nicely for two days and then the web tier becomes unresponsive, upon investigation using CloudWatch and other monitoring tools it is discovered that there is an extremely large and unanticipated amount of inbound traffic coming from a set of 15 specific IP addresses over port 80 from a country where the benefits company has no customers. The web tier instances are so overloaded that benefit enrollment administrators cannot even SSH into them. Which activity would be useful in defending against this attack?",
    "explanation": [
      "Correct answer is D as NACL can be used to deny access to the attacking IP address.",
      "Refer AWS documentation - VPC NACLs",
      "Option A is wrong as Route table cannot help block traffic but just define routes for traffic.",
      "Option B is wrong as NAT is only for routing outgoing traffic and not incoming traffic.",
      "Option C is wrong as Security Groups cannot help block/deny access."
    ],
    "id": 389,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Encrypt all EBS volumes attached to EC2 Instances.",
      "B.Use Server-Side Encryption for S3.",
      "C.Use IOPS Volumes when working with EBS Volumes on EC2 Instances.",
      "D.Use IAM policies with least privilege to control access to EC2 Instances",
      "E.Use SSL/HTTPS when using the Elastic Load Balancer.",
      "F.Disable sticky session on ELB "
    ],
    "detail": "An IT company would like to secure their resources in their AWS Account. Which of the following options is able to secure data at rest and in transit in AWS? Choose 3 answers",
    "explanation": [
      "Correct answers are A, B & E as Data at Rest security can be provided using encryption on EBS and S3 and Data in Transit security can be provided using SSL/HTTPS",
      "Refer AWS Whitepaper - AWS securing data at rest with encryption",
      "Amazon EBS encryption offers you a simple encryption solution for your EBS volumes without the need for you to build, maintain, and secure your own key management infrastructure. When you create an encrypted EBS volume and attach it to a supported instance type, the following types of data are encrypted:",
      "Data protection refers to protecting data while in-transit (as it travels to and from Amazon S3) and at rest (while it is stored on disks in Amazon S3 data centers). You can protect data in transit by using SSL or by using client-side encryption. You have the following options of protecting data at rest in Amazon S3.",
      "You can create a load balancer that uses the SSL/TLS protocol for encrypted connections (also known as SSL offload). This feature enables traffic encryption between your load balancer and the clients that initiate HTTPS sessions, and for connections between your load balancer and your EC2 instances.",
      "Option C is wrong as there is no such thing as IOPS volumes.",
      "Option D is wrong as IAM policies cannot be used to control access to EC2 instances. Its driven through the ssh keys.",
      "Option F is wrong as sticky sessions do not help secure the instances but helps maintain use mapping to an instance"
    ],
    "id": 390,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Glacier with Expedited retrievals",
      "B.Amazon S3 Standard Infrequent Access",
      "C.Amazon EFS",
      "D.Amazon S3 Standard "
    ],
    "detail": "A company is to run a service on AWS to provide offsite backups for images on laptops and phones. The solution must support millions of customers with thousands of images per customer. Though the images will be retrieved infrequently, they must be available for retrieval immediately. Which is the most cost-efficient storage option that meets these requirements?",
    "explanation": [
      "Correct answer is B as S3 Standard Infrequent Access provides a cost effective solution for storage where the requirement for infrequent but immediate access to objects.",
      "Refer AWS documentation - S3 Storage Classes",
      "Amazon S3 Standard-Infrequent Access (S3 Standard-IA) is an Amazon S3 storage class for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. This combination of low cost and high performance make S3 Standard-IA ideal for long-term storage, backups, and as a data store for disaster recovery.",
      "Option A is wrong as Glacier will not be able to provide immediate access.",
      "Option C is wrong as EFS would not provide a cost effective solution.",
      "Option D is wrong as Standard would work fine, but cost more as compared to S3 IA"
    ],
    "id": 391,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Set an S3 ACL on the bucket or the object.",
      "B.Create a CloudFront distribution for the bucket.",
      "C.Set an S3 bucket policy.",
      "D.Enable IAM Identity Federation",
      "E.Use S3 Virtual Hosting "
    ],
    "detail": "Which features can be used to restrict access to data in S3? Choose 2 answers",
    "explanation": [
      "Correct answers are A & C as the access to S3 can be controlled using Object ACL, Bucket Policy and ACL and IAM only.",
      "Refer to AWS documentation for S3 Access Control",
      "Option B is wrong as CloudFront distribution alone does not help control access and it still needs to restricted using policies",
      "Option D is wrong as IAM identity federation helps authenticate using different identity providers only",
      "Option E is wrong as virtual hosting is just a practice of serving multiple web sites from a single web server"
    ],
    "id": 392,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use asynchronous replication for standby to maximize throughput during peak demand",
      "B.Offload SELECT queries that can tolerate stale data to READ replica",
      "C.Offload SELECT and UPDATE queries to READ replica",
      "D.Offload SELECT query that needs the most current data to READ replica "
    ],
    "detail": "A company has an Amazon RDS-managed online transaction processing system that has very heavy read and write. The solutions architect notices throughput issues with the system. How can the responsiveness of the primary database be improved?",
    "explanation": [
      "Correct answer is B as Read replicas are asynchronously replicated they might have stale data and if the application is fine with it, the SELECT queries can be redirected to the Read Replicas reducing the load on the primary database.",
      "Refer AWS documentation - RDS Read Replicas",
      "Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances.",
      "Option A is wrong as standby instance is only for failover over and is synchronously replicated always. It cannot handle any traffic.",
      "Option C is wrong as Read replica is a read only copy and cannot handle UPDATE queries.",
      "Option D is wrong as Read replicas do not have the latest current data as they are asynchronously replicated."
    ],
    "id": 393,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Add the software installation to the configuration for the Auto Scaling Group.",
      "B.Add the scripts for the installation in the User data section.",
      "C.Create a golden image and then create a launch configuration.",
      "D.Ask the IT operations team to install the software as soon as the instance is launched. "
    ],
    "detail": "You create an Auto Scaling Group which is used to spin up instances On Demand. As an architect, you need to ensure that the instances are pre-installed with a software when they are launched. What are the ways in which you can achieve this? Choose 2 answers",
    "explanation": [
      "Correct answers are B & C as the software can either be pre-installed using an AMI, also referred to as golden image, or the software can be installed using user data.",
      "Refer AWS documentation - User Data & AMI",
      "When you launch an instance in Amazon EC2, you have the option of passing user data to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts. You can pass two types of user data to Amazon EC2: shell scripts and cloud-init directives.",
      "An Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You must specify a source AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations."
    ],
    "id": 394,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Implement optimistic concurrency by using a conditional write.",
      "B.Implement pessimistic concurrency by using a conditional write.",
      "C.Implement optimistic concurrency by locking the item upon read.",
      "D.Implement pessimistic concurrency by locking the item upon read. "
    ],
    "detail": "Your web application reads an item from your DynamoDB table, changes an attribute, and then writes the item back to the table. You need to ensure that one process doesn't overwrite a simultaneous change from another process. How can you ensure concurrency?",
    "explanation": [
      "Correct answer is A as Optimistic concurrency depends on checking a value upon save to ensure that it has not changed.",
      "Option B & D are wrong as Pessimistic concurrency prevents a value from changing by locking the item or row in the database.",
      "Option C is DynamoDB does not support item locking, and conditional writes are perfect for implementing optimistic concurrency.",
      "Refer AWS documentation - DynamoDB Optimistic Locking"
    ],
    "id": 395,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Elastic Beanstalk",
      "B.AWS CloudFormation",
      "C.AWS CodeBuild",
      "D.AWS CodeDeploy "
    ],
    "detail": "A Consulting firm repeatedly builds large architectures for their customers using AWS resources from several AWS services including IAM, Amazon EC2, Amazon RDS, DynamoDB and Amazon VPC. The consultants have architecture diagrams for each of their architectures and want to automate the process. Which service should provide immediate operational benefits to the organization?",
    "explanation": [
      "Correct answer is B as CloudFormation provide Infrastructure as a Code service",
      "Refer AWS documentation - CloudFormation",
      "AWS CloudFormation is a service that helps you model and set up your Amazon Web Service resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you."
    ],
    "id": 396,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Log clicks in weblogs by URL store to Amazon S3, and then analyze with Elastic MapReduce",
      "B.Push web clicks by session to Amazon Kinesis and analyze behavior using Kinesis workers",
      "C.Write click events directly to Amazon Redshift and then analyze with SQL",
      "D.Publish web clicks by session to an Amazon SQS queue and periodically drain these events to Amazon RDS and analyze with SQL "
    ],
    "detail": "You require the ability to analyze a customer’s clickstream data on a website so they can do behavioral analysis. Your customer needs to know what sequence of pages and ads their customer clicked on. This data will be used in real time to modify the page layouts as customers click through the site to increase stickiness and advertising click-through. Which option meets the requirements for capturing and analyzing this data?",
    "explanation": [
      "Key point here is real time data capture and analytics",
      "Correct answer is B as Kinesis helps to collect real time data capture and analyze using kinesis workers",
      "Option A is wrong as S3 & EMR is not ideal for real time data ingestion and analytics",
      "Option C is wrong as Redshift is not suitable for real time data ingestion and only allows jdbc/odbc data connection",
      "Option D is wrong as SQS is not ideal for real time data ingestion. Also periodical analytics is not real time to be able to modify the behavior"
    ],
    "id": 397,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EFS ",
      "B.Amazon RDS ",
      "C.AWS Storage Gateway ",
      "D.Amazon S3 "
    ],
    "detail": "A company has an application that stores sensitive data. The company is required by government regulations to store multiple copies of its data. What would be the MOST resilient and cost-effective option to meet this requirement?",
    "explanation": [
      "Correct answer is D as S3 by default maintains multiple copies of data on multiple devices across multiple AZs and is very cost-effective.",
      "Refer AWS documentation - S3 FAQs",
      "Q: How are Amazon S3 and Amazon S3 Glacier designed to achieve 99.999999999% durability?",
      "Amazon S3 Standard, S3 Standard-IA, and S3 Glacier storage classes redundantly store your objects on multiple devices across a minimum of three Availability Zones (AZs) in an Amazon S3 Region before returning SUCCESS. The S3 One Zone-IA storage class stores data redundantly across multiple devices within a single AZ. These services are designed to sustain concurrent device failures by quickly detecting and repairing any lost redundancy, and they also regularly verify the integrity of your data using checksums.",
      "Options A, B & C are wrong as they do not maintain multiple copies of data and are not cost effective as S3."
    ],
    "id": 398,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Configure Rolling Deployments.",
      "B.Configure Enhanced Health Reporting ",
      "C.Configure Blue-Green Deployments. ",
      "D.Configure a Dead Letter Queue "
    ],
    "detail": "If you're trying to configure an AWS Elastic Beanstalk worker tier for easy debugging if there are problems finishing queue jobs, what should you configure?",
    "explanation": [
      "Correct answer is D as \nElastic Beanstalk worker environments support SQS dead letter queues, where worker can send messages that for some reason could not be successfully processed. Dead letter queue provides the ability to sideline, isolate and analyze the unsuccessfully processed messages.",
      "Refer AWS Documentation - Elastic Beanstalk SQS"
    ],
    "id": 399,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "There is a requirement to host a database on an EC2 Instance. The EBS Volume is required to support a high rate of IOPS since a large number of read and write requests are expected on the database. Which Amazon EBS volume type can meet the performance requirements of this database?",
    "explanation": [
      "Correct answer is A as EBS Provisioned IOPS SSD supports high IOPS and is ideal for database workloads.",
      "Refer AWS documentation - EBS Volume Types",
      "Provisioned IOPS SSD (io1) volumes are designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency."
    ],
    "id": 400,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EFS",
      "C.Amazon EBS",
      "D.Amazon ElastiCache "
    ],
    "detail": "A Solutions Architect needs a storage for a fleet of Linux web application servers. The solution should provide system interface and be able to support millions of files. Which AWS service should the Architect choose?",
    "explanation": [
      "Correct answer is B as EFS provides the ability to scale on demand, be shared across multiple instances and provide a system interface.",
      "Refer AWS documentation - EFS",
      "Amazon Elastic File System (Amazon EFS) provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. It is easy to use and offers a simple interface that allows you to create and configure file systems quickly and easily. Amazon EFS is built to elastically scale on demand without disrupting applications, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. It is designed to provide massively parallel shared access to thousands of Amazon EC2 instances, enabling your applications to achieve high levels of aggregate throughput and IOPS that scale as a file system grows, with consistent low latencies. As a regional service, Amazon EFS is designed for high availability and durability storing data redundantly across multiple Availability Zones.",
      "When mounted on Amazon EC2 instances, an Amazon EFS file system provides a standard file system interface and file system access semantics\n, allowing you to seamlessly integrate Amazon EFS with your existing applications and tools. Multiple Amazon EC2 instances can access an Amazon EFS file system at the same time, allowing Amazon EFS to provide a common data source for workloads and applications running on more than one Amazon EC2 instance.",
      "Option A is wrong as S3 does not provide a system interface.",
      "Option C is wrong as EBS cannot be shared across multiple instances and have scaling limitations.",
      "Option D is wrong as ElastiCache is a caching solution."
    ],
    "id": 401,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.None of these.",
      "B.Amazon Instance Storage",
      "C.Any of these",
      "D.Amazon EBS "
    ],
    "detail": "Which Amazon storage do you think is the best for my database-style applications that frequently encounter many random reads and writes across the dataset?",
    "explanation": [
      "Correct answer is D as EBS is recommended. RDS also uses Amazon Elastic Block Store (Amazon EBS) volumes for database and log storage.",
      "Refer AWS documentation - EBS",
      "Amazon EBS is recommended when data must be quickly accessible and requires long-term persistence. EBS volumes are particularly well-suited for use as the primary storage for file systems, databases, or for any applications that require fine granular updates and access to raw, unformatted, block-level storage"
    ],
    "id": 402,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS volume with Provisioned IOPS",
      "B.Amazon EC2 Instance store",
      "C.Amazon SQS",
      "D.Amazon DynamoDB table "
    ],
    "detail": "A Solutions Architect is designing a solution that must store and retrieve session data and JSON documents. The solution must provide high availability, strong consistent, and data durability. Which solution meets these requirements?",
    "explanation": [
      "Correct answer is D as DynamoDB is an ideal storage option for session data. It supports JSON documents and provides a strongly consistent access to data.",
      "Refer AWS Whitepaper - Storage Options",
      "Amazon DynamoDB has built-in fault tolerance that automatically and synchronously replicates data across three Availability Zones in a region for high availability and to help protect data against individual machine, or even facility failures.",
      "When reading data from DynamoDB, users can specify whether they want the read to be eventually consistent or strongly consistent:"
    ],
    "id": 403,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Write a script that is run by a daily cron job on an RDS instance to take the backups",
      "B.Enable Automated backups on RDS",
      "C.Use CloudWatch logs to take backup of transaction logs, which can be restored",
      "D.Take frequent snapshots of underlying EBS volumes and store in S3 "
    ],
    "detail": "A company is migrating their on-premises Oracle database instance to AWS RDS. As a part of compliance, they perform automated backups through custom scripts every day. How can the same be implemented after migration to AWS?",
    "explanation": [
      "Correct answer is B as RDS provides automated backup feature which is enabled by default.",
      "Refer AWS documentation - RDS Backups",
      "Amazon RDS creates and saves automated backups of your DB instance. Amazon RDS creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just individual databases.",
      "Amazon RDS creates automated backups of your DB instance during the backup window of your DB instance. Amazon RDS saves the automated backups of your DB instance according to the backup retention period that you specify. If necessary, you can recover your database to any point in time during the backup retention period.",
      "Option A and D are wrong as you do not have direct access to the RDS instance and the underlying volume.",
      "Option C is wrong as CloudWatch logs backing up transaction logs won't help to restore the database."
    ],
    "id": 404,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Lambda function",
      "B.SQS queue",
      "C.EC2 instance",
      "D.DynamoDB table "
    ],
    "detail": "A web application allows customers to upload orders to an S3 bucket. The resulting Amazon S3 events trigger a Lambda function that inserts a message to an SQS queue. A single EC2 instance reads messages from the queue, processes them, and stores them in a DynamoDB table partitioned by unique order ID. Next month traffic is expected to increase by a factor of 10 and a Solutions Architect is reviewing the architecture for possible scaling problems. Which component is MOST likely to need re-architecting to be able to scale to accommodate the new traffic?",
    "explanation": [
      "Correct answer is C as a single EC2 instance is not scalable and the architecture needs to be improved using Auto Scaling to scale up or down as the demand changes.",
      "Option B and D are AWS managed services and scale as per the configuration and demand.",
      "Option A is wrong as Lambda function scales as per the incoming demand."
    ],
    "id": 405,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Encrypt the volume using the S3 server-side encryption service",
      "B.Attach the volume to an instance using EC2’s SSL interface.",
      "C.Create an IAM policy that restricts read and write access to the volume.",
      "D.Use EBS encryption",
      "E.Use an encrypted file system on top of the EBS volume "
    ],
    "detail": "How can you secure data at rest on an EBS volume?",
    "explanation": [
      "Correct answer is D as EBS encryption can be used to encrypt EBS volumes.",
      "EBS encryption was launched some time back by AWS. Before the EBS encryption, Option E was the correct answer, as you need to use encrypted file system over EBS volume.",
      "Until today, you needed third-party security tools to encrypt data for EBS volumes. With Amazon EBS encryption, you can now create an encrypted EBS volume and attach it to a supported instance type. Data on the volume, disk I/O, and snapshots created from the volume are then all encrypted. The encryption occurs on the servers that host the EC2 instances, providing encryption of data as it moves between EC2 instances and EBS storage. EBS encryption is based on the industry standard AES-256 cryptographic algorithm.",
      "Option A is wrong as S3 - SSE does not work with EBS.",
      "Option B is wrong as SSL is for data in transit.",
      "Option C is wrong as IAM policy can't restrict read & write access to EC2."
    ],
    "id": 406,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable CloudTrail for the production VPC",
      "B.Enable VPC Flow Logs for the production VPC",
      "C.Enable both CloudTrail and VPC Flow Logs for the production VPC",
      "D.Enable both CloudTrail and VPC Flow Logs for the AWS account "
    ],
    "detail": "A customer’s security team requires the logging of all network access attempts to Amazon EC2 instances in their production VPC on AWS. Which configuration will meet the security team’s requirement?",
    "explanation": [
      "Correct answer is B as the VPC flow logs needs to be enabled for tracking the access to EC2 instances.",
      "Refer AWS documentation - VPC Flow Logs",
      "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data is stored using Amazon CloudWatch Logs. After you've created a flow log, you can view and retrieve its data in Amazon CloudWatch Logs.",
      "Flow logs can help you with a number of tasks; for example, to troubleshoot why specific traffic is not reaching an instance, which in turn can help you diagnose overly restrictive security group rules. You can also use flow logs as a security tool to monitor the traffic that is reaching your instance",
      "Option A, C & D are wrong as CloudTrail would not help capture access to EC2 instances but only the AWS API calls."
    ],
    "id": 407,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Vault Lock",
      "B.Expedited retrieval",
      "C.Bulk retrieval",
      "D.Standard retrieval "
    ],
    "detail": "A Company designing a solution to store and archive corporate documents, has determined Amazon Glacier as the right choice of solution. An important requirement is that the data must be delivered within 10 minutes of a retrieval request. Which feature in Amazon Glacier can help meet this performance requirement?",
    "explanation": [
      "Correct answer is B as Glacier Expedited retrieval allows a faster retrieval of objects from Glacier within 1-5 minutes.",
      "Refer AWS documentation - Glacier FAQs - Data Retrievals",
      "Q: What are Expedited retrievals?",
      "Expedited retrievals allow you to quickly access your data when occasional urgent requests for a subset of archives are required. For all but the largest archives (250MB+), data accessed using Expedited retrievals are typically made available within 1-5 minutes. There are two types of Expedited retrievals: On-Demand and Provisioned. On-Demand requests are like EC2 On-Demand instances and are available the vast majority of the time. Provisioned requests are guaranteed to be available when you need them.",
      "Option A is wrong as Vault Lock allows you to easily deploy and enforce compliance controls on individual Glacier vaults via a lockable policy (Vault Lock policy). Once locked, the Vault Lock policy becomes immutable and Glacier will enforce the prescribed controls to help achieve your compliance objectives.",
      "Option C is wrong as Bulk retrievals are Glacier’s lowest-cost retrieval option, enabling you to retrieve large amounts, even petabytes, of data inexpensively in a day. Bulk retrievals typically complete within 5 – 12 hours.",
      "Option D is wrong as Standard retrievals allow you to access any of your archives within several hours. Standard retrievals typically complete within 3 – 5 hours."
    ],
    "id": 408,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use AWS EMR to store and process the streams.",
      "B.Use AWS Kinesis Data Streams to store, process and analyze the data.",
      "C.Use AWS SQS to store the data and analyze the data",
      "D.Use SNS to store the data and analyze the data "
    ],
    "detail": "A company is planning on testing a large set of IoT enabled devices. These devices will be streaming data every second. A proper service needs to be chosen in AWS which could be used to collect and analyze these streams in real time. Which of the following could be used for this purpose in a performant and cost effective way?",
    "explanation": [
      "Correct answer is B as Amazon Kinesis makes it easy to collect, store, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information.",
      "Refer AWS documentation - Kinesis Data Streams",
      "Use Amazon Kinesis Data Streams to collect and process large streams of data records in real time.",
      "You'll create data-processing applications, known as \nAmazon Kinesis Data Streams applications. A typical Amazon Kinesis Data Streams application reads data from a \nKinesis data stream as data records. These applications can use the Kinesis Client Library, and they can run on Amazon EC2 instances. The processed records can be sent to dashboards, used to generate alerts, dynamically change pricing and advertising strategies, or send data to a variety of other AWS services."
    ],
    "id": 409,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.On-Demand Instances",
      "B.Spot Instances + On-Demand Instances",
      "C.Reserved Instances (3 year contract)",
      "D.Dedicated Instances "
    ],
    "detail": "Your company is running an online sale over the coming weekend, and you will need additional compute resources to carry the additional load. If the availability of these additional instances could be guaranteed for the duration of the sale, what is the most cost-effective EC2 pricing option for this job?",
    "explanation": [
      "Correct answer is A as On Demand instances would help provision extra capacity with the availability of these additional instances guaranteed as compared to the Spot instances.",
      "Refer AWS documentation - EC2 Purchasing Options",
      "Option B is wrong as Spot instances might be cost effective but does not guarantee availability",
      "Option C is wrong as using Reserved instances is not cost effective",
      "Option D is wrong as Dedicated instances just provided isolated hardware separated from other clients and has most cost."
    ],
    "id": 410,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Penetration testing",
      "B.Operating system account security management",
      "C.Threat modeling",
      "D.User group access management",
      "E.Static code analysis "
    ],
    "detail": "In the shared security model, AWS is responsible for which of the following security best practices. Choose 3 answers.",
    "explanation": [
      "Correct answer are A, C & E as AWS handles them as a part of their development cycle.",
      "Refer AWS Security Whitepaper",
      "AWS’s development process follows :-",
      "Option B & D are wrong as OS security management and User groups access management using IAM is user responsibility."
    ],
    "id": 411,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.The order that messages are received in is not guaranteed in SQS",
      "B.Message 2 uses JSON formatting",
      "C.You failed to set the correct permissions on message 2",
      "D.Your application is using short polling "
    ],
    "detail": "You create an SQS queue and decide to test it out by creating a simple application which looks for messages in the queue. When a message is retrieved, the application is supposed to delete the message. You create three test messages in your SQS queue and discover that messages 1 and 3 are quickly deleted but message 2 remains in the queue. What is a possible cause for this behavior? Choose the 2 correct answers",
    "explanation": [
      "Correct answer is A & D as the message might not have been received cause the application is using Short polling which would not return all the messages and the messages are not received in order and the application was able to process 1 & 3 but hasn't received 2 yet.",
      "Refer AWS documentation - SQS Short Polling & Message Ordering",
      "Amazon SQS uses short polling by default, querying only a subset of the servers (based on a weighted random distribution) to determine whether any messages are available for inclusion in the response.",
      "A standard queue makes a best effort to preserve the order of messages, but more than one copy of a message might be delivered out of order."
    ],
    "id": 412,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Merge the two companies, AWS accounts by going to the AWS console and selecting the \"Merge accounts\" option.",
      "B.Invite the acquired company's AWS account to join the existing company’s organization using AWS Organizations.",
      "C.Migrate all AWS resources from the acquired company's AWS account to the master payer account of the existing company.",
      "D.Create a new AWS account and set it up as the master payer. Move the AWS resources from both the existing and acquired companies' AWS accounts to the new account. "
    ],
    "detail": "An organization that is currently using consolidated billing has recently acquired another company that already has a number of AWS accounts. How could an Administrator ensure that all AWS accounts, from both the existing company and the acquired company, are billed to a single account?",
    "explanation": [
      "Correct answer is B as the existing company can be join into existing company using AWS organizations",
      "Refer AWS documentation - AWS Organizations",
      "AWS Organizations helps you manage policies for multiple AWS accounts. With Organizations, you can create groups of accounts, and then attach policies to a group to ensure the correct policies are applied across the accounts. AWS Organizations enables you to set up a single payment method for all the AWS accounts in your organization through consolidated billing."
    ],
    "id": 413,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.When assigning an EC2 IAM role to your instance in the console, in the \"Chosen SDK\" drop-down list, select the SDK that you are using, and the instance will configure the correct SDK on launch with the API keys.",
      "B.Within your application code, make a GET request to the IAM Service API to retrieve credentials for your user. ",
      "C.When using AWS SDKs and Amazon EC2 roles, you do not have to explicitly retrieve API keys, because the SDK handles retrieving them from the Amazon EC2 MetaData service. ",
      "D.Within your application code, configure the AWS SDK to get the API keys from environment variables, because assigning an Amazon EC2 role stores keys in environment variables on launch. "
    ],
    "detail": "You have an application running on an Amazon EC2 instance and you are using IAM roles to securely access AWS Service APIs. How can you configure your application running on that instance to retrieve the API keys for use with the AWS SDKs?",
    "explanation": [
      "Correct answer is C as the best practice is to define an IAM role with the EC2 instance which would help automatically generated temporary access keys which are frequently rotated. AWS SDKs and CLI handled the access keys automatically.",
      "Refer AWS documentation - Access Keys Best Practices",
      "Do not pass an access key to the application, embed it in the application, or have the application read a key from a source such as an Amazon S3 bucket (even if the bucket is encrypted). Instead, define an IAM role that has appropriate permissions for your application and launch the Amazon EC2 instance with roles for EC2. This associates an IAM role with the Amazon EC2 instance and lets the application get temporary security credentials that it can in turn use to make AWS calls. The AWS SDKs and the AWS CLI can get temporary credentials from the role automatically."
    ],
    "id": 414,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use IAM permissions to control the access.",
      "B.Use AWS Access keys to manage the access.",
      "C.Use AWS KMS service to manage the access.",
      "D.Use AWS Config Service to control the access. "
    ],
    "detail": "Your company is planning on using the API Gateway service to manage APIs for developers and users. Inline with the security best practices, there is a need to segregate the access rights for both developers and users. How can this be accomplished?",
    "explanation": [
      "Correct answer is A as IAM permissions is integrated with API Gateway and can be used for segregate access.",
      "Refer AWS documentation - API Gateway Permissions",
      "You control access to Amazon API Gateway with IAM permissions by controlling access to the following two API Gateway component processes:"
    ],
    "id": 415,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS volume",
      "B.Amazon S3",
      "C.Amazon EC2 instance store",
      "D.Amazon RDS instance "
    ],
    "detail": "A company is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower Overall CPU resources for the web tier?",
    "explanation": [
      "Correct answer is B as Amazon S3 provides durable infrastructure to store data and is designed for durability of 99.999999999% of objects. Data is redundantly stored across multiple facilities and multiple devices in each facility."
    ],
    "id": 416,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Using as an endpoint to collect thousands of data points per hour from a distributed fleet of sensors",
      "B.Managing a multi-step and multi-decision checkout process of an e-commerce website",
      "C.Orchestrating the execution of distributed and auditable business processes",
      "D.Using as an SNS (Simple Notification Service) endpoint to trigger execution of video transcoding jobs",
      "E.Using as a distributed session store for your web application "
    ],
    "detail": "For which of the following use cases are Simple Workflow Service (SWF) and Amazon EC2 an appropriate solution? Choose 2 answers",
    "explanation": [
      "Correct answer is B & C as SWF is more suited for Orchestrating business process workflows and implementing multi step and multi decision flows with coordination.",
      "Refer AWS documentation - SWF FAQs",
      "Amazon Simple Workflow Service (SWF) is a web service that makes it easy to coordinate work across distributed application components. Amazon SWF enables applications for a range of use cases, including media processing, web application back-ends, business process workflows, and analytics pipelines, to be designed as a coordination of tasks. Tasks represent invocations of various processing steps in an application which can be performed by executable code, web service calls, human actions, and scripts.",
      "Option A is wrong as Kinesis or DynamoDB can be used for the same",
      "Option D is wrong as this can be easily done using S3 event notifications",
      "Option E is wrong as distributed session store can be implemented using ElastiCache, DynamoDB"
    ],
    "id": 417,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.VPC and security group configuration",
      "B.Physical security of hardware",
      "C.Application authentication",
      "D.Virtualization infrastructure",
      "E.Guest operating systems "
    ],
    "detail": "Which aspects of Amazon EC2 security are the responsibility of AWS? Choose 2 answers",
    "explanation": [
      "Correct answer are B & D as the Virtualization infrastructure and the physical security of the hardware is AWS's responsibility. Customer is responsible for guest OS, VPC, security configuration and Application authentication.",
      "Refer AWS documentation - AWS Shared Responsibility Model",
      "Security and Compliance is a shared responsibility between AWS and the customer. This shared model can help relieve customer’s operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates. The customer assumes responsibility and management of the guest operating system (including updates and security patches), other associated application software as well as the configuration of the AWS provided security group firewall."
    ],
    "id": 418,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM Role that allows write access to the DynamoDB table",
      "B.Add an IAM Role to a running EC2 instance.",
      "C.Create an IAM User that allows write access to the DynamoDB table.",
      "D.Add an IAM User to a running EC2 instance.",
      "E.Launch an EC2 Instance with the IAM Role included in the launch configuration "
    ],
    "detail": "Which of the following items are required to allow an application deployed on an EC2 instance to write data to a DynamoDB table? Assume that no security keys are allowed to be stored on the EC2 instance. (Choose 2 answers)",
    "explanation": [
      "Correct answer are A & E as you would define an IAM role with proper permissions and attach the IAM role to EC2 instance, which it can assume.",
      "NOTE: Option B is valid now as per the latest AWS enhancements - Attach Role to running EC2 instance",
      "Option C and D are wrong as IAM user cannot be added to an EC2 instance"
    ],
    "id": 419,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Subscribe your queue to an SNS topic instead.",
      "B.Use as long of a poll as possible, instead of short polls.",
      "C.Alter your visibility timeout to be shorter.",
      "D.Use sqsd on your EC2 instances. "
    ],
    "detail": "You are getting a lot of empty receive requests when using Amazon SQS. This is making a lot of unnecessary network load on your instances. What can you do to reduce this load?",
    "explanation": [
      "Correct answer is B",
      "When using Short polling only a weighted random set of machines is sampled for messages and messages found on those machines returned.",
      "Refer to AWS Documentation - SQS API Receive Message & SQS Long Polling",
      "Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response. If this happens, repeat the request.",
      "Long polling eliminates false empty responses by querying all (rather than a limited number) of the servers."
    ],
    "id": 420,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create a CloudWatch alarm for CloudTrail events.",
      "B.Create a CloudWatch alarm for Trusted Advisor.",
      "C.Create a CloudWatch alarm for VPC flow logs.",
      "D.Create a CloudWatch alarm for SSH Key usage. "
    ],
    "detail": "Your company has set up an application in eu-west-1 with a disaster recovery site in eu-central-1. You want to be notified of any AWS API activity in regions other than these two. How can you monitor AWS API activity in other regions?",
    "explanation": [
      "Correct answer is A as CloudTrail can be configured to deliver trail logs from multiple regions to a single AWS region S3 or CloudWatch logs group. CloudWatch alarms can then be configured for monitoring.",
      "Refer AWS documentation - Receive CloudTrail logs from Multiple Regions",
      "You can configure CloudTrail to deliver log files from multiple regions to a single S3 bucket for a single account. For example, you have a trail in the US West (Oregon) Region that is configured to deliver log files to a S3 bucket, and a CloudWatch Logs log group. When you apply the trail to all regions, CloudTrail creates a new trail in all other regions. This trail has the original trail configuration. CloudTrail delivers log files to the same S3 bucket and CloudWatch Logs log group."
    ],
    "id": 421,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use CloudFormation templates to have the web site setup.",
      "B.Create an EC2 Instance, install the web server and then have the site setup.",
      "C.Use S3 web site hosting to host the web site.",
      "D.Use Elastic Beanstalk to host the web site. "
    ],
    "detail": "A company is required to host a static web site in AWS. Which of the following would be an easy and cost-effective way to set this up?",
    "explanation": [
      "Correct answer is C as S3 provides the best option with durable, scalable and cost effective solution for hosting static websites. S3 doesn't need any resources like EC2 instances or Webservers to host the site.",
      "Refer AWS documentation - Static Website Hosting",
      "Option B and D are wrong as they are not cost-effective.",
      "Option A is wrong as CloudFormation helps only in improving the setup but does not reduce costs."
    ],
    "id": 422,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.SQS can accommodate message payloads of any size",
      "B.SQS check the health of the worker instances ",
      "C.SQS synchronously provides transcoding output",
      "D.SQS decouples the transcoding task from the upload "
    ],
    "detail": "A company has a workflow that uploads video files from their data center to AWS for transcoding. They use Amazon EC2 worker instances that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?",
    "explanation": [
      "Correct answer is D as SQS helps decouple the upload task from the transcoding task. The upload and transcode does not need to be synchronous and can be queued up. SQS will also help scale the capacity as the demand for transcoding changes.",
      "Option A is wrong as ideally SQS messages are limited to 256KB and can be extended to 2 GB using the SQS Extended Library",
      "The minimum message size is 1 byte (1 character). The maximum is 262,144 bytes (256 KB).",
      "To send messages larger than 256 KB, you can use the Amazon SQS Extended Client Library for Java. This library allows you to send an Amazon SQS message that contains a reference to a message payload in Amazon S3. The maximum payload size is 2 GB.",
      "Option B is wrong as SQS does not help check the health of worker instances.",
      "Option C is wrong as SQS helps handle the task asynchronously."
    ],
    "id": 423,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use Amazon Kinesis with AWS CloudTrail for auditing the specific times when profile photos are uploaded. ",
      "B.Use Amazon EBS volumes with IAM policies restricting user access to specific time periods. ",
      "C.Use Amazon S3 with the default private access policy and generate pre-signed URLs each time a new site is created. ",
      "D.Use Amazon CloudFront with AWS CloudTrail for auditing the specific times when profile photos are uploaded. "
    ],
    "detail": "A solution architect is designing new social media application. The application must provide a secure method for uploading profile photos. Each user should be able to upload a profile photo into a shared storage location after profile is created. Which approach will meet all of these requirements?",
    "explanation": [
      "Correct answer is C as Amazon S3 provides an ideal solution to store unstructured data like images. The security can be added by making the buckets private and using Pre-signed URL to upload the profile photo.",
      "Refer AWS documentation - S3 Upload using Presigned URLs",
      "A presigned URL gives you access to the object identified in the URL, provided that the creator of the presigned URL has permissions to access that object. That is, if you receive a presigned URL to upload an object, you can upload the object only if the creator of the presigned URL has the necessary permissions to upload that object.",
      "All objects and buckets by default are private. The presigned URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. When you create a presigned URL, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (PUT for uploading objects), and an expiration date and time. The presigned URLs are valid only for the specified duration.",
      "You can generate a presigned URL programmatically using the AWS SDK for Java or the AWS SDK for .NET. If you are using Microsoft Visual Studio, you can also use AWS Explorer to generate a presigned object URL without writing any code. Anyone who receives a valid presigned URL can then programmatically upload an object.",
      "Options A & D is wrong as the solution does not provide a storage and using CloudTrail is a post step and does not provide a secure way for user to upload photos.",
      "Option B is wrong as EBS volumes are not an ideal option to store images. Also, they cannot be shared across instances."
    ],
    "id": 424,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a duplicate of the entire infrastructure in another region.",
      "B.Create a Pilot Light infrastructure in another region.",
      "C.Use Elastic Beanstalk to create another copy of the infrastructure in another region if a disaster occurs in the primary region.",
      "D.Use CloudFormation to spin up resources in another region if a disaster occurs in the primary region. "
    ],
    "detail": "Your company’s management team has asked you to devise a disaster recovery strategy for the current resources hosted in AWS. They want to minimize costs, but be able to spin up the infrastructure, with critical data, when needed in another region. How could you accomplish this with the LEAST costs in mind?",
    "explanation": [
      "Correct answer is B as pilot light helps setting up all critical pieces like databases and keeping all other pieces like AMI prepared so that the infrastructure can be provisioned in a separate region quickly.",
      "Refer AWS Whitepaper - Disaster Recovery",
      "The term pilot light is often used to describe a DR scenario in which a minimal version of an environment is always running in the cloud. The idea of the pilot light is an analogy that comes from the gas heater. In a gas heater, a small flame that’s always on can quickly ignite the entire furnace to heat up a house.",
      "This scenario is similar to a backup-and-restore scenario. For example, with AWS you can maintain a pilot light by configuring and running the most critical core elements of your system in AWS. When the time comes for recovery, you can rapidly provision a full-scale production environment around the critical core.",
      "Infrastructure elements for the pilot light itself typically include your database servers, which would replicate data to Amazon EC2 or Amazon RDS. Depending on the system, there might be other critical data outside of the database that needs to be replicated to AWS. This is the critical core of the system (the pilot light) around which all other infrastructure pieces in AWS (the rest of the furnace) can quickly be provisioned to restore the complete system.",
      "To provision the remainder of the infrastructure to restore business-critical services, you would typically have some pre-configured servers bundled as Amazon Machine Images (AMIs), which are ready to be started up at a moment’s notice. When starting recovery, instances from these AMIs come up quickly with their pre-defined role (for example, Web or App Server) within the deployment around the pilot light.",
      "Option A is wrong as it is not cost effective",
      "Option C & D is wrong as CloudFormation & Elastic Beanstalk would help setup the infrastructure but the data needs to replicated."
    ],
    "id": 425,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Increase your network bandwidth to provide faster throughput to S3",
      "B.Upload the files in parallel to S3",
      "C.Pack all files into a single archive, upload it to S3, then extract the files in AWS",
      "D.Use AWS Import/Export to transfer the video files "
    ],
    "detail": "A media company produces new video files on-premises every day with a total size of around 100GB after compression. All files have a size of 1-2 GB and need to be uploaded to Amazon S3 every night in a fixed time window between 3am and 5am. Current upload takes almost 3 hours, although less than half of the available bandwidth is used. What step(s) would ensure that the file uploads is able to complete in the allotted time window?",
    "explanation": [
      "Correct answer is B as by using Multi-part upload \nyou can now break your larger objects into chunks and upload a number of chunks in parallel. If the upload of a chunk fails, you can simply restart it. You’ll be able to improve your overall upload speed by taking advantage of parallelism and use the bandwidth effectively."
    ],
    "id": 426,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Delete the un-utilized EBS volumes once the instance is terminated",
      "B.Delete the Auto Scaling launch configuration after the instances are terminated",
      "C.Release the elastic IP if not required once the instance is terminated",
      "D.Delete the AWS ELB after the instances are terminated "
    ],
    "detail": "A user is trying to save some cost on the AWS services. Which of the below mentioned options will not help him save cost?",
    "explanation": [
      "Correct answer is B as Auto Scaling Launch config is just a configuration and does not cost anything.",
      "Option A, C and D all have a cost associated with them"
    ],
    "id": 427,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.EC2 instance Operating System updates",
      "B.EBS Encryption-at-rest algorithms",
      "C.IAM user password policies",
      "D.AWS Hypervisor software updates "
    ],
    "detail": "A company is auditing their infrastructure to obtain a compliance certification. Which of the following options are the company's responsibility within the Shared Responsibility Model? Choose 2 answers",
    "explanation": [
      "Correct answers are A & C as Company is responsible for guest OS update and defining and maintaining password policies.",
      "Refer AWS documentation - Shared Responsibility Model",
      "If a customer deploys an Amazon EC2 instance, they are responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance.",
      "Option B and D are AWS responsbility."
    ],
    "id": 428,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Cross-Region Replication for the bucket.",
      "B.Write a script to copy the objects to another bucket in the destination region.",
      "C.Create an S3 snapshot in the destination region.",
      "D.Enable versioning which will copy the objects to the destination region. "
    ],
    "detail": "A company using S3 needs to ensure that objects in an S3 bucket are available in another region. This is because of the criticality of the data that is hosted in the S3 bucket. How can they achieve this in the easiest way possible?",
    "explanation": [
      "Correct answer is A as S3 allows buckets to be configured for cross-region replication.",
      "Refer AWS documentation - S3 Cross Region Replication",
      "Cross-region replication is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions. We refer to these buckets as \nsource bucket and \ndestination bucket. These buckets can be owned by different AWS accounts.",
      "Option B is wrong as custom script is not an efficient way.",
      "Option C is wrong as there are S3 snapshots only objects",
      "Option D is wrong as versioning does not copy objects across regions, but just maintains the previous versions in the same region."
    ],
    "id": 429,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS EBS with Encryption enabled",
      "B.AWS S3 with SSE",
      "C.AWS RDS with Encryption enabled",
      "D.AWS Glacier "
    ],
    "detail": "An organization is generating critical digital policy files with sensitive information, which are required by the admins for verification. Once the files are verified they may not be required in the future unless there is some compliance issue. If the organization wants to save them in a secured with encryption and cost-effective way, which is the best possible solution?",
    "explanation": [
      "Correct answer is D as Glacier offers the most cost effective solution for archival and by default encrypts the underlying data.",
      "Refer AWS documentation - Glacier",
      "Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and flexible storage for data backup and archival. With Amazon Glacier, customers can reliably store their data for as little as $0.004 per gigabyte per month. Amazon Glacier enables customers to offload the administrative burdens of operating and scaling storage to AWS, so that they don’t have to worry about capacity planning, hardware provisioning, data replication, hardware failure detection and repair, or time-consuming hardware migrations.",
      "Amazon Glacier automatically encrypts data at rest using Advanced Encryption Standard (AES) 256-bit symmetric keys and supports secure transfer of your data over Secure Sockets Layer (SSL).",
      "Yes, all data in the service will be encrypted on the server side. Amazon Glacier handles key management and key protection for you. Amazon Glacier uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256). 256-bit is the largest key size defined for AES. Customers wishing to manage their own keys can encrypt data prior to uploading it.",
      "Option A,B and C are wrong as they are not cost effective options."
    ],
    "id": 430,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM user and generate encryption keys for that user. Create a policy for RedShift read-only access. Embed the keys in the application.",
      "B.Create a HSM client certificate in Redshift and authenticate using this certificate.",
      "C.Create a RedShift read-only access policy in IAM and embed those credentials in the application.",
      "D.Use roles that allow a web identity federated user to assume a role that allows access to the RedShift table by providing temporary credentials. "
    ],
    "detail": "You have just developed a new mobile application that handles analytics workloads on large scale datasets that are stored on Amazon Redshift. Consequently, the application needs to access Amazon Redshift tables. Which of the below methods would be the best, both practically and security-wise, to access the tables? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is D as the best approach is to use IAM role using web identity federation to generate temporary credentials and access redshift tables which can be access using jdbc/odbc via sdks.",
      "Option A & C are wrong as embedding credentials is not recommended.",
      "Option A & B are wrong as they target the data encryption rather then the access issue."
    ],
    "id": 431,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances",
      "B.Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.",
      "C.Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB.",
      "D.Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instances public IP address to the payment validation whitelist API. "
    ],
    "detail": "A web company is looking to implement an external payment service into their highly available application deployed in a VPC. Their application EC2 instances are behind a public facing ELB. Auto scaling is used to add additional instances as traffic increases. Under normal load the application runs 2 instances in the Auto Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet, which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?",
    "explanation": [
      "Correct answer is A as instances can route the traffic through a HA NAT with its IP being used.",
      "Option B is wrong as Internet gateway is only to route traffic and does not provide the its IP address as the origin of requests.",
      "Option C is wrong as ELB does not have a fixed IP address and only allows inbound traffic.",
      "Option D is wrong as would exceed the allowed 4 IP addresses"
    ],
    "id": 432,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.You must know how many customers that company has today, because this is critical in understanding what their customer base will be in two years.",
      "B.You must find out total number of requests per second at peak usage.",
      "C.You must know the size of the individual objects being written to S3 in order to properly design the key namespace.",
      "D.In order to build the key namespace correctly, you must understand the total amount of storage needs for each S3 bucket. "
    ],
    "detail": "A startup company hired you to help them build a mobile application that will ultimately store billions of image and videos in Amazon S3. The company is lean on funding, and wants to minimize operational costs, however, they have an aggressive marketing plan, and expect to double their current installation base every six months. Due to the nature of their business, they are expecting sudden and large increases to traffic to and from S3, and need to ensure that it can handle the performance needs of their application. What other information must you gather from this customer in order to determine whether S3 is the right option?",
    "explanation": [
      "Correct answer is B as there is a sudden spike expected. S3 costing depends on Storage, Requests and Data transfer out. Amazon S3 scales to support very high request rates. However, beyond a limit a AWS support request needs to be raised due to which total number of requests needs to be taken into account.",
      "Option A is wrong as number of customers do not matter but only the requests",
      "Option C is wrong as individual object size do not matter but the total number of objects matter for performance.",
      "Option D is wrong as S3 offers unlimited storage"
    ],
    "id": 433,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.On-Demand Instances",
      "B.Spot Instances",
      "C.Standard Reserved Instances",
      "D.Convertible Reserved Instances "
    ],
    "detail": "Your company has a set of EC2 Instances that would be hosting production-based applications. These applications would be running 24x7 throughout the year. You need to choose the most cost-effective pricing option for the Instances. The Instance type would need to be upgraded during the year depending on the usage of the application?",
    "explanation": [
      "Correct answer is D as Convertible Reserved instances are preferred if your computing needs change, you may be able to modify or exchange your Reserved Instance.",
      "Refer AWS documentation - Reserved Instance types",
      "Option A is wrong as On-demand instances are not suited for applications needing consistent usage.",
      "Option B is wrong as spot instances are not suited for preditable continous usage.",
      "Option C is wrong as Standard Reserved Instance does not allow instance type to be modified."
    ],
    "id": 434,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.It is not possible to do this with SQS",
      "B.You can use sequencing information on each message",
      "C.You can do this with SQS but you also need to use SWF",
      "D.Messages will arrive in the same order by default "
    ],
    "detail": "You are building an online store on AWS that uses SQS Standard Queue to process your customer orders. Your backend system needs those messages in the same sequence the customer orders have been put in. How can you achieve that?",
    "explanation": [
      "Correct answer is B as SQS Standard Queue does not guarantee message ordering and it can be implemented either by having sequencing information with each message or using FIFO queues",
      "Refer AWS documentation - SQS Standard Queue - Messaging Order",
      "A standard queue makes a best effort to preserve the order of messages, but more than one copy of a message might be delivered out of order. If your system requires that order be preserved, we recommend using a FIFO (First-In-First-Out) queue or adding sequencing information in each message so you can reorder the messages when they're received."
    ],
    "id": 435,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Implement an Amazon SWF task to deliver the message to each partner. Initiate an Amazon SWF workflow execution.",
      "B.Send the event as an Amazon SNS message. Instruct your partners to create an HTTP. Subscribe their HTTP endpoint to the Amazon SNS topic.",
      "C.Create one SQS queue per partner. Iterate through the queues and write the event to each one. Partners retrieve messages from their queue.",
      "D.Send the event as an Amazon SNS message. Create one SQS queue per partner that subscribes to the Amazon SNS topic. Partners retrieve messages from their queue. "
    ],
    "detail": "Your application triggers events that must be delivered to all your partners. The exact partner list is constantly changing: some partners run a highly available endpoint, and other partners’ endpoints are online only a few hours each night. Your application is mission-critical, and communication with your partners must not introduce delay in its operation. A delay in delivering the event to one partner cannot delay delivery to other partners. What is an appropriate way to code this?",
    "explanation": [
      "Correct answer is D as there are two challenges here: the command must be “fanned out” to a variable pool of partners, and your app must be decoupled from the partners because they are not highly available. Sending the command as an SNS message achieves the fan-out via its publication/subscribe model, and using an SQS queue for each partner decouples your app from the partners.",
      "Option A is wrong as it would be difficult to write an Amazon SWF workflow for a rapidly changing set of partners.",
      "Option C is wrong as writing the message to each queue directly would cause more latency for your app and would require your app to monitor which partners were active."
    ],
    "id": 436,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Route 53 Record Sets",
      "B.IAM Roles",
      "C.Elastic IP Addresses (EIP)",
      "D.EC2 Key Pairs",
      "E.Launch configurations",
      "F.Security Groups "
    ],
    "detail": "You would like to create a mirror image of your production environment in another region for disaster recovery purposes. Which of the following AWS resources do not need to be recreated in the second region? (Choose 2 answers)",
    "explanation": [
      "Correct answer are A & B as IAM and Route 53 are global scoped and not limited to a single region.",
      "Refer AWS Global vs Regional vs AZ scoped resources",
      "Option C, D, E and F are all regional scope.",
      "EC2 Key Pairs - \nkey pairs that you create using Amazon EC2 are tied to the region",
      "Security Groups - \nA security group is tied to a region and can be assigned only to instances in the same region",
      "Elastic IP address - \nAn Elastic IP address is for use in a specific region only.",
      "Auto Scaling Launch Configuration - \nAuto Scaling resources that you create are tied to the region you specify and are not replicated across regions"
    ],
    "id": 437,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.An IAM trust policy allows the EC2 instance to assume an EC2 instance role.",
      "B.An IAM access policy allows the EC2 role to access S3 objects.",
      "C.An IAM bucket policy allows the EC2 role to access S3 objects.",
      "D.An IAM trust policy allows applications running on the EC2 instance to assume as EC2 role",
      "E.An IAM trust policy allows applications running on the EC2 instance to access S3 objects. "
    ],
    "detail": "Your application is leveraging IAM Roles for EC2 for accessing object stored in S3. Which two of the following IAM policies control access to your S3 objects.",
    "explanation": [
      "Correct answer is A & B as trust and access policy is needed.",
      "Trust policy – specify the entity like EC2 instance that can assume the role",
      "Permission (Access) policy – specify the permissions the application has once the role is assumed",
      "Option C is wrong as Bucket policy is defined with S3 and not with IAM",
      "Option D is wrong as Trust policy allows EC2 instance to assume the role",
      "Option E is wrong as Applications can access S3 through EC2 assuming the role"
    ],
    "id": 438,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Storing metadata for Amazon S3 objects",
      "B.Create a custom REST API endpoint handler using Amazon API Gateway",
      "C.Managing a multi-step and multi-decision checkout process of an e-commerce website",
      "D.Using as an endpoint to collect thousands of data points per hour from a distributed fleet of sensors",
      "E.Create an email message handler when a new message arrives using SES "
    ],
    "detail": "An organization is exploring AWS Lambda. Which use case are not valid for AWS Lambda? Choose 3 answers",
    "explanation": [
      "Correct answer are A, C & D",
      "Option A is wrong as DynamoDB is more suitable to hold S3 object metadata",
      "Option C is wrong as SWF is more suitable to implement multi-step and multi-decision checkout process",
      "Option D is wrong as Kinesis is more suitable as the endpoint to collect sensor data",
      "Refer AWS documentation - Lambda Use Cases"
    ],
    "id": 439,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Configure an EBS volume, open the security group to allow for NFS, and mount the volume on the local network",
      "B.Use Amazon Storage Gateway and gateway-cached volumes to store the data locally and asynchronously backup point-in-time snapshots to S3",
      "C.Use Amazon Import/Export",
      "D.Use Amazon Storage Gateway and gateway-stored volumes to store the data locally and asynchronously backup point-in-time snapshots to S3 "
    ],
    "detail": "Your company wants to backup the onsite file server to AWS but does not want to serve the files from S3 to your office network when files need accessed. Which service and setup would you use to accomplish this task?",
    "explanation": [
      "Correct answer is D as the company wants to backup the data, but still wants the data to be available on premises as the primary source, Storage Gateway - Stored volumes are the best option",
      "Refer AWS documentation - Storage Gateway",
      "Volume gateway provides cloud-backed storage volumes that you can mount as Internet Small Computer System Interface (iSCSI) devices from your on-premises application servers. The gateway supports the following volume configurations:"
    ],
    "id": 440,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Yes, as long as the VPCs’ CIDR blocks don’t overlap.",
      "B.Yes, as long as all EC2 instances have a public IP.",
      "C.Yes, as long as the VPC’s are in the same region.",
      "D.Yes, as long as the VPCs are in the same account. "
    ],
    "detail": "You manage EC2 instances in two different VPCs and you would like instances in both VPCs to be able to easily communicate with each other. You are considering using VPC peering. Will this work? (Choose Two)",
    "explanation": [
      "Correct answer are A & C.",
      "VPC peering can be done only if the VPC's CIDR blocks should not overlap and should be within the same region. VPC peering connection can be established between your own VPCs, or with a VPC in another AWS account within a single region.",
      "NOTE: C is not valid anymore as Inter Region VPC peering is now support by AWS - Circa Nov 2017.",
      "Option B is wrong as EC2 need not have public IP addresses and can be in private subnets.",
      "Option D is wrong as VPC peering can span across AWS accounts."
    ],
    "id": 441,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create a bucket policy and apply it to the bucket",
      "B.Create a NACL and attach it to the VPC of the bucket",
      "C.Create an ACL and apply it to all objects in the bucket",
      "D.Modify the IAM policies of any users that would access the bucket "
    ],
    "detail": "Which method can be used to prevent an IP address block from accessing public objects in an S3 bucket?",
    "explanation": [
      "Correct answer is A as a bucket policy can be used to restrict access to all objects within a bucket to specific IP addresses",
      "Refer to AWS documentation for S3 Bucket Policy",
      "Option B is wrong as NACL will help only control access to resources within the VPC and S3 is public",
      "Option C and D are wrong as ACL would not help control access from specific IP and nor does IAM user policy."
    ],
    "id": 442,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.To prevent data corruption, if the EC2 instance does not respond to a customizable number of pings, the message is deleted",
      "B.To prevent data loss, it remains in the queue in a locked state until the EC2 instance comes back online",
      "C.To prevent data corruption, when the message hide timeout expires, the message is duplicated, the original message is archived, and the duplicate message becomes available for processing by other EC2 instances",
      "D.When the message visibility timeout expires, the message becomes available for processing by other EC2 instances "
    ],
    "detail": "An EC2 instance retrieves a message from an SQS queue, begins processing the message, then crashes. What happens to the message? Choose the correct answer",
    "explanation": [
      "Correct answer is D as the message once consume is unavailable for other consumers till the message visibility timeout expires. During the timeout, the consume must delete the message once processed. If the EC2 instance crashes, the message is available for others after the timeout expires.",
      "Refer AWS documentation - SQS Visibility Timeout",
      "When a consumer receives and processes a message from a queue, the message remains in the queue. Amazon SQS doesn't automatically delete the message: Because it's a distributed system, there is no guarantee that the component will actually receive the message (the connection can break or a component can fail to receive the message). Thus, the consumer must delete the message from the queue after receiving and processing it."
    ],
    "id": 443,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.IAM roles for EC2 Instances",
      "B.IAM roles for tasks",
      "C.IAM Instance profile for EC2 Instances",
      "D.Security Group rules "
    ],
    "detail": "A Solutions Architect is designing a shared service for hosting containers from several customers on Amazon ECS. These containers will use several AWS services. A container from one customer should not be able access data from another customer. Which of the below solutions should the architect use to meet these requirements?",
    "explanation": [
      "Correct answer is B as IAM role needs to be associated with the ECS task definition.",
      "Refer AWS documentation - ECS Task IAM Role",
      "With IAM roles for Amazon ECS tasks, you can specify an IAM role that can be used by the containers in a task. Applications must sign their AWS API requests with AWS credentials, and this feature provides a strategy for managing credentials for your applications to use, similar to the way that Amazon EC2 instance profiles provide credentials to EC2 instances. Instead of creating and distributing your AWS credentials to the containers or using the EC2 instance’s role, you can associate an IAM role with an ECS task definition or RunTask API operation. The applications in the task’s containers can then use the AWS SDK or CLI to make API requests to authorized AWS services."
    ],
    "id": 444,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Multi AZ instances will provide HA with ELB",
      "B.Multi AZ instances are not possible with a single ELB",
      "C.Multi AZ instances will provide scalability with ELB",
      "D.The user can achieve both HA and scalability with ELB "
    ],
    "detail": "A user has configured ELB with two instances running in separate AZs of the same region? Which of the below mentioned statement is true?",
    "explanation": [
      "Correct answer is A as ELB with multiple AZs provide High Availability solution, it does not provide scalability which needs to be implemented with Auto Scaling in combination with ELB.",
      "Option B is wrong as ELB does enable Multi-AZ deployment for HA.",
      "Options C & D are wrong as ELB does not provide scalability. Scalability is provided by Auto Scaling."
    ],
    "id": 445,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.S3 Object does not have encryption enabled",
      "B.File size is more than the disk storage provided with Lambda",
      "C.Lambda does not have permissions to upload data to RDS",
      "D.Lambda does not have memory to process the file "
    ],
    "detail": "Your organization has developed a Lambda function to respond to S3 as an event source. Whenever an CSV file is uploaded, the Lambda function is invoked, which in then stores the file, and inserts the records into an RDS database. Lambda function is failing when a user has uploaded an 600MB file. What can be the reason ?",
    "explanation": [
      "Correct answer is B as one of the valid reasons can be the file has hit AWS Lambda limits where only 512 MB of space is provided.",
      "Refer AWS documentation - Lambda Limits"
    ],
    "id": 446,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Use encrypted EBS volumes so that the snapshot will be encrypted by AWS",
      "B.While creating a snapshot select the snapshot with encryption",
      "C.By default the snapshot is encrypted by AWS",
      "D.Enable server side encryption for the snapshot using S3 "
    ],
    "detail": "A user is planning to schedule a backup for an EBS volume. The user wants security of the snapshot data. How can the user achieve data encryption with a snapshot?",
    "explanation": [
      "Correct answer is A as snapshots for encrypted volumes are always automatically encrypted.",
      "Option B is wrong as you cannot create an encrypted snapshot from unencrypted volume, but you need to create and snapshot and then create an encrypted copy from that snapshot.",
      "Option C is wrong as snapshots are encrypted by default, only for encrypted volumes",
      "Option D is wrong as EBS encryption does not work with S3 SSE"
    ],
    "id": 447,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Take periodic snapshots of the EBS volume",
      "B.Use a third party Incremental backup application to back up to Amazon Glacier",
      "C.Periodically back up all data to a single compressed archive and archive to Amazon S3 using a parallelized multi-part upload",
      "D.Create another EBS volume in the second Availability Zone attach it to the Amazon EC2 instance, and use a disk manager to mirror me two disks "
    ],
    "detail": "You have a server with a 500GB Amazon EBS data volume. The volume is 80% full. You need to back up the volume at regular intervals and be able to re-create the volume in a new Availability Zone in the shortest time possible. All applications using the volume can be paused for a period of a few minutes with no discernible user impact. Which of the following backup methods will best fulfill your requirements?",
    "explanation": [
      "Correct answer is A as periodic snapshots will help create volume in any AZ within a very short time. They are incremental as well.",
      "Refer AWS documentation - EBS Creating Snapshot",
      "A point-in-time snapshot of an EBS volume, can be used as a baseline for new volumes or for data backup. If you make periodic snapshots of a volume, the snapshots are incremental—only the blocks on the device that have changed after your last snapshot are saved in the new snapshot. Even though snapshots are saved incrementally, the snapshot deletion process is designed so that you need to retain only the most recent snapshot in order to restore the entire volume.",
      "Snapshots occur asynchronously; the point-in-time snapshot is created immediately",
      "Option B is wrong as Glacier would not allow for volume creation within a short time.",
      "Option C is wrong as a single compressed archive would take time to create and upload as well.",
      "Option D is wrong as EBS volumes are AZ scoped and can be attached to an EC2 instance within the same AZ only."
    ],
    "id": 448,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create an EC2 instance which has multiple network interfaces with multiple elastic IP addresses.",
      "B.Create an EC2 instance which has both an ACL and the security group attached to it and have separate rules for each IP address.",
      "C.Create an EC2 instance which has multiple subnets attached to it and each will have a separate IP address.",
      "D.Create an EC2 instance with a NAT address. "
    ],
    "detail": "An application has multiple components. The single application and all the components are hosted on a single EC2 instance (without an ELB) in a VPC. You have been told that this needs to be set up with two separate SSLs for each component. Which of the following would best achieve the setting up off the two separate SSLs while using still only using one EC2 instance? Choose the correct answer from for the options below",
    "explanation": [
      "Correct answer is A as multiple elastic network interfaces can be attached to the EC2 instance and each network IP can have the component running with separate SSL certificates.",
      "Refer AWS documentation - EC2 Multiple IP address",
      "It can be useful to assign multiple IP addresses to an instance in your VPC to do the following:"
    ],
    "id": 449,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Retain the items in a single table.",
      "B.Delete items individually over a 24 hour period ",
      "C.Delete the tablee and create a new tablee per hour ",
      "D.Create a new tablee per hour "
    ],
    "detail": "You are inserting 1000 new items every second in a DynamoDB table. Once an hour these items are analyzed and then are no longer needed. You need to minimize provisioned throughput, storage, and API calls. Given these requirements, what is the most efficient way to manage these Items after the analysis?",
    "explanation": [
      "Correct answer is C as the items per hour once analyzed are not needed anymore, a new table can be created for each hour and deleted which will help reduce the storage cost.",
      "Refer AWS documentation - DynamoDB Pricing"
    ],
    "id": 450,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.If you have batch-oriented workloads",
      "B.If you use production online transaction processing (OLTP) workloads",
      "C.If you have workloads that are not sensitive to consistent performance "
    ],
    "detail": "When should I choose Provisioned IOPS over Standard RDS storage?",
    "explanation": [
      "Correct answer is B",
      "Refer AWS documentation - RDS PIOPS",
      "Amazon RDS provisions that IOPS rate and storage for the lifetime of the DB instance or until you change it. Provisioned IOPS storage is optimized for I/O intensive, online transaction processing (OLTP) workloads that have consistent performance requirements. Provisioned IOPS helps performance tuning."
    ],
    "id": 451,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "A Solutions Architect is designing a critical business application with a relational database that runs on an EC2 instance. It requires a single EBS volume that can support up to 16,000 IOPS. Which Amazon EBS volume type can meet the performance requirements of this application?",
    "explanation": [
      "Correct option is A as EBS Provisioned IOPS SSD provides sustained performance for mission-critical low-latency workloads and is recommended for IOPS over 10,000.",
      "Refer AWS documentation - EBS Volume Types",
      "Critical business applications that require sustained IOPS performance, or more than 10,000 IOPS or 160 MiB/s of throughput per volume",
      "Option A is wrong as EBS General Purpose SSD can provide bursts of performance up to 10,000 IOPS",
      "Option B & D are HDD options and suited for lower cost, high throughput volumes requirements."
    ],
    "id": 452,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Standard Reserved Instances",
      "B.Convertible Reserved Instances",
      "C.Scheduled Reserved Instances",
      "D.On-Demand Instances "
    ],
    "detail": "A company has created a critical batch processing application which runs every Monday, Wednesday and Friday for about 3 hours from 8:00 a.m. to 11:00 a.m. Which EC2 purchasing option would be most cost effective and highly available?",
    "explanation": [
      "Correct answer is C as the jobs are not run continuously but do have a regular schedule, Scheduled RIs can help decrease costs and ensure the capacity is always available.",
      "Refer AWS documentation - EC2 RI types",
      "Scheduled Reserved Instances (Scheduled Instances) enable you to purchase capacity reservations that recur on a daily, weekly, or monthly basis, with a specified start time and duration, for a one-year term. You reserve the capacity in advance, so that you know it is available when you need it. You pay for the time that the instances are scheduled, even if you do not use them.",
      "Scheduled Instances are a good choice for workloads that do not run continuously, but do run on a regular schedule. For example, you can use Scheduled Instances for an application that runs during business hours or for batch processing that runs at the end of the week.",
      "If you require a capacity reservation on a continuous basis, Reserved Instances might meet your needs and decrease costs."
    ],
    "id": 453,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use Multi-AZ for the RDS instance to ensure that a standby database is created in another region.",
      "B.Use the Read Replica feature to create another instance of the DB in another region.",
      "C.Use Multi-AZ for the RDS instance to ensure that a standby database is created in another Availability Zone.",
      "D.Use the Read Replica feature to create another instance of the DB in another Availability Zone. "
    ],
    "detail": "A Oracle database is being hosted using the AWS RDS service. This database is to be made into a production database and is required to have high availability. Which of the following can be used to achieve this resiliency requirement?",
    "explanation": [
      "Correct answer is C as RDS Multi-AZ provides HA and failover ability within the same region.",
      "Refer AWS documentation - RDS Multi-AZ",
      "Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments. Amazon RDS uses several different technologies to provide failover support.",
      "In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption.",
      "Option A is wrong as Multi-AZ RDS works within the same region.",
      "Option B and D are wrong as Read Replicas provide scalability and not high availability. Also Read replicas are not possible for Oracle db."
    ],
    "id": 454,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Enable versioning on the bucket and enable cross region replication on the S3 bucket",
      "B.Disable versioning on the bucket and enable cross region replication on the S3 bucket",
      "C.Trigger a S3 event notification on each upload and use Lambda to copy the object",
      "D.Trigger a S3 event notification on each upload and use Auto Scaled EC2 instances to copy the object "
    ],
    "detail": "A company is using S3 is region us-east-1 to host their data. As a compliance requirement, the company wants all the files to be copied over to us-west-1 region. What is the simplest way to implement this?",
    "explanation": [
      "Correct answer is A as S3 supports Cross Region Replication, which helps replicate objects across different regions. CRR requires versioning to be enabled on the bucket.",
      "Refer AWS documentation - S3 Cross Region Replication",
      "Cross-region replication is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions",
      "Requirements for cross-region replication:",
      "Option B is wrong as S3 CRR requires versioning enabled.",
      "Option C & D are wrong as the solution can be implemented but is not a simplest solution."
    ],
    "id": 455,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Insert code into the application to delete messages after processing",
      "B.Increase the visibility timeout for the queue",
      "C.Modify the order process to use SWF",
      "D.Use long polling rather than short polling "
    ],
    "detail": "An order processing website issuing EC2 instances to process messages from an SQS queue. A user reported an issue that their order was processed twice and hence charged twice. What action would you recommend ensuring this does not happen again? Choose the correct option",
    "explanation": [
      "Correct answer is C as SWF guarantees the task is assigned only once and is never duplicated.",
      "Option A is wrong as if the message is not deleted the issue with occur for all the messages.",
      "Option B is wrong as cause if the visibility timeout is less, the message might get visible before the message was deleted causing it to be read twice. Even if it is increased there is chance that it might happen again.",
      "Option D is wrong as long polling or short polling will not cause the message to be read twice."
    ],
    "id": 456,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles, S3 bucket policies and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.",
      "B.Create a new CloudTrail with one new S3 bucket to store the logs. Configure SNS to send log file delivery notifications to your management system. Use IAM roles and S3 bucket policies on the S3 bucket that stores your logs.",
      "C.Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.",
      "D.Create three new CloudTrail trails with three new S3 buckets to store the logs one for the AWS Management console, one for AWS SDKs and one for command line tools. Use IAM roles and S3 bucket policies on the S3 buckets that store your logs. "
    ],
    "detail": "You currently operate a web application In the AWS US-East region. The application runs on an auto-scaled layer of EC2 instances and an RDS Multi-AZ database. Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2, IAM and RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?",
    "explanation": [
      "Correct answer is A as single new S3 bucket with global services option enabled for IAM and IAM, Bucket Policies & MFA delete for confidentiality",
      "Refer AWS documentation - CloudTrail Global Service Events",
      "For most services, events are sent to the region where the action happened. For global services such as IAM, AWS STS, and Amazon CloudFront, events are delivered to any trail that includes global services",
      "Option B is wrong as it is missing Global Services which is required for tracking IAM",
      "Option C is wrong as using existing bucket prevents confidentiality as it might be accessible to users already.",
      "Option D is wrong as 3 buckets not needed, Missing Global services options. Also CloudTrail delivers logs are all the services and events into a single configured S3 bucket."
    ],
    "id": 457,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 instances in private subnet, no EIP’s, route outgoing traffic via the NAT.",
      "B.Amazon EC2 instances in public subnet, no EIP’s, route outgoing traffic via the internet gateway (IGW)",
      "C.Amazon EC2 instances in a private subnet, assign EIP’s, route outgoing traffic via the internet gateway (IGW)",
      "D.Amazon EC2 instances in public subnet, assign EIP’s, route outgoing traffic via the NAT. "
    ],
    "detail": "You have an amazon VPC with one private subnet, one public subnet and one network address translation server (NAT). You are creating a group of Amazon Elastic Cloud Compute (EC2) instances that configure themselves at to deploy an application via GIT. Which setup provides the highest level of security?",
    "explanation": [
      "Correct answer is A as the key question is to handle security the instances must be in the private subnet. Once the instances are in private subnet, they cannot interact with the outside world without a NAT."
    ],
    "id": 458,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use CloudWatch metrics to check the utilization of the web layer. Use Auto Scaling Group to scale the web instances accordingly based on the CloudWatch metrics.",
      "B.Use CloudWatch metrics to check the utilization of the databases servers. Use Auto Scaling Group to scale the database instances accordingly based on the CloudWatch metrics.",
      "C.Utilize the Read Replica feature for the Amazon RDS layer.",
      "D.Utilize the Multi-AZ feature for the Amazon RDS layer. "
    ],
    "detail": "Your company currently has a set of EC2 Instances running a web application which sits behind an Elastic Load Balancer. You also have an Amazon RDS instance which is accessible from the web application. You have been asked to ensure that this architecture is self-healing in nature and cost-effective. Which of the following would fulfill this requirement? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D",
      "Option A as CloudWatch metrics with Auto Scaling helps the web layer to scale in and out as the demand changes.",
      "Option D as Multi-AZ RDS provides fault tolerance and High Availability for RDS",
      "Option B is wrong as CloudWatch metrics need to be checked for web servers for scaling the web layer.",
      "Option C is wrong as Read Replicas is a scalability feature for RDS and does not provide fault tolerance self-healing ability."
    ],
    "id": 459,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Amazon Redshift Enhanced VPC Routing.",
      "B.Create a Cluster Security Group to allow the Amazon Redshift cluster to access Amazon S3.",
      "C.Create a NAT gateway in a public subnet to allow the Amazon Redshift cluster to access Amazon S3. ",
      "D.Create and configure an Amazon S3 VPC endpoint. "
    ],
    "detail": "A retailer exports data daily from its transactional databases into an S3 bucket in the Sydney region. The retailer's Data Warehousing team wants to import this data into an existing Amazon Redshift cluster in their VPC at Sydney. Corporate security policy mandates that data can only be transported within a VPC. What combination of the following steps will satisfy the security policy? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D as Redshift Enhanced VPC Routing helps access AWS services including S3 through VPC, without having to route any traffic through internet. Also, note the region is the same.",
      "Refer AWS documentation - Redshift Enhanced VPC Routing",
      "When you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC. You can now use standard VPC features, such as VPC security groups, network access control lists (ACLs), VPC endpoints, VPC endpoint policies, Internet gateways, and Domain Name System (DNS) servers, to tightly manage the flow of data between your Amazon Redshift cluster and other resources. When you use Enhanced VPC Routing to route traffic through your VPC, you can also use VPC flow logs to monitor COPY and UNLOAD traffic.",
      "If Enhanced VPC Routing is not enabled, Amazon Redshift routes traffic through the Internet, including traffic to other services within the AWS network.",
      "VPC Endpoints – For traffic to an Amazon S3 bucket in the same region as your cluster, you can create a VPC endpoint to direct traffic directly to the bucket. When you use VPC endpoints, you can attach an endpoint policy to manage access to Amazon S3.",
      "Option B is wrong as Redshift cannot directly access S3 without internet",
      "Option C is wrong as NAT enables connectivity to services via Internet only or other AWS services.",
      "NAT gateway – To connect to an Amazon S3 bucket in another region or to another service within the AWS network, or to access a host instance outside the AWS network, you can configure a network address translation (NAT) gateway."
    ],
    "id": 460,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Kinesis Firehose",
      "B.Amazon Kinesis Streams",
      "C.Amazon CloudFront",
      "D.Amazon SQS "
    ],
    "detail": "Your organization needs to ingest a big data stream into their data lake on Amazon S3. The data may stream in at a rate of hundreds of megabytes per second. What AWS service will accomplish the goal with the least amount of management?",
    "explanation": [
      "Correct answer is A as Kinesis Firehose can help in the data ingestion with least management.",
      "Refer AWS documentation - Kinesis Firehose",
      "Amazon Kinesis Data Firehose is a fully managed service for delivering real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon Elasticsearch Service (Amazon ES), and Splunk. Kinesis Data Firehose is part of the Kinesis streaming data platform, along with Kinesis Streams and Amazon Kinesis Data Analytics. With Kinesis Data Firehose, you don't need to write applications or manage resources. You configure your data producers to send data to Kinesis Data Firehose, and it automatically delivers the data to the destination that you specified. You can also configure Kinesis Data Firehose to transform your data before delivering it."
    ],
    "id": 461,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use multi-part upload.",
      "B.Add a random prefix to the key names",
      "C.Amazon S3 will automatically manage performance at this scale.",
      "D.Use a predictable naming scheme, such as sequential numbers or date time sequences, in the key names "
    ],
    "detail": "You are designing a web application that stores static assets in an Amazon Simple Storage Service (S3) bucket. You expect this bucket to immediately receive over 150 PUT requests per second. What should you do to ensure optimal performance?",
    "explanation": [
      "Correct answer is B",
      "Refer AWS documentation - S3 Performance",
      "One way to introduce randomness to key names is to add a hash string as prefix to the key name. For example, you can compute an MD5 hash of the character sequence that you plan to assign as the key name",
      "Option A is wrong as multi part upload only helps improve object upload times",
      "Option C is wrong as \nAmazon S3 scales to support very high request rates. However, If your workload in an Amazon S3 bucket routinely exceeds 100 PUT/LIST/DELETE requests per second or more than 300 GET requests per second\n it is recommended to implement best practices.",
      "Option D is wrong as using predictable naming scheme would reduce the performance"
    ],
    "id": 462,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Kinesis",
      "B.AWS Data Pipeline",
      "C.Amazon AppStream",
      "D.Amazon Simple Queue Service "
    ],
    "detail": "You are deploying an application to track GPS coordinates of delivery trucks in the United States. Coordinates are transmitted from each delivery truck once every three seconds. You need to design an architecture that will enable real-time processing of these coordinates from multiple consumers. Which service should you use to implement data ingestion?",
    "explanation": [
      "Key point here is address real time data ingestion.",
      "Correct answer is A",
      "Amazon Kinesis is a platform for streaming data on AWS, making it easy to load and analyze streaming data, and also providing the ability for you to build custom streaming data applications for specialized needs.",
      "Option B is wrong as Data Pipeline is more of an orchestration service and just helps move data between different data stores.",
      "Option C is wrong as \nAmazon AppStream is an application streaming service that lets you stream your existing resource-intensive applications from the cloud without code modifications.",
      "Option D is wrong as SQS would not be able to handle large scale real time ingestion."
    ],
    "id": 463,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.EBS Provisioned IOPS SSD",
      "B.EBS Throughput Optimized HDD",
      "C.EBS General Purpose SSD",
      "D.EBS Cold HDD "
    ],
    "detail": "A company is planning to deploy an application in AWS. This application requires an EC2 Instance to continuously perform log processing activities requiring at least 500MiB/s of data throughput. Which of the following is the best storage option for this requirement?",
    "explanation": [
      "Correct answer is B as EBS Throughput Optimized HDD is ideal for log processing jobs with higher throughput requirements.",
      "Refer AWS documentation - EBS Volume Types",
      "Throughput Optimized HDD (st1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. This volume type is a good fit for large, sequential workloads such as Amazon EMR, ETL, data warehouses, and log processing"
    ],
    "id": 464,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Copy the S3 bucket to an EBS optimized backed EC2 instance.",
      "B.Amazon S3 is highly available and fault tolerant by design and requires no additional configuration.",
      "C.Enable AWS Storage Gateway using Gateway-Stored setup.",
      "D.Enable Cross-Region Replication for the S3 bucket. "
    ],
    "detail": "As a Solutions architect, it is your job to design a highly available and fault tolerant storage infrastructure. Your company is utilizing Amazon S3 to store large amounts of critical file data. The company wants to ensure that if an Availability Zone was lost due to a natural disaster, the files would still be in place and accessible?",
    "explanation": [
      "Correct answer is B as S3 stores the data redundantly across AZs and provides a durable storage, which can handle an AZ failure.",
      "Refer AWS documentation - S3 FAQs",
      "Q: How are Amazon S3 and Amazon Glacier designed to achieve 99.999999999% durability?",
      "Amazon S3 Standard, S3 Standard-IA, and Amazon Glacier storage classes redundantly store your objects on multiple devices across a minimum of three Availability Zones (AZs) in an Amazon S3 Region before returning SUCCESS."
    ],
    "id": 465,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Have the application call AWS STS to obtain temporary credentials that have access privileges to the Amazon S3 bucket",
      "B.Configure the application to retrieve temporary credentials from the Amazon-provided server at 169.254.169.253",
      "C.Launch the Amazon EC2 instances with an IAM role that has access privileges to the amazon S3 bucket",
      "D.Configure an Amazon S3 bucket policy that grants the application access to the Amazon S3 bucket "
    ],
    "detail": "Your company IT policy prohibits employees from handling application credentials. Any credentials must be rotated least monthly. You plan to deploy a new application on Amazon EC2 instances in an Auto Scaling group within a VPC. The application must access objects within an Amazon S3 bucket. The application will leverage an Amazon SDK. Which approach meets these requirements?",
    "explanation": [
      "Correct answer is C as using IAM Role with EC2 instances can help the application using SDK retrieve and use the credentials automatically. Temporary credentials are also rotated automatically.",
      "Refer AWS documentation - IAM Roles for EC2",
      "For applications, AWS CLI, and Tools for Windows PowerShell commands that run on the instance, you do not have to explicitly get the temporary security credentials — the AWS SDKs, AWS CLI, and Tools for Windows PowerShell automatically get the credentials from the EC2 instance metadata service and use them.",
      "Option A is wrong as a call to STS cannot be used to directly retrieve temporary credentials with an IAM role.",
      "Option B is wrong as the application can retrieve the credentials from the metadata service. However, the it needs to have an IAM role and also the url is &lt;span class=\"\"&gt;http:/&lt;span class=\"\"&gt;/169.254.169.254/latest&lt;/span&gt;&lt;span class=\"\"&gt;/meta-data/iam&lt;/span&gt;&lt;span class=\"\"&gt;/security-credentials/s&lt;/span&gt;3access&lt;/span&gt;",
      "Option D is wrong as S3 bucket policy cannot be configured to restrict access to an application."
    ],
    "id": 466,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Use three Spot Instances rather than three On-Demand instances for the task nodes.",
      "B.Change the input split size in the MapReduce job configuration.",
      "C.Use a bootstrap action to present the S3 bucket as a local filesystem.",
      "D.Launch the core nodes and task nodes within an Amazon Virtual Cloud.",
      "E.Adjust the number of simultaneous mapper tasks.",
      "F.Enable termination protection for the job flow. "
    ],
    "detail": "A customer's nightly EMR job processes a single 2-TB data file stored on Amazon Simple Storage Service (S3). The Amazon Elastic Map Reduce (EMR) job runs on two On-Demand core nodes and three On-Demand task nodes. Which of the following may help reduce the EMR job completion time? Choose 2 answers",
    "explanation": [
      "Key point here is to reduce job completion time.",
      "Refer to EMR Best Practices",
      "Correct answer is B & E",
      "Option B as the split size of the match in memory block size of task and HDFS files will help to complete the job faster.",
      "Option E as adjusting and tuning the number of simultaneous mapper task would help reduce time",
      "Option A is wrong as Spot instances would help reduce cost but might increase the job completion time",
      "Option C is wrong as it would not help as the data is already there in the data nodes.",
      "Option D is wrong as the instances would be in VPC already and would not improve job times",
      "Option E is wrong as termination protection would not help as the instances are not being terminated adhoc"
    ],
    "id": 467,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Add an additional ENI",
      "B.Change to a larger Instance",
      "C.Use DirectConnect between EC2 and S3",
      "D.Use EBS PIOPS on the local volume "
    ],
    "detail": "You have identified network throughput as a bottleneck on your m1.small EC2 instance when uploading data into Amazon S3 in the same region. How do you remedy this situation?",
    "explanation": [
      "Correct answer is B as the instance size determines the network bandwidth assigned to the instance."
    ],
    "id": 468,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Simple Email Service",
      "B.Amazon CloudWatch",
      "C.Amazon Simple Queue Service",
      "D.Amazon Route 53",
      "E.Amazon Simple Notification Service "
    ],
    "detail": "A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? Choose 2 answers",
    "explanation": [
      "Correct answer are B & E as CloudWatch for monitoring and alerts and SNS for notififcation.",
      "Option A is wrong as SES cannot be integrated with CloudWatch."
    ],
    "id": 469,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Automate the process of sending an email notification to administrators when the CPU utilization reaches 70% on production servers",
      "B.Create a video transcoding website where multiple components need to communicate with each other, but can't all process the same amount of work simultaneously",
      "C.Coordinate work across distributed web services to process employee’s expense reports",
      "D.Distribute static web content to end users with low latency across multiple countries "
    ],
    "detail": "Which statement best describes an Amazon SQS use case?",
    "explanation": [
      "Correct answer is B as SQS helps build distributed, scalable, decoupled architecture where components with different performance can still work with each other.",
      "Option A is wrong as it is done by CloudWatch + SNS",
      "Option C is wrong as it is done by SWF",
      "Option D is wrong as it is done by CloudFront"
    ],
    "id": 470,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create a VPC instance, which will have both the ACL and the security group attached to it and have separate rules for each IP address. ",
      "B.Create a VPC instance, which will have multiple network interfaces with multiple elastic IP addresses. ",
      "C.You have to launch two instances each in a separate subnet and allow VPC peering for a single IP. ",
      "D.Create a VPC instance, which will have multiple subnets attached to it and each will have a separate IP address. "
    ],
    "detail": "An organization has created multiple components of a single application for compartmentalization. Currently all the components are hosted on a single EC2 instance. Due to security reasons the organization wants to implement two separate SSLs for the separate modules although it is already using VPC. How can the organization achieve this with a single instance?",
    "explanation": [
      "Correct answer is B as it is a single application multiple ENI can be attached to the instance with different IP address and SSL certificates associated with it.",
      "Refer AWS documentation - EC2 Multiple IP Address",
      "Host multiple websites on a single server by using multiple SSL certificates on a single server and associating each certificate with a specific IP address."
    ],
    "id": 471,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.VPC and security group configuration",
      "B.Physical security of hardware",
      "C.Application authentication",
      "D.Virtualization infrastructure",
      "E.Guest operating systems "
    ],
    "detail": "Which aspects of Amazon EC2 security are the responsibility of AWS? Choose 2 answers",
    "explanation": [
      "Correct answer are B & D as the Virtualization infrastructure and the physical security of the hardware is AWS's responsibility. Customer is responsible for guest OS, VPC, security configuration and Application authentication.",
      "Refer AWS documentation - AWS Shared Responsibility Model",
      "Security and Compliance is a shared responsibility between AWS and the customer. This shared model can help relieve customer’s operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates. The customer assumes responsibility and management of the guest operating system (including updates and security patches), other associated application software as well as the configuration of the AWS provided security group firewall."
    ],
    "id": 472,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.",
      "B.Use the Parameter section in the Cloud Formation template to nave the user input Access and Secret Keys from an already created IAM user that has me permissions required to read and write from the required DynamoDB table.",
      "C.Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.",
      "D.Create an identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and secret keys and pass them to the application instance through user-data. "
    ],
    "detail": "An administrator is using Amazon CloudFormation to deploy a three tier web applications that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage when creating the CloudFormation template which of the following would allow the application instance access to the DynamoDB tables without exposing API credentials?",
    "explanation": [
      "Correct answer is C as Role needs to be referenced in the instance profile property which is used by the application.",
      "Refer AWS documentation - CloudFormation IAM Instance Profile"
    ],
    "id": 473,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use the internet gateway with a private IP",
      "B.Allow outbound traffic in the security group for port 80 to allow internet updates",
      "C.The private subnet can never connect to the internet",
      "D.Use NAT with an elastic IP "
    ],
    "detail": "A user has created a VPC with two subnets: one public and one private. The user is planning to run the patch update for the instances in the private subnet. How can the instances in the private subnet connect to the internet?",
    "explanation": [
      "Correct answer is D as private instances cannot access Internet Gateway and would require a NAT instance or Gateway to download the patch.",
      "Refer AWS documentation - VPC NAT Instance",
      "You can use a network address translation (NAT) instance in a public subnet in your VPC to enable instances in the private subnet to initiate outbound IPv4 traffic to the Internet or other AWS services, but prevent the instances from receiving inbound traffic initiated by someone on the Internet."
    ],
    "id": 474,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Glacier Storage class",
      "B.Standard Storage Class",
      "C.Standard – Infrequent Access (IA) ",
      "D.Reduced Redundancy Class (RRS) "
    ],
    "detail": "An organization regularly backs up their application data. The application backups are required to be stored on Amazon S3 for a certain amount of time need to be accessed instantly in the event of a disaster recovery. Which storage solution should a Solutions Architect recommend as the MOST performant and cost-effective solution to meet these needs?",
    "explanation": [
      "Correct answer is C as the data needs to accessed instantly only in the event of disaster recovery, which would be rare so Standard - Infrequent Access (IA) would be an ideal storage solution.",
      "Refer AWS documentation - S3 Storage Classes",
      "S3 Standard-IA is for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee.",
      "Option A is wrong as S3 Glacier is a secure, durable, and low-cost storage class for data archiving, but does not provide immediate access to data.",
      "Option B is wrong as Standard storage although provides instant access to the data is not a cost effective solution.",
      "Option D is wrong as RRS does not provide high durability."
    ],
    "id": 475,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Delegate access to the ELB using an IAM role",
      "B.Open up whichever port ELB uses in a security group and give the user access to that security group in a policy",
      "C.Create a new IAM user who only has access to the ELB resources and delete that user when he has finished his work",
      "D.Give them temporary access to your account for 24 hours only and change the password the next day "
    ],
    "detail": "A user needs access to Elastic Load Balancing. This is the first and possibly only time that they will require this access. Which of the following choices would be the best way to allow this access?",
    "explanation": [
      "Correct answer is A as the best practice and recommended approach is to have a IAM role created with access to ELB services. This role can be assigned to the user for the time required and revoke once done.",
      "Refer AWS documentation - IAM Best Practices",
      "Delegate by Using Roles Instead of by Sharing Credentials - \nYou might need to allow users from another AWS account to access resources in your AWS account. If so, don't share security credentials, such as access keys, between accounts. Instead, use IAM roles. You can define a role that specifies what permissions the IAM users in the other account are allowed. You can also designate which AWS accounts have the IAM users that are allowed to assume the role."
    ],
    "id": 476,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Increase the size of your queue",
      "B.Send them with a timestamp",
      "C.Using FIFO queues",
      "D.Give each message a unique id",
      "E.Use sequence information in the messages with Standard queues "
    ],
    "detail": "In relation to Amazon SQS, how can you ensure that messages are delivered in order? Select 2 answers",
    "explanation": [
      "Correct answer are C & E as Standard queues do not guarantee ordering so you can either",
      "Refer AWS documentation - SQS FAQs",
      "Q: Does Amazon SQS provide message ordering?",
      "Yes. FIFO (first-in-first-out) queues preserve the exact order in which messages are sent and received. If you use a FIFO queue, you don't have to place sequencing information in your messages. For more information, see FIFO Queue Logic in the Amazon SQS Developer Guide.",
      "Standard queues provide a loose-FIFO capability that attempts to preserve the order of messages. However, because standard queues are designed to be massively scalable using a highly distributed architecture, receiving messages in the exact order they are sent is not guaranteed."
    ],
    "id": 477,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Ensure the security group attached to the EC2 instance allows HTTP traffic on port 80 and HTTPS traffic on port 443. Ensure external DNS resolution directs to the IP address of the EC2 instance. ",
      "B.Launch a NAT Gateway in the private subnet, change the default route to the NAT Gateway and attach a public EIP to the NAT Gateway Ensure external DNS resolution directs to the EIP address ",
      "C.Launch an internet-facing ALB with the EC2 instance as its endpoint. Ensure external DNS resolution directs to the ALB ",
      "D.Attach the EC2 instance to an Auto Scaling group in the private subnet. Ensure external DNS resolution directs to the Auto Scaling group. "
    ],
    "detail": "A Solutions Architect created an Amazon VPC with two public subnets and two private subnets. Corporate security mandate requires all Amazon EC2 instances be launched in a private subnet. However, when an EC2 instance running Apache on ports 80 and 443 is launched in the private subnet, no external internet traffic can connect with the server. What actions should be taken address this situation?",
    "explanation": [
      "Correct answer is C as Internet facing ALB can help expose the underlying EC2 instances with the external DNS pointing to the ALB.",
      "Option A is wrong as instances in private subnet do not have an internet connectivity as they are not associated to the IGW.",
      "Option B is wrong as NAT Gateway helps route traffic from private instances to internet. It does not route traffic from internet to EC2 instances in private instances.",
      "Option D is wrong as Auto Scaling does not help expose the EC2 instances, but just to scale. DNS cannot point to an Auto Scaling group."
    ],
    "id": 478,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure multi-factor authentication for privileged IAM users",
      "B.Create IAM users for privileged accounts",
      "C.Implement identity federation between your organization’s Identity provider leveraging the IAM Security Token Service",
      "D.Enable the IAM single-use password policy option for privileged users "
    ],
    "detail": "Your organization’s security policy requires that all privileged users either uses frequently rotated passwords or one-time access credentials in addition to username/password. Which two of the following options would allow an organization to enforce this policy for AWS users? Choose 2 answers",
    "explanation": [
      "Correct answer are A & B",
      "Refer AWS documentation - IAM best practices",
      "Option A is correct as \nFor extra security, enable multi-factor authentication (MFA) for privileged IAM users (users who are allowed access to sensitive resources or APIs). With MFA, users have a device that generates a unique authentication code (a one-time password, or OTP). Users must provide both their normal credentials (like their user name and password) and the OTP. The MFA device can either be a special piece of hardware, or it can be a virtual device (for example, it can run in an app on a smartphone).",
      "Option B is correct as can set password policy. \nYou can apply a password policy to your account to require all your IAM users to rotate their passwords, and you can choose how often they must do so.",
      "Option C is wrong as identity federation helps application reuse of security policies, however, do not force the user to rotate their passwords.",
      "Option D is wrong as no such option the password expiration can be set from 1 to 1095 days"
    ],
    "id": 479,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.API Domain Name",
      "B.Swagger extensions",
      "C.Using AWS CloudFront",
      "D.Using Stages "
    ],
    "detail": "A company is using API gateway for hosting their microservices. The company wants to use different API’s versions in different environment like development, staging, testing before the change is finally deployed to the production environments. Which feature of the API gateway can be used to fulfil this requirement.",
    "explanation": [
      "Correct answer is D as Stages help API Gateway to deploy different versions of the APIs.",
      "Refer AWS documentation - API Gateway Deploying an API",
      "After creating your API, you must deploy it to make the API callable for your users.",
      "To deploy an API, you create an API deployment and associate it with a stage. Each stage is a snapshot of the API and is made available for the client to call. Every time you update an API, which includes modification of methods, integrations, authorizers, and anything else other than stage settings, you must redeploy the API to an existing stage or to a new stage. As your API evolves, you can continue to deploy it to different stages as different versions of the API. You can also deploy your API updates as a canary release deployment, enabling your API clients to access, on the same stage, the production version through the production release, and the updated version through the canary release."
    ],
    "id": 480,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon ElastiCache and Amazon Redshift",
      "B.AWS Identity and Access Management (IAM) with AWS Lambda",
      "C.Amazon ElastiCache with Redis",
      "D.Amazon DynamoDB and Amazon ElastiCache "
    ],
    "detail": "A company has a web application with an Apache front end, a Memcached cache and a PostgreSQL database. The company also has a data warehouse that is accessed with standard SQL tools. The company would like to migrate the architecture to AWS with as little work as possible. Which of the following AWS services should a Solutions Architect recommend?",
    "explanation": [
      "Correct answer is A as ElastiCache can help migrate the Memcached cache and Redshift for the data warehouse tools with SQL tools access.",
      "Option B is wrong as IAM with Lambda does not help in migration of any service.",
      "Option C is wrong as replacing Memcached with Redis would not be minimal work.",
      "Option D is wrong as DynamoDB cannot act as a data warehouse tool."
    ],
    "id": 481,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EFS",
      "B.Amazon S3",
      "C.Amazon Glacier",
      "D.Amazon EBS "
    ],
    "detail": "A solutions architect is designing a web application for document sharing .The users will upload documents that are then made available to other users. There will be tens of thousands of these documents. What is the MOST cost-effective storage solution?",
    "explanation": [
      "Correct answer is B as S3 can be used store documents in a cost effective way and provide the ability to share them with other users directly.",
      "Option A is wrong as EFS provides a simple, scalable, elastic file system for Linux-based workloads for use with AWS Cloud services and on-premises resources. It would still need an interface to share it with other web users. Also compared to S3, EFS is not cost-effective.",
      "Option C is wrong as Glacier is an archival storage solution.",
      "Option D is wrong as EBS is not ideal to storage documents due to cost and ability scale. Also, it would need an interface to share it with other users."
    ],
    "id": 482,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Trigger a Lambda function by using Amazon CloudWatch Events to retrieve messages from the SQS queue and archive to Amazon S3 ",
      "B.Use an Amazon SNS topic to fan out the data to the SQS queue in addition to a Lambda function that records the data to an S3 bucket",
      "C.Set up an Amazon Kinesis Data Stream so that multiple instances can receive data. Add a separate EC2 instance that it configured to archive all data it receives ",
      "D.Write the data to an S3 bucket and use an SQS queue for S3 event notifications to tell the instances where to retrieve the data "
    ],
    "detail": "An application uses an Amazon SQS queue as a transport mechanism to deliver data to a group of EC2 instances for processing. The application owner wants to add a mechanism to archive the incoming data without modifying application code on the EC2 instances. How can this application be re-architecture to archive the data without modifying the processing instances?",
    "explanation": [
      "Correct answer is B as SNS can be used to fan out to both Lambda and SQS. Lambda can help archive the data, while EC2 instances can still process the data from the same SQS queue without an modification.",
      "Option A is wrong as the approach is not reliable as the message would be processed and deleted by the EC2 instances.",
      "Option C is wrong as changing to Kinesis would need a change in the application logic.",
      "Option D is wrong as the SQS message would have only the location of the data, this would need a change in the application logic."
    ],
    "id": 483,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Move to an SSD backed instance",
      "B.Move the database to an EBS-Optimized Instance",
      "C.Use Provisioned IOPs EBS",
      "D.Use the ephemeral storage on an m2.4xLarge Instance Instead "
    ],
    "detail": "You are running a database on an EC2 instance, with the data stored on Elastic Block Store (EBS) for persistence. At times throughout the day, you are seeing large variance in the response times of the database queries. Looking into the instance with the isolate command you see a lot of wait time on the disk volume that the database’s data is stored on. What two ways can you improve the performance of the database’s storage while maintaining the current persistence of the data? Choose 2 answers",
    "explanation": [
      "Correct answer are B & C as EBS-Optimized helps increase the throughput while PIOPS help increase the disk performance.",
      "Option A & D do not provide a durable persistence",
      "Refer AWS documentatin - SSD Instance Store",
      "Like other instance store volumes, you must map the SSD instance store volumes for your instance when you launch it, and the data on an SSD instance volume persists only for the life of its associated instance"
    ],
    "id": 484,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Cold HDD (sc1)",
      "B.Provisioned IOPS SSD (io1)",
      "C.General Purpose SSD (gp2)",
      "D.Throughput Optimized HDD (st1) "
    ],
    "detail": "A customer has a legacy application with a large amount of data. The files accessed by the application are approximately 10GB each, but are rarely accessed. However, when files are accessed, they are retrieved sequentially. The customer is migrating the application to AWS and would like to use Amazon EC2 and Amazon EBS. What is the LEAST expensive EBS volume type for this use case?",
    "explanation": [
      "Correct answer is A as Cold HDD provides low cost storage ideal for infrequent accessed data in a sequential manner.",
      "Refer AWS documentation - EBS Volume Types",
      "Cold HDD (sc1) volumes provide low-cost magnetic storage that defines performance in terms of throughput rather than IOPS. With a lower throughput limit than st1, sc1 is a good fit ideal for large, sequential cold-data workloads. If you require infrequent access to your data and are looking to save costs, sc1 provides inexpensive block storage. Bootable sc1 volumes are not supported."
    ],
    "id": 485,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use HTTPS for traffic over VPC peering between the VPC and the on-premise datacenter ",
      "B.Use HTTPS for traffic over the internet between the on-premises server and the Amazon EC2 instance ",
      "C.Use HTTPS for traffic over a VPN connection between the VPC and the on-premises datacenter ",
      "D.Use HTTPS for traffic over gateway VPC endpoints that have been configured for the Amazon EC2 instance. "
    ],
    "detail": "A credit card processing application hosted on an on-premises server needs to communicate directly with a database hosted on an Amazon EC2 instance running in a private subnet of a VPC. Compliance requirements state that end-to-end communication should be encrypted. Which solution will ensure that this requirement is met?",
    "explanation": [
      "Correct answer is C as HTTPS over VPN connection can help the application to connect to the on-premises DB in the private subnet with end-to-end encryption.",
      "Option A is wrong as VPC peering can be enabled with on-premises and VPC.",
      "Option B is wrong as the instance in private subnet would not be reachable from internet.",
      "Option D is wrong as VPC endpoints do not allow on-premises instance to connect to instance in private subnet"
    ],
    "id": 486,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Forward cookies to the origin",
      "B.Based on query string parameters",
      "C.Cache objects at the origin",
      "D.Serve dynamic content "
    ],
    "detail": "An organization hosts a multi-language website on AWS, which is served using CloudFront. Language is specified in the HTTP request as shown below: http://d11111f8.cloudfront.net/main.html?language=... http://d11111f8.cloudfront.net/main.html?language=... http://d11111f8.cloudfront.net/main.html?language=... How should the AWS CloudFront be configured to delivered cache data in the correct language?",
    "explanation": [
      "Correct answer is B as CloudFront allows caching based on the query string parameters.",
      "Refer AWS documentation - CloudFront Query String Parameters",
      "For web distributions, you can choose whether you want CloudFront to forward query strings to your origin and, if so, whether to cache your content based on all parameters or on selected parameters.",
      "Suppose your website is available in five languages. The directory structure and file names for all five versions of the website are identical. As a user views your website, requests that are forwarded to CloudFront include a language query string parameter based on the language that the user chose. You can configure CloudFront to forward query strings to the origin and to cache based on the language parameter. If you configure your web server to return the version of a given page that corresponds with the selected language, CloudFront will cache each language version separately, based on the value of the language query string parameter."
    ],
    "id": 487,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Convert the DB instance to a Multi-AZ deployment, configure the app to send read-only calls to the standby",
      "B.Create an Amazon ElastiCache cluster, configure the app to retrieve frequently accessed data and queries from the cache",
      "C.Create a cross-region read replica of the master database, configure the app to send read-only calls to the replica",
      "D.Create a read replica of the master database in another Availability Zone, configure the app to send read-only calls to the replica",
      "E.Create additional databasee accounts in the DB instance, configure the app servers to make calls using different account credentials "
    ],
    "detail": "Your Amazon RDS MySQL DB instance runs on the largest available instance type. The DB instance runs at near capacity for CPU and network bandwidth. You expect traffic to increase and are looking for ways you can continue to scale your database. Which strategies allow you to continue to scale and take on more traffic? Choose 2 answers",
    "explanation": [
      "Correct answer is B & D as to increase the performance and reduce the load on the RDS instance either by using Read Replica or using a Caching solution like ElastiCache.",
      "Option A is wrong as the Multi-AZ is an HA solution and not a scalability solution. The standby instance cannot be used to reduce traffic.",
      "Option C is wrong as creating a cross region read replica would impact performance.",
      "Option E is wrong as creating additional database accounts does not help scale DB as the underlying instance does not change."
    ],
    "id": 488,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use S3 Replication to replicate the objects to regions closest to the users.",
      "B.Ensure S3 Transfer Acceleration is enabled to ensure all users get the desired response times.",
      "C.Place an ELB in front of S3 to distribute the load across S3.",
      "D.Place the S3 bucket behind a CloudFront distribution. "
    ],
    "detail": "A company has an application that delivers objects from S3 to users. Of late, some users spread across the globe have been complaining of slow response times. Which of the following additional steps would help in building a cost-effective solution and also help ensure that the users get an optimal response to objects from S3?",
    "explanation": [
      "Correct answer is D as CloudFront with S3 as origin helps cache the requests and reduce the direct calls to S3.",
      "Refer AWS documentation - S3 Performance",
      "If your workload is mainly sending GET requests, in addition to the preceding guidelines, you should consider using Amazon CloudFront for performance optimization.",
      "Integrating Amazon CloudFront with Amazon S3, you can distribute content to your users with low latency and a high data transfer rate. You will also send fewer direct requests to Amazon S3, which will reduce your costs.",
      "For example, suppose that you have a few objects that are very popular. Amazon CloudFront fetches those objects from Amazon S3 and caches them. Amazon CloudFront can then serve future requests for the objects from its cache, reducing the number of GET requests it sends to Amazon S3.",
      "Options A and B are wrong as S3 Cross-Region Replication and Transfer Acceleration are not cost effective with data duplication.",
      "Option C is wrong as ELB is used to distribute traffic on to EC2 Instances and does not work with S3."
    ],
    "id": 489,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.EC2 Reserved instances ",
      "B.EC2 Spot instances ",
      "C.EC2 Dedicated hosts ",
      "D.EC2 Placement Groups "
    ],
    "detail": "A company wants to migrate a three-tier web application to AWS. The company wants to control the placement of the instances and have visibility into underlying sockets and cores for licensing purposes. Which compute model should a Solutions Architect choose to accomplish this task?",
    "explanation": [
      "Correct answer is C as EC2 Dedicate hosts provides and ability to control placements as well as the visibility into sockets and physical cores.",
      "Refer AWS documentation - EC2 Dedicated Hosts",
      "You have the option to launch instances onto a specific Dedicated Host, or you can let Amazon EC2 place the instances automatically. Controlling instance placement allows you to deploy applications to address licensing, corporate compliance, and regulatory requirements.",
      "You have visibility of the number of sockets and physical cores that support your instances on a Dedicated Host. You can use this information to manage licensing for your own server-bound software that is licensed per-socket or per-core.",
      "Options A is wrong as Reserved instances provide with a significant discount compared to On-Demand Instance pricing as well as availability.",
      "Options B is wrong as Spot instances provide spare compute capacity in the AWS cloud available to you at steep discounts compared to On-Demand prices",
      "Options D is wrong as Placements groups help determine how instances are placed on underlying hardware. It does not provide socket information."
    ],
    "id": 490,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Kinesis",
      "B.AWS Data Pipeline",
      "C.Amazon AppStream",
      "D.Amazon Simple Queue Service "
    ],
    "detail": "You are deploying an application to track GPS coordinates of delivery trucks in the United States. Coordinates are transmitted from each delivery truck once every three seconds. You need to design an architecture that will enable real-time processing of these coordinates from multiple consumers. Which service should you use to implement data ingestion?",
    "explanation": [
      "Key point here is address real time data ingestion.",
      "Correct answer is A",
      "Amazon Kinesis is a platform for streaming data on AWS, making it easy to load and analyze streaming data, and also providing the ability for you to build custom streaming data applications for specialized needs.",
      "Option B is wrong as Data Pipeline is more of an orchestration service and just helps move data between different data stores.",
      "Option C is wrong as \nAmazon AppStream is an application streaming service that lets you stream your existing resource-intensive applications from the cloud without code modifications.",
      "Option D is wrong as SQS would not be able to handle large scale real time ingestion."
    ],
    "id": 491,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Snapshotting an encrypted volume makes an encrypted snapshot; restoring an encrypted snapshot creates an encrypted volume when specified / requested.",
      "B.Snapshotting an encrypted volume makes an encrypted snapshot when specified / requested; restoring an encrypted snapshot creates an encrypted volume when specified / requested.",
      "C.Snapshotting an encrypted volume makes an encrypted snapshot; restoring an encrypted snapshot always creates an encrypted volume.",
      "D.Snapshotting an encrypted volume makes an encrypted snapshot when specified / requested; restoring an encrypted snapshot always creates an encrypted volume. "
    ],
    "detail": "What is true of the way that encryption works with EBS?",
    "explanation": [
      "Correct answer is C as volumes created from encrypted snapshots are ALWAYS encrypted.",
      "Refer AWS documentation - EBS Encryption",
      "Snapshots of encrypted volumes are automatically encrypted, and volumes that are created from encrypted snapshots are also automatically encrypted."
    ],
    "id": 492,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Add a policy.xss file to your website",
      "B.Add a policy:xss header to the API request",
      "C.Enable CORS in the API Gateway",
      "D.Enable CORS in the JavaScript frontend "
    ],
    "detail": "You’re building an API backend available at services.yourcompany.com. The API is implemented with API Gateway and Lambda. You successfully tested the API curl. You implemented JavaScript to call the API from a webpage on your corporate website www.yourcompany.com. When you access that page in your browser, you get the following error: \"The same origin policy disallows reading the remote resource\" How can you allow your corporate webpages to invoke the API?",
    "explanation": [
      "Correct answer is C as the webpage is on an other domain then the backend services domain, this is an cross origin call and restricted by browsers due to security. CORS needs to be enabled at the API Gateway to allows cross domain requests.",
      "Refer to AWS documentation - API Gateway CORS",
      "When your API's resources receive requests from a domain other than the API's own domain, you must enable cross-origin resource sharing (CORS) for selected methods on the resource."
    ],
    "id": 493,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Standard Reserved Instances",
      "B.Convertible Reserved Instances",
      "C.Scheduled Reserved Instances",
      "D.On-Demand Instances "
    ],
    "detail": "A company is running a web application 24/7 with a steady usage throughout the day and with consistent usage. They would need the application for a year, after which it would be decommissioned. Which EC2 purchasing option would be most cost effective?",
    "explanation": [
      "Correct answer is A as the usage is constant and consistent, Standard RIs with a reservation of 1 year can provide with the best purchasing option.",
      "Refer AWS documentation - EC2 RI types"
    ],
    "id": 494,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Deploy a Windows Bastion host on the corporate network that has RDP access to all instances in the VPC.",
      "B.Deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere.",
      "C.Deploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses.",
      "D.Deploy a Windows Bastion host with an auto-assigned Public IP address in the public subnet, and allow RDP access to the bastion from only the corporate public IP addresses. "
    ],
    "detail": "A customer is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They have only authorized the bastion-security-group with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups, but the company wants to further limit administrative access to all of the instances in the VPC. Which of the following Bastion deployment scenarios will meet this requirement?",
    "explanation": [
      "Correct answer is D as you can limit direct access to the instances by using a Bastion Host in public subnet with either a Public IP or Elastic IP address with inbound limited from corporate IP address and instances in VPC allowing access from only the bastion host.",
      "Also Refer to AWS documentation for Bastion Host",
      "Option A is wrong as Bastion host must be in AWS",
      "Option B is wrong as Bastion host needs to restrict access only from the corporate IP addresses",
      "Option C is wrong as Bastion host has to be in the public subnet"
    ],
    "id": 495,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.General Purpose SSD",
      "B.Provisioned IOPS SSD with 1000 IOPS",
      "C.Provisioned IOPS SSD with 2000 IOPS ",
      "D.Throughput-Optimized HDD "
    ],
    "detail": "You are running a Customer Relationship Management application and want to minimize costs. You need 400GB of disk space and 1000 IOPS, but occasionally up to 2000 IOPS. Which EBS volume types should you choose?",
    "explanation": [
      "Correct answer is A as General purpose provides 3 IOPS per GiB volume size which turns out to be 1200 IOPS. The 200 IOPS would add up to the IO credit balance, which can allow for a burst performance of 2000 IOPS.",
      "Refer AWS documentation - EBS Volume Types - GP2",
      "Each volume receives an initial I/O credit balance of 5.4 million I/O credits, which is enough to sustain the maximum burst performance of 3,000 IOPS for 30 minutes. This initial credit balance is designed to provide a fast initial boot cycle for boot volumes and to provide a good bootstrapping experience for other applications. Volumes earn I/O credits at the baseline performance rate of 3 IOPS per GiB of volume size.",
      "When your volume requires more than the baseline performance I/O level, it draws on I/O credits in the credit balance to burst to the required performance level, up to a maximum of 3,000 IOPS. Volumes larger than 1,000 GiB have a baseline performance that is equal or greater than the maximum burst performance, and their I/O credit balance never depletes. When your volume uses fewer I/O credits than it earns in a second, unused I/O credits are added to the I/O credit balance. The maximum I/O credit balance for a volume is equal to the initial credit balance (5.4 million I/O credits)."
    ],
    "id": 496,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Virtual Private Network connection. AWS Directory Services, and ClassicLink",
      "B.Virtual Private Network connection. AWS Directory Services, and Amazon Workspaces",
      "C.AWS Directory Service, Amazon Workspaces, and AWS Identity and Access Management",
      "D.Amazon Elastic Compute Cloud, and AWS Identity and Access Management "
    ],
    "detail": "A company needs to deploy virtual desktops to its customers in a virtual private cloud, leveraging existing security controls. Which set of AWS services and features will meet the company’s requirements?",
    "explanation": [
      "Correct answer is B as WorkSpaces for Virtual desktops, and AWS Directory Services to authenticate to an existing on-premises AD through VPN",
      "Amazon WorkSpaces is a fully managed, secure Desktop-as-a-Service (DaaS) solution which runs on AWS. With Amazon WorkSpaces, you can easily provision virtual, cloud-based Microsoft Windows desktops for your users, providing them access to the documents, applications, and resources they need, anywhere, anytime, from any supported device",
      "Option A is wrong as ClassicLink allows you to link an EC2-Classic instance to a VPC in your account, within the same region",
      "Option C is wrong as AD service needs a VPN connection to interact with an On-premise AD directory",
      "Option D is wrong as Need WorkSpaces for virtual desktops"
    ],
    "id": 497,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Modify the Amazon CloudWatch alarm period that triggers your auto scaling scale down policy.",
      "B.Modify the Auto scaling group termination policy to terminate the oldest instance first.",
      "C.Modify the Auto scaling policy to use scheduled scaling actions.",
      "D.Modify the Auto scaling group cool down timers.",
      "E.Modify the Auto scaling group termination policy to terminate newest instance first. "
    ],
    "detail": "In reviewing the auto scaling events for your application you notice that your application is scaling up and down multiple times in the same hour. What design choice could you make to optimize for the cost while preserving elasticity? Choose 2 answers.",
    "explanation": [
      "Correct answer are A & D as the scaling activity is happening quite frequently, the reasons would either be that the alarms configured are causing the auto scaling to scale up and down fast or the cool down timers are small due to which the auto scaling activity is triggered before the new instance gets a chance to handle traffic.",
      "Option B is wrong as terminating oldest instance would help save cost but would not prevent the auto scaling from scale up/down cycle.",
      "Option C is wrong as scheduled scaling only helps when the pattern is known",
      "Option E is wrong as terminating newest instance would increase cost but also would not prevent the auto scaling from scale up/down cycle."
    ],
    "id": 498,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Generate pre-signed URLs for each user as they request access to protected S3 content",
      "B.Create an IAM user for each subscribed user and assign the GetObject permission to each IAM user",
      "C.Create an S3 bucket policy that limits access to your private content to only your subscribed users’ credentials",
      "D.Create a CloudFront Origin Identity user for your subscribed users and assign the GetObject permission to this user "
    ],
    "detail": "You have private video content in S3 that you want to serve to subscribed users on the Internet. User IDs, credentials, and subscriptions are stored in an Amazon RDS database. Which configuration will allow you to securely serve private content to your users?",
    "explanation": [
      "Correct answer is A as once you authenticate the use using credentials in database, the application can generate a pre-signed url to allow user access to the video.",
      "Refer AWS documentation - S3 Share Object with PreSigned URL",
      "All objects by default are private. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.",
      "Option B is not a feasible, scalable option to create IAM user for each user and then use those credentials to access the object",
      "Option C is wrong as bucket policy cannot work with subscribed user credentials",
      "Option D is wrong as CloudFront OAI prevents users from accessing the video directly from S3, however anyone who has CloudFront url can still access it."
    ],
    "id": 499,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 ",
      "B.Amazon DynamoDB",
      "C.Amazon RDS",
      "D.Amazon Redshift "
    ],
    "detail": "A company is looking for a fully-managed solution to store its players state information for a rapidly growing game. The application runs on multiple Amazon EC2 nodes, which can scale according to the incoming traffic. The request can be routed to any of the nodes, therefore the state information must be stored in a centralized database. The players state information needs to be read with strong consistency and needs conditional updates for any changes. Which service would be MOST cost-effective and scale seamlessly?",
    "explanation": [
      "Correct answer is B as DynamoDB can provide centralized storage for storing state information with strong consistency, ability to do conditional updates and scale seamlessly.",
      "Refer AWS documentation - DynamoDB FAQs",
      "Option A is wrong as S3 does not provide conditional updates and is not suitable to store state information.",
      "Option C is wrong as RDS would not scale seamlessly.",
      "Option D is wrong as Redshift is a data warehousing solution and is not suitable to store state information."
    ],
    "id": 500,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 and an Application Load Balancer ",
      "B.Amazon S3 and Amazon CloudFront ",
      "C.Amazon EC2 and Amazon Elastic Transcoder ",
      "D.AWS Lambda and Amazon API Gateway "
    ],
    "detail": "A company has a popular multi-player mobile game hosted in its on-premise datacenter. The current infrastructure can no longer keep up with demand and the company considering a move to the cloud. Which solution should a Solutions Architect recommend as the MOST scalable and cost-effective solution to meet these needs?",
    "explanation": [
      "Correct answer is D as API Gateway with Lambda can provide the most scalable and cost effective solution with its serverless architecture.",
      "Option A is wrong as EC2 would not scale and would need Auto Scaling and would not be cost-effective.",
      "Option B is wrong as S3 is more for static website hosting.",
      "Option C is wrong as Elastic Transcoder is for transcoding videos and not needed."
    ],
    "id": 501,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Pause the RDS activities from CLI until it is required in the future ",
      "B.Stop the RDS instance ",
      "C.Create a snapshot of RDS to launch in the future and terminate the instance now ",
      "D.Change the instance size to micro "
    ],
    "detail": "A user is running a MySQL RDS instance. The user will not use the DB for the next 3 months. How can the user save costs?",
    "explanation": [
      "NOTE - AWS now allows stopping RDS instances. Refer AWS blog (Circa June 2017)",
      "Correct answer is C as there is no stop/start, pause actions for RDS databases and you would be charged for the RDS and storage. When you delete a DB Instance, you can create a final DB Snapshot upon deletion which then can be used to restore the database."
    ],
    "id": 502,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon VPC Flow logs",
      "B.Amazon CloudWatch logs",
      "C.Amazon S3 server access logs ",
      "D.AWS CloudTrail "
    ],
    "detail": "A large enterprise has highly sensitive customer data which is stored in several Amazon S3 buckets. Which of the following features should be enabled to detect unauthorized access to the buckets?",
    "explanation": [
      "Correct answer is C as S3 Server access logging provides detailed data of requests made to the bucket, which can be help detect unauthorized.",
      "Server access logging provides detailed records for the requests that are made to a bucket. Server access logs are useful for many applications. For example, access log information can be useful in security and access audits. It can also help you learn about your customer base and understand your Amazon S3 bill.",
      "Option A is wrong as VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.",
      "Option B is wrong as CloudWatch is more of an monitoring service.",
      "Option D is wrong as CloudTrail service enables governance, compliance, operational auditing, and risk auditing of your AWS account. It does not track access to S3 buckets."
    ],
    "id": 503,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Add provisioned IOPS to the instances",
      "B.Increase the base number of Auto Scaling instances for the Auto Scaling group",
      "C.Increase the instance type in the launch configuration",
      "D.Change the scale down CloudWatch metric to a higher threshold "
    ],
    "detail": "When reviewing the Auto Scaling events, it is noticed that an application is scaling up and down multiple times within the hour. What design change could you make to optimize cost while preserving elasticity?",
    "explanation": [
      "Correct answer is D as the issue would be cause of lower scale down threshold, which causes the CloudWatch to Scale down on a different threshold ensuring the load has actually reduced."
    ],
    "id": 504,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Have the application call AWS STS to obtain temporary credentials that have access privileges to the Amazon S3 bucket",
      "B.Configure the application to retrieve temporary credentials from the Amazon-provided server at 169.254.169.253",
      "C.Launch the Amazon EC2 instances with an IAM role that has access privileges to the amazon S3 bucket",
      "D.Configure an Amazon S3 bucket policy that grants the application access to the Amazon S3 bucket "
    ],
    "detail": "Your company IT policy prohibits employees from handling application credentials. Any credentials must be rotated least monthly. You plan to deploy a new application on Amazon EC2 instances in an Auto Scaling group within a VPC. The application must access objects within an Amazon S3 bucket. The application will leverage an Amazon SDK. Which approach meets these requirements?",
    "explanation": [
      "Correct answer is C as using IAM Role with EC2 instances can help the application using SDK retrieve and use the credentials automatically. Temporary credentials are also rotated automatically.",
      "Refer AWS documentation - IAM Roles for EC2",
      "For applications, AWS CLI, and Tools for Windows PowerShell commands that run on the instance, you do not have to explicitly get the temporary security credentials — the AWS SDKs, AWS CLI, and Tools for Windows PowerShell automatically get the credentials from the EC2 instance metadata service and use them.",
      "Option A is wrong as a call to STS cannot be used to directly retrieve temporary credentials with an IAM role.",
      "Option B is wrong as the application can retrieve the credentials from the metadata service. However, the it needs to have an IAM role and also the url is &lt;span class=\"\"&gt;http:/&lt;span class=\"\"&gt;/169.254.169.254/latest&lt;/span&gt;&lt;span class=\"\"&gt;/meta-data/iam&lt;/span&gt;&lt;span class=\"\"&gt;/security-credentials/s&lt;/span&gt;3access&lt;/span&gt;",
      "Option D is wrong as S3 bucket policy cannot be configured to restrict access to an application."
    ],
    "id": 505,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Set up an S3 bucket based in Paris and enable cross-region replication from the Oregon bucket to the Paris bucket ",
      "B.Create an Application Load Balancer that load balances data retrieval between the Oregon S3 bucket and a new Paris S3 bucket",
      "C.Create an Amazon CloudFront distribution with the bucket located in Oregon as the origin and set the Maximum Time to Live (TTL) for cache behavior to 0 ",
      "D.Set up an S3 bucket based in Paris and enable a lifecycle management rule to transition data from the Oregon bucket to the Paris bucket. "
    ],
    "detail": "A customer has service based out of Oregon US and Paris, France. The application is storing data in an S3 bucket located in Oregon and that database updated frequently. The Paris office is experiencing slow response times when retrieving objects. What should a Solutions Architect do to resolve the slow response times for the Paris office?",
    "explanation": [
      "Correct answer is A as the S3 cross replication would help duplicate the data in the Paris region allowing the application to point to the respective bucket as per the location of the user.",
      "Refer AWS documentation - S3 Cross Region Replication",
      "Cross-region replication (CRR) enables automatic, asynchronous copying of objects across buckets in different AWS Regions. Buckets configured for cross-region replication can be owned by the same AWS account or by different accounts.",
      "Minimize latency\n—If your customers are in two geographic locations, you can minimize latency in accessing objects by maintaining object copies in AWS Regions that are geographically closer to your users.",
      "Option B is wrong as ALB does not help load balance requests on S3.",
      "Option C is wrong as CloudFront with maximum TTL 0 does not cache the objects. \nIf you set the Default, Minimum, and Maximum TTL to 0 seconds, then CloudFront acts as a proxy and doesn't cache the objects.",
      "Option D is wrong as lifecycle management does not transition object across regions."
    ],
    "id": 506,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.DynamoDB",
      "B.Amazon S3",
      "C.Amazon Aurora",
      "D.Amazon Redshift "
    ],
    "detail": "An application requires a highly available relational database with an initial storage capacity of 8 TB. The database will grow by 8 GB every day. To support expected traffic, at least eight read replicas will be required to handle database reads. Which option will meet these requirements?",
    "explanation": [
      "Correct answer is C as Amazon Aurora is a relational database that will automatically scale to accommodate data growth.",
      "Refer AWS documentation - Aurora Performance",
      "Aurora storage automatically scales with the data in your cluster volume. As your data grows, your cluster volume storage grows in 10 gibibyte (GiB) increments up to 64 TiB.",
      "Aurora scales on both the storage and instance side. Aurora DB cluster by creating up to 15 Aurora Replicas in the DB cluster.",
      "Option A is wrong as DynamoDB is a NoSQL service, not a relational database.",
      "Option B is wrong as S3 is object storage, not a relational database.",
      "Option D is wrong as Redshift does not support read replicas and will not automatically scale."
    ],
    "id": 507,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.dedicated",
      "B.isolated",
      "C.one",
      "D.reserved "
    ],
    "detail": "If I want my instance to run on a single-tenant hardware, which value do I have to set the instance’s tenancy attribute to?",
    "explanation": [
      "Correct answer is A. Dedicated instances are physically isolated at the host hardware level from instances that belong to other AWS accounts. Dedicated Hosts to launch Amazon EC2 instances on physical servers that are dedicated for your use"
    ],
    "id": 508,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Remove the ability for the user to delete",
      "B.Enable versioning on the bucket",
      "C.You can use MFA to prevent accidental deletions of an object",
      "D.Creating a bucket policy that prevents accidental deletions "
    ],
    "detail": "You have multiple AWS users with access to an Amazon S3 bucket. These users have permission to add and delete objects. If you wanted to prevent accidental deletions, what might you do to prevent these users from performing accidental deletions of an object?",
    "explanation": [
      "Correct answer is B as Object versioning would help recovery of object in case of accidental deletes or overwriting.",
      "Refer AWS documentation - S3 Object Versioning",
      "This functionality prevents you from accidentally overwriting or deleting objects and affords you the opportunity to retrieve a previous version of an object.",
      "Option A is wrong as it would remove the complete deletion access, even for valid requests.",
      "Option C is wrong as MFA just adds an additional authentication check, but it would not prevent the user from deleting the object",
      "Option D is wrong as Bucket policy cannot prevent accident deletion, it can basically allow or deny."
    ],
    "id": 509,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.A collection of Auto Scaling groups in the same Region",
      "B.Feature that enables EC2 instances to interact with each other via high bandwidth, low latency connections",
      "C.A collection of Elastic Load Balancers in the same Region or Availability Zone",
      "D.A collection of authorized CloudFront edge locations for a distribution "
    ],
    "detail": "What is a placement group?",
    "explanation": [
      "Correct answer is B",
      "A placement group is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both",
      "Refer AWS documentation - EC2 Placement Group"
    ],
    "id": 510,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Set up a streaming data ingestion application on Amazon EC2 and connect it to a Hadoop cluster for data processing. Send the output to Amazon S3 and use Amazon Athena to analyze the data ",
      "B.Configure the input stream using Amazon Kinesis Data streams. Use Amazon Kinesis Data Analytics to write SQL queries against the stream. ",
      "C.Configure the input stream using Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to send data to an Amazon Redshift cluster and then query directly against Amazon Redshift. ",
      "D.Set up a streaming data ingestion application on Amazon EC2 and send the output to Amazon S3 using Kinesis Data Firehose. Use Athena to analyze the data. "
    ],
    "detail": "An online company wants to conduct real-time sentiment analysis about its products from its social media channels using SQL Which of the following solutions has the LOWEST cost and operational burden?",
    "explanation": [
      "Correct answer is B as Kinesis Data Streams can be used to capture the data and Kinesis Data Analytics can help query the data using SQL queries, without any operational overhead.",
      "Refer AWS documentation - Kinesis Data Analytics",
      "Amazon Kinesis Data Analytics is the easiest way to analyze streaming data, gain actionable insights, and respond to your business and customer needs in real time. Amazon Kinesis Data Analytics reduces the complexity of building, managing, and integrating streaming applications with other AWS services. SQL users can easily query streaming data or build entire streaming applications using templates and an interactive SQL editor.",
      "Amazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service. KDS can continuously capture gigabytes of data per second from hundreds of thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.",
      "Option A is wrong as there is an operational overhead with the ingestion system on EC2 instances and the Hadoop cluster. Also, S3 is not suitable for real time analytics.",
      "Option C is wrong as Redshift does not allow real time analytics.",
      "Option D is wrong as S3 is not suitable for real time analytics and there is an operational overhead with the ingestion system on EC2 instances."
    ],
    "id": 511,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Tag the instance with a production-identifying tag and add resource-level permissions to the employee user with an explicit deny on the terminate API call to instances with the production tag.",
      "B.Tag the instance with a production-identifying tag and modify the employees group to allow only start, stop, and reboot api calls and not the terminate instance call.",
      "C.Modify the IAM policy on the user to require MFA before deleting EC2 instances and disable MFA access to the employee",
      "D.Modify the IAM policy on the user to require MFA before deleting EC2 instances "
    ],
    "detail": "An employee keeps terminating EC2 instances on the production environment. You've determined the best way to ensure this doesn't happen is to add an extra layer of defense against terminating the instances. What is the best method to ensure the employee does not terminate the production instances? Choose 2 answers",
    "explanation": [
      "Correct answer are A & B as the restrictions can be added by tagging the instances and either explicitly allowing the user to start/stop but not terminate the instances or denying user to terminate the instance.",
      "Option C & D are wrong as MFA will not prevent the user from terminating the instance, but just adds and additional layer of security."
    ],
    "id": 512,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.One public subnet for ELB, one public subnet for the web-servers, and one private subnet for the database",
      "B.One public subnet for ELB, two private subnets for the web-servers, two private subnets for RDS",
      "C.Two public subnets for ELB, two private subnets for the web-servers and two private subnets for RDS",
      "D.Two public subnets for ELB, two public subnets for the web-servers, and two public subnets for RDS "
    ],
    "detail": "You need to design a VPC for a web-application consisting of an Elastic Load Balancer (ELB) a fleet of web/application servers, and an RDS database. The entire Infrastructure must be distributed over 2 availability zones. Which VPC configuration works while assuring the database is not available from the Internet?",
    "explanation": [
      "Correct answer is C as you need to attach ELB with 2 public subnets and 2 private subnets for web servers and a Multi-AZ RDS spanning 2 AZs. Its recommended to have the Web Servers and RDS in private subnets and to keep the points exposed to internet minimal, while being exposed by ELB.",
      "Refer AWS documentation - ELB Backend Instances",
      "When you create a load balancer, you must add one or more public subnets to the load balancer. If your instances are in private subnets, create public subnets in the same Availability Zones as the subnets with your instances; you will add these public subnets to the load balancer."
    ],
    "id": 513,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Apply Multi-AZ for the underlying S3 bucket.",
      "B.Copy the data to an EBS Volume in another region.",
      "C.Create a snapshot of the S3 bucket and copy it to another region.",
      "D.Enable Cross-Region Replication for the S3 bucket. "
    ],
    "detail": "Your company has confidential documents stored in the Simple Storage Service. Due to compliance requirements, there is a need for the data in the S3 bucket to be available in a different geographical location. As an architect, what change would you make to comply with this requirement?",
    "explanation": [
      "Correct answer is D as S3 allows buckets to be configured for cross-region replication.",
      "Refer AWS documentation - S3 Cross Region Replication",
      "Cross-region replication is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions. We refer to these buckets as \nsource bucket and \ndestination bucket. These buckets can be owned by different AWS accounts."
    ],
    "id": 514,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create a network ACL on the Web Server's subnets, allow HTTPS port 3306 inbound and specify the source as 0.0.0.0/0",
      "B.Create a Web Server security group that allows HTTPS port 443 inbound traffic from anywhere (0.0.0.0/0) and apply it to the Web Servers.",
      "C.Create a DB Server security group that allows MySQL port 3306 inbound and specify the source as the Web Server security group.",
      "D.Create a network ACL on the DB subnet, allow MySQL port 3306 inbound for Web Servers and deny all outbound traffic.",
      "E.Create a DB Server security groups that allows HTTPS port 443 inbound and specify the source as a Web Server security group. "
    ],
    "detail": "A company hosts a popular web application that connects to an Amazon RDS MySQL DB instance running in a private VPC subnet created with default ACL settings. The web servers must be accessible only to customers on an SSL connection and the database must only be accessible to web servers in a public subnet. How can the solution be designed to meet these requirements without impacting other running applications? Choose 2 answers",
    "explanation": [
      "Correct answer is B & C. As the web servers needs to be internet accessible over SSL, the security group should allow 443 for all i.e. 0.0.0.0/0. Web servers need to communicate to Database servers on port 3306, so the database security group should allow incoming requests from the web server security group.",
      "Refer AWS documentation - VPC Security",
      "Option A is wrong as the port 3306 is needed for HTTPS.",
      "Option D is wrong as NACLs are stateless and would need the outbound traffic to be opened as well.",
      "Option E is wrong as DB security groups need the port 3306 to be opened."
    ],
    "id": 515,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create Amazon DB Read Replicas. Configure the application layer to query the Read Replicas for query needs.",
      "B.Use Auto Scaling to scale out and scale in the database tier.",
      "C.Use SQS to cache the database queries.",
      "D.Use ElastiCache in front of your Amazon RDS DB to cache common queries. "
    ],
    "detail": "Your company is hosting an application in AWS. The application is read intensive and consists of a set of web servers and AWS RDS. It has been noticed that the response time of the application decreases due to the load on the AWS RDS instance. Which of the following measures can be taken to scale the data tier? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D",
      "Refer AWS documentation - RDS Read Replicas & ElastiCache FAQs",
      "Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances.",
      "Amazon ElastiCache is an ideal front-end for data stores like Amazon RDS or Amazon DynamoDB, providing a high-performance middle tier for applications with extremely high request rates and/or low latency requirements.",
      "Option B is wrong as database tier cannot be dynamically scaled using auto scaling",
      "Option C is wrong as SQS would help improve decoupling, but it cannot cache database queries."
    ],
    "id": 516,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Store the images in Amazon S3.",
      "B.Store the images on Amazon CloudFront.",
      "C.Store the images on Amazon EBS.",
      "D.Store the images on the ELB. "
    ],
    "detail": "You are maintaining an application that is spread across multiple web servers and has incoming traffic balanced by ELB. The application allows users to upload pictures. Currently, each web server stores the image and a background task synchronizes the data between servers. However, the synchronization task can no longer keep up with the number of images uploaded. What change could you make so that all web servers have a place to store and read images at the same time?",
    "explanation": [
      "Correct answer is A as S3 can provide a single storage accessible from all the web servers securely without any need for synchronization.",
      "Refer AWS documentation - S3",
      "Amazon S3 has a simple web services interface that you can use to store and retrieve any amount of data, at any time, from anywhere on the web. It gives any developer access to the same highly scalable, reliable, fast, inexpensive data storage infrastructure that Amazon uses to run its own global network of web sites. The service aims to maximize benefits of scale and to pass those benefits on to developers."
    ],
    "id": 517,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an AWS Lambda function to insert the required entry for each uploaded file.",
      "B.Use AWS CloudWatch to probe for any S3 event.",
      "C.Add a S3 event notification to be sent to Lambda.",
      "D.Add the CloudWatch event to the DynamoDB table streams section. "
    ],
    "detail": "An application currently accepts users to upload files to an S3 bucket. You want to ensure that the file name for each uploaded file is stored in a DynamoDB table. How can this be achieved? Choose 2 answers",
    "explanation": [
      "Correct answer are A & C as S3 event notification can be configured to invoke a Lambda function whenever an object is added. The Lambda function can then add the entry to the DynamoDB table.",
      "Refer AWS documentation - Lambda with S3",
      "Amazon S3 can publish events (for example, when an object is created in a bucket) to AWS Lambda and invoke your Lambda function by passing the event data as a parameter. This integration enables you to write Lambda functions that process Amazon S3 events. In Amazon S3, you add bucket notification configuration that identifies the type of event that you want Amazon S3 to publish and the Lambda function that you want to invoke."
    ],
    "id": 518,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Upload your customer keys to AWS CloudHSM. Associate the Amazon EBS volume with AWS CloudHSM. Remount the Amazon EBS volume.",
      "B.Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.",
      "C.Unmount the EBS volume. Toggle the encryption attribute to True. Re-mount the Amazon EBS volume.",
      "D.Snapshot the current Amazon EBS volume. Restore the snapshot to a new, encrypted Amazon EBS volume. Mount the Amazon EBS volume "
    ],
    "detail": "An existing application stores sensitive information on a non-boot Amazon EBS data volume attached to an Amazon Elastic Compute Cloud instance. Which of the following approaches would protect the sensitive data on an Amazon EBS volume?",
    "explanation": [
      "Correct answer is B",
      "Refer AWS Blog for EBS encryption",
      "You cannot enable encryption for an existing EBS volume. Instead, you must create a new, encrypted volume and copy the data from the old one to the new one using the file manipulation tool of your choice. Rsync (Linux) and Robocopy (Windows) are two good options, but there are many others.",
      "Option D is wrong as the process is Snapshot the EBS volume -&gt; Create an Encrypted Snapshot -&gt; Restore an Encrypted Volume from the Encrypted Snapshot -&gt; Mount it"
    ],
    "id": 519,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.may be performed by the customer against their own instances, only if performed from EC2 instances.",
      "B.may be performed by AWS, and is periodically performed by AWS.",
      "C.may be performed by AWS, and will be performed by AWS upon customer request.",
      "D.are expressly prohibited under all circumstances.",
      "E.may be performed by the customer against their own instances with prior authorization from AWS. "
    ],
    "detail": "Per the AWS Acceptable Use Policy, penetration testing of EC2 instances",
    "explanation": [
      "Correct answer is E as \nPenetration/Vulnerability testing can be performed only on your own instances, with mandatory prior approval, and must not violate the AWS Acceptable Use Policy.",
      "Refer AWS Security Whitepaper and Knowledge Center Article"
    ],
    "id": 520,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level.",
      "B.Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances.",
      "C.Use two SQS queues, one for high priority messages, and the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue",
      "D.Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first. "
    ],
    "detail": "Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Files submitted by your premium customers must be transformed with the highest priority. How should you implement such a system?",
    "explanation": [
      "Correct answer is C as this can be implemented using SQS Priority Queue Pattern"
    ],
    "id": 521,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable AWS CloudTrail for the load balancer.",
      "B.Enable access logs on the load balancer.",
      "C.Install the Amazon CloudWatch Logs agent on the load balancer.",
      "D.Enable Amazon CloudWatch metrics on the load balancer "
    ],
    "detail": "A customer needs to capture all client connection information from their load balancer every five minutes. The company wants to use this data for analyzing traffic patterns and troubleshooting their applications. Which of the following options meets the customer requirements?",
    "explanation": [
      "Correct answer is B as ELB access logs would help analyze traffic pattern",
      "Refer AWS documentation - ELB Access logs",
      "The access logs for Elastic Load Balancing capture detailed information for requests made to your load balancer and stores them as log files in the Amazon S3 bucket that you specify. Each log contains details such as the time a request was received, the client's IP address, latencies, request path, and server responses. You can use these access logs to analyze traffic patterns and to troubleshoot your back-end applications. For more information, see Access Logs for Your Classic Load Balancer.",
      "Option D is wrong as it does not provide Client connection information"
    ],
    "id": 522,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Give only the necessary access to the Apache servers so that the developers can gain access to the log files.",
      "B.Give read-only access to your developers to the Apache servers.",
      "C.Set up a central logging server that you can use to archive your logs; archive these logs to an S3 bucket for developer-access.",
      "D.Give root access to your Apache servers to the developers. "
    ],
    "detail": "In your LAMP application, you have some developers that say they would like access to your logs. However, since you are using an AWS Auto Scaling group, your instances are constantly being re-created. What would you do to make sure that these developers can access these log files? Choose the correct answer:",
    "explanation": [
      "Correct answer is C as the best practice is to use a central logging server to archive the logs to a centralized location like S3, to which the access can be controlled. Even if the EC2 instances are autoscaled they can push the logs to the central logging server.",
      "Option A, B & D are wrong as the best practice is not to give access to the developers. Also, as the EC2 instances are autoscaled, it would not be viable for the developers to know which instance to check for, in case of any issue."
    ],
    "id": 523,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Running the EMR cluster in a dedicated VPC",
      "B.Choosing Spot Instances for the underlying nodes",
      "C.Choosing On-Demand Instances for the underlying nodes",
      "D.Disable automated backups "
    ],
    "detail": "Your company is planning on using the EMR service available in AWS for running their big data framework and wants to minimize the cost for running the EMR service. Which of the following could help achieve this?",
    "explanation": [
      "Correct answer is B as using spot instances for task nodes in EMR can help reduce costs.",
      "Refer AWS documentation - EMR Purchasing Options",
      "Spot Instances in Amazon EMR provide an option for you to purchase Amazon EC2 instance capacity at a reduced cost as compared to On-Demand purchasing. The disadvantage of using Spot Instances is that instances may terminate unpredictably as prices fluctuate.",
      "Option A is wrong as dedicated VPC would increase costs.",
      "Option C is wrong as On-Demand instances would not provide the same cost benefits as spot instances.",
      "Option D is wrong as EMR does not have any automated backups"
    ],
    "id": 524,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Set permissions on the object to public read during upload.",
      "B.Configure the bucket ACL to set all objects to public read.",
      "C.Configure the bucket policy to set all objects to public read.",
      "D.Use AWS Identity and Access Management roles to set the bucket to public read.",
      "E.Amazon S3 objects default to public read, so no action is needed. "
    ],
    "detail": "You need to configure an Amazon S3 bucket to serve static assets for your public-facing web application. Which methods ensure that all objects uploaded to the bucket are set to public read? Choose 2 answers",
    "explanation": [
      "Correct answer are A & C as you can create a Bucket policy or set the public read permission during upload using the Object ACL",
      "You make objects publicly readable by using either the object ACL or by writing a bucket policy",
      "Refer to AWS S3 Permission article",
      "Option B is wrong as you can use ACLs to grant permissions to individual AWS accounts; however, it is strongly recommended that you do not grant public access to your bucket using an ACL.",
      "Option D is wrong as IAM Role can only be used to user/resource control access to S3 and not control bucket permissions",
      "Option E is wrong as S3 objects are private by default"
    ],
    "id": 525,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.You already have 20 on-demand instances running.",
      "B.The Auto Scaling group's MAX size is set at five.",
      "C.The Auto Scaling group's scale down policy is too high.",
      "D.The Auto Scaling group's scale up policy has not yet been reached. "
    ],
    "detail": "You have configured an Auto-scaling group for which the minimum running instance is 2 and maximum running instance is 10. For the past 30 minutes, all five instances have been running at 100 CPU Utilization; however, the Auto Scaling group has not added any more instances to the group. What is the most likely cause for this? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D",
      "Option A is the default limit of 20 has reached and Auto Scaling is not able to launch any new instances.",
      "Option D as the Auto Scaling scale up policy is not being triggered due to which new instances are not being launched.",
      "Option B is wrong as Auto Scaling does not have a MAX configuration. Max number of instances is determined by Maximum capacity which is set to 10.",
      "Option C is wrong as Auto Scaling scale down policy helps only is scale in and it would wait for the scale out to happen before scaling in."
    ],
    "id": 526,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A",
      "D",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Create a thumbnail generation application, whenever a user uploads an image into S3",
      "B.Create a video transcoding website where multiple components need to communicate with each other, but can't all process the same amount of work simultaneously",
      "C.Distribute static web content to end users with low latency across multiple countries",
      "D.Create a AWS resource compliance monitoring application using AWS Config",
      "E.Create a website click streams, financial transactions, social media feeds, IT logs, and location-tracking events using Kinesis Streams",
      "F.Orchestrating the execution of distributed and auditable business processes "
    ],
    "detail": "An organization is exploring AWS Lambda. Which are valid use case for AWS Lambda ? Choose 3 answers",
    "explanation": [
      "Correct answer is A, D & E.",
      "Refer AWS documentation - Lambda Use Cases",
      "Option B is wrong as SQS is more suitable to implement a decouple solution.",
      "Option C is wrong as CloudFront is more ideal for distributing content across geographies",
      "Option F is wrong as SWF is more suitable to handle the orchestration."
    ],
    "id": 527,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Enable Source/Destination Check on the private Instances.",
      "B.Enable Source/Destination Check on the NAT instance.",
      "C.Disable Source/Destination Check on the private instances",
      "D.Disable Source/Destination Check on the NAT instance "
    ],
    "detail": "You manually launch a NAT AMI in a public subnet. The network is properly configured. Security groups and network access control lists are property configured. Instances in a private subnet can access the NAT. The NAT can access the Internet. However, private instances cannot access the Internet. What additional step is required to allow access from the private instances?",
    "explanation": [
      "Correct answer is D as the Source/Destination check attribute on the NAT must be disable and not on the private instances.",
      "Refer AWS documentation - VPC NAT",
      "Each EC2 instance performs source/destination checks by default. This means that the instance must be the source or destination of any traffic it sends or receives. However, a NAT instance must be able to send and receive traffic when the source or destination is not itself. Therefore, you must disable source/destination checks on the NAT instance."
    ],
    "id": 528,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.SQS can accommodate message payloads of any size",
      "B.SQS check the health of the worker instances ",
      "C.SQS synchronously provides transcoding output",
      "D.SQS decouples the transcoding task from the upload "
    ],
    "detail": "A company has a workflow that uploads video files from their data center to AWS for transcoding. They use Amazon EC2 worker instances that pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?",
    "explanation": [
      "Correct answer is D as SQS helps decouple the upload task from the transcoding task. The upload and transcode does not need to be synchronous and can be queued up. SQS will also help scale the capacity as the demand for transcoding changes.",
      "Option A is wrong as ideally SQS messages are limited to 256KB and can be extended to 2 GB using the SQS Extended Library",
      "The minimum message size is 1 byte (1 character). The maximum is 262,144 bytes (256 KB).",
      "To send messages larger than 256 KB, you can use the Amazon SQS Extended Client Library for Java. This library allows you to send an Amazon SQS message that contains a reference to a message payload in Amazon S3. The maximum payload size is 2 GB.",
      "Option B is wrong as SQS does not help check the health of worker instances.",
      "Option C is wrong as SQS helps handle the task asynchronously."
    ],
    "id": 529,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Amazon S3 role in IAM with access to the specific DynamoDB tables, and assign it to the bucket hosting your website. ",
      "B.Configure S3 bucket tags with your AWS access keys for your bucket hosing your website so that the application can query them for access. ",
      "C.Configure a web identity federation role within IAM to enable access to the correct DynamoDB resources and retrieve temporary credentials. ",
      "D.Store AWS keys in global variables within your application and configure the application to use these credentials when making requests. "
    ],
    "detail": "Your company has developed a web application and is hosting it in an Amazon S3 bucket configured for static website hosting. The application is using the AWS SDK for JavaScript in the browser to access data stored in an Amazon DynamoDB table. How can you ensure that API keys for access to your data in DynamoDB are kept secure?",
    "explanation": [
      "Correct answer is C as the application is using AWS JavaScript SDK it can use Web Identity Federation to authentication the user and have temporary credentials to access the correct DynamoDB credentials",
      "Refer AWS documentation - Web Identity Federation & Web Identity Federation using JavaScript SDK",
      "When you write such an app, you'll make requests to AWS services that must be signed with an AWS access key. However, we strongly recommend that you do not embed or distribute long-term AWS credentials with apps that a user downloads to a device, even in an encrypted store. Instead, build your app so that it requests temporary AWS security credentials dynamically when needed using web identity federation. The supplied temporary credentials map to an AWS role that has only the permissions needed to perform the tasks required by the mobile app."
    ],
    "id": 530,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Perform SQL injection for application testing.",
      "B.Run penetration testing on AWS with prior approval from Amazon.",
      "C.Perform a hardening test on the AWS instance.",
      "D.Perform a Code Check for any memory leaks. "
    ],
    "detail": "An organization is setting up their website on AWS. The organization is working on various security measures to be performed on the AWS EC2 instances. Which of the below mentioned security mechanisms will not help the organization to avoid future data leaks and identify security weaknesses?",
    "explanation": [
      "Correct answer is D as Code Check for memory will only help in targeting performance issues.",
      "Refer AWS Security Whitepaper",
      "Other options help avoid future data leaks and identify security weaknesses. Perform penetration testing as performed by attackers to find any vulnerability with prior approval from AWS. Hardening testing to find if there are any unnecessary ports open Perform SQL injection to find any DB security issues."
    ],
    "id": 531,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use Encrypted Environment Variables",
      "B.Use a separate Lambda function for providing the password",
      "C.Use HTTPS for the Lambda function",
      "D.Store the password in S3 with Server Side Encryption, and retrieve it in the Lambda function "
    ],
    "detail": "A company is using Lambda function for different environments. Each environment used different DB passwords. How do you design the solution in a secure way?",
    "explanation": [
      "Correct answer is B as for storing sensitive information Lambda recommends using a separate function to providing the same.",
      "Refer AWS documentation - Lambda Environment Variables",
      "As mentioned in the previous section, when you deploy your Lambda function, all the environment variables you've specified are encrypted by default after, but not during, the deployment process. They are then decrypted automatically by AWS Lambda when the function is invoked. If you need to store sensitive information in an environment variable, we strongly suggest you encrypt that information before deploying your Lambda function.",
      "Fortunately, the Lambda console makes that easier for you by providing encryption helpers that leverage AWS Key Management Service to store that sensitive information as Ciphertext. The Lambda console also provides decryption helper code to decrypt that information for use in your in Lambda function code."
    ],
    "id": 532,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Multiple subnets",
      "B.Multiple Availability Zones",
      "C.An auto scaling group to recover from EC2 instance failures",
      "D.An SQS queue "
    ],
    "detail": "Your supervisor asks you to create a highly available website which serves static content from EC2 instances. Which of the following is not a requirement to accomplish this goal? Choose the correct answer",
    "explanation": [
      "Correct answer is D as to build a Highly Available Website the EC2 instances need to hosted in multiple AZs and multiple subnets with auto scaling. SQS would not help build a HA Website."
    ],
    "id": 533,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a similar RDS PostgreSQL instance and direct all traffic to it",
      "B.Use the secondary instance of the Multiple Availability Zone for read traffic only",
      "C.Create a read replica and send half of all traffic to it",
      "D.Create a read replica and send all read traffic to it "
    ],
    "detail": "An application stores data in an Amazon RDS PostgreSQL Multi-AZ database instance. The ratio of read requests to write requests is about 2 to 1. Recent increases in traffic are causing very high latency. How can this problem be corrected?",
    "explanation": [
      "Correct answer is D as read replica can help offload the complete read traffic from the RDS instance thereby reducing load and reducing latency.",
      "Refer AWS documentation - RDS Read Replicas",
      "Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads.",
      "Option A is wrong as a seperate instance would face the same issue unless scaled up.",
      "Option B is wrong as Secondary or Standby is not available for use.",
      "Option C is wrong as Read traffic cannot handle the write traffic. So only read traffic needs to be send to it."
    ],
    "id": 534,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Reduces the latency by splitting the workload across multiple AZs",
      "B.A simple web services interface to create and store multiple data sets, query your data easily, and return the results",
      "C.Offload the read traffic from your database in order to reduce latency caused by read-heavy workload",
      "D.Managed service that makes it easy to set up, operate and scale a relational database in the cloud "
    ],
    "detail": "Which statement best describes ElastiCache?",
    "explanation": [
      "Correct answer is C as ElastiCache can help offload real traffic by caching queries.",
      "ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases",
      "Option A is wrong as it is provided by ELB",
      "Option D is wrong as it is provided by RDS"
    ],
    "id": 535,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Only the account that has purchased the RI will get the advantage of RI pricing",
      "B.One instance of a small size and running in the us-east-1a zone of each AWS account will get the benefit of RI pricing",
      "C.Any single instance from all the three accounts can get the benefit of AWS RI pricing if they are running in the same zone and are of the same size",
      "D.If there are more than one instances of a small size running across multiple accounts in the same zone no one will get the benefit of RI "
    ],
    "detail": "An organization has added 3 of his AWS accounts to consolidated billing. One of the AWS accounts has purchased a Reserved Instance (RI) of a small instance size in the us-east-1a zone. All other AWS accounts are running instances of a small size in the same zone. What will happen in this case for the RI pricing?",
    "explanation": [
      "Correct answer is C as with Consolidated billing you can get the benefit of RI purchased by other AWS accounts",
      "Refer AWS documentation - Consolidated billing benefits",
      "For billing purposes, the consolidated billing feature of AWS Organizations treats all the accounts in the organization as one account. This means that all accounts in the organization can receive the hourly cost benefit of Amazon EC2 Reserved Instances purchased by any other account."
    ],
    "id": 536,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Use an array of EBS volumes ",
      "B.Enable Multi-AZ mode.",
      "C.Place the instance in an Auto Scaling Groups",
      "D.Add an EBS volume and place into RAID 5",
      "E.Increase the size of the EC2 Instance. "
    ],
    "detail": "You are using an m1.small EC2 Instance with one 300 GB EBS volume to host a relational database. You determined that write throughput to the database needs to be increased. Which of the following approaches can help achieve this? Choose 2 answers",
    "explanation": [
      "Correct answers are A & E as the only option to increase the write throughput is to scale up. Instances can be scaled up either by striping the volumes or by increasing the instance class type",
      "Option B is wrong as Multi AZ is for High Availability and not for scaling",
      "Option C is wrong as database does not work in a scale out mode.",
      "Option D is wrong as RAID 5 is not recommended as it provides parity and EBS volumes are already replicated across multiple servers in an AZ for availability and durability, so AWS recommends striping for performance rather than durability"
    ],
    "id": 537,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon ElastiCache",
      "B.Amazon S3",
      "C.Amazon EC2 Instance store ",
      "D.Amazon DynamoDB "
    ],
    "detail": "You are launching an application in an Auto Scaling group. To store the user session state, you need a structured storage, service with durability and low latency. Which service meets your needs?",
    "explanation": [
      "Correct answer is D as DynamoDB provides a highly scalable, consistent, low latency datastore with a cross region replication ability. It also supports structured data for e.g. JSON documents directly into DynamoDB tables.",
      "Refer AWS documentation - DynamoDB",
      "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity, makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications."
    ],
    "id": 538,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Storage Gateway",
      "B.Amazon DynamoDB",
      "C.Amazon CloudFront",
      "D.Amazon Glacier",
      "E.Amazon Simple Queue Service "
    ],
    "detail": "Which of the following services natively encrypts data at rest within an AWS region? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D as Storage gateway and Glacier natively encrypts data.",
      "Refer AWS Whitepaper - Securing Data at Rest with Encryption"
    ],
    "id": 539,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a lifecycle hook for your Auto Scaling group",
      "B.Add a scaling-specific cooldown period to the scaling policy",
      "C.Adjust the CPU threshold that triggers a scaling action",
      "D.Attach a new launch configuration to the Auto Scaling group "
    ],
    "detail": "Your Auto Scaling group is configured to launch one new Amazon EC2 instance if the overall CPU load exceeds 65% over a five minutes interval. Occasionally, the Auto Scaling group launches a second Amazon EC2 instance before the first is operational. The second instance is not required and introduces needless compute costs. How can you prevent the Auto Scaling group from launching the second instance?",
    "explanation": [
      "Correct answer is B as you need to adjust the cool down period for the newly added instance to startup and handle traffic.",
      "Refer AWS documentation - Auto Scaling Cooldowns",
      "The Auto Scaling cooldown period is a configurable setting for your Auto Scaling group that helps to ensure that Auto Scaling doesn't launch or terminate additional instances before the previous scaling activity takes effect. After the Auto Scaling group dynamically scales using a simple scaling policy, Auto Scaling waits for the cooldown period to complete before resuming scaling activities. When you manually scale your Auto Scaling group, the default is not to wait for the cooldown period, but you can override the default and honor the cooldown period. If an instance becomes unhealthy, Auto Scaling does not wait for the cooldown period to complete before replacing the unhealthy instance."
    ],
    "id": 540,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Change the origin location from an S3 bucket to an ELB.",
      "B.Use Origin Access Identity with S3",
      "C.Increase the cache expiration time.",
      "D.Create an \"invalidation\" for all your objects, and recache them. "
    ],
    "detail": "A company is utilizing CloudFront to distribute its media content to multiple regions. The content is frequently accessed by users. As a cloud architect, which of the following options would help you improve the performance of the system in a cost-effective way?",
    "explanation": [
      "Correct answer is C as CloudFront allows caching of objects and serving them from edge locations with low latency. The longer the duration, the longer the object is available in the cache and hence reduces the load on the origin.",
      "Refer AWS documentation - CloudFront Expiration",
      "You can control how long your objects stay in a CloudFront cache before CloudFront forwards another request to your origin. Reducing the duration allows you to serve dynamic content. Increasing the duration means your users get better performance because your objects are more likely to be served directly from the edge cache. A longer duration also reduces the load on your origin.",
      "Typically, CloudFront serves an object from an edge location until the cache duration that you specified passes—that is, until the object expires. After it expires, the next time the edge location gets a user request for the object, CloudFront forwards the request to the origin server to verify that the cache contains the latest version of the object.",
      "Option A is wrong as ELB does not help increase performance and would be costly then S3.",
      "Option B is wrong as OAI helps protect the S3 objects from being available to all, with the access being restricted only to CloudFront.",
      "Option D is wrong as Invalidating the cache before it expires is costly as CloudFront would charge for the same."
    ],
    "id": 541,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use a sequential ID for the prefix.",
      "B.Use a hexadecimal hash for the prefix.",
      "C.Use a hexadecimal hash for the suffix.",
      "D.Use a sequential ID for the suffix.",
      "E.Use a date for the suffix. "
    ],
    "detail": "You are designing a web application that stores static assets in an Amazon Simple Storage Service (S3) bucket. As a part of migration and pre-feeding of data, a million images are required to be uploaded to S3. What option ensures optimal performance in this case?",
    "explanation": [
      "Correct answer is B as randomness helps distribute the objects across multiple partitions, hence improving the performance.",
      "Refer AWS documentation - S3 Performance",
      "Amazon S3 maintains an index of object key names in each AWS region. Object keys are stored in UTF-8 binary ordering across multiple partitions in the index. The key name dictates which partition the key is stored in. Using a sequential prefix, such as time stamp or an alphabetical sequence, increases the likelihood that Amazon S3 will target a specific partition for a large number of your keys, overwhelming the I/O capacity of the partition. If you introduce some randomness in your key name prefixes, the key names, and therefore the I/O load, will be distributed across more than one partition.",
      "One way to introduce randomness to key names is to add a hash string as prefix to the key name. For example, you can compute an MD5 hash of the character sequence that you plan to assign as the key name. From the hash, pick a specific number of characters, and add them as the prefix to the key name. The following example shows key names with a four-character hash."
    ],
    "id": 542,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon RDS ",
      "C.Amazon EFS ",
      "D.Amazon EBS "
    ],
    "detail": "An application runs on multiple Amazon EC2 instances. Each running instance of the application must have access to a shared file system. Where should the data be stored?",
    "explanation": [
      "Correct answer is C as EFS provides a shared file system which can be access from multiple EC2 instances at the same time.",
      "Refer AWS documentation - EFS FAQs",
      "Q. What is Amazon Elastic File System?",
      "Amazon EFS is a fully-managed service that makes it easy to set up and scale file storage in the Amazon Cloud. With a few clicks in the AWS Management Console, you can create file systems that are accessible to Amazon EC2 instances via a file system interface (using standard operating system file I/O APIs) and supports full file system access semantics (such as strong consistency and file locking).",
      "Amazon EFS file systems can automatically scale from gigabytes to petabytes of data without needing to provision storage. \nTens, hundreds, or even thousands of Amazon EC2 instances can access an Amazon EFS file system at the same time, and Amazon EFS provides consistent performance to each Amazon EC2 instance. Amazon EFS is designed to be highly durable and highly available. With Amazon EFS, there is no minimum fee or setup costs, and you pay only for the storage you use.",
      "Option A, B are wrong S3 is not a file system",
      "Option D is wrong as EBS cannot be shared across multiple EC2 instances at the same time."
    ],
    "id": 543,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Reader endpoint for Amazon Aurora",
      "B.Cluster endpoint for Amazon Aurora",
      "C.Primary DB instance endpoint for Amazon Aurora",
      "D.Replica DB instances endpoint for Aurora. "
    ],
    "detail": "A team is launching a marketing campaign and the peak database read activity in Amazon Aurora for MySQL is expected to increase. A Solutions Architect decides to add two Read Replicas to the cluster. How should the Solutions Architect ensure that the connections for read activities are load balanced?",
    "explanation": [
      "Correct answer is A as there are two read replica that need to be load balanced, a Reader endpoint needs to be used.",
      "Refer AWS documentation - Aurora Reader Endpoint",
      "You use the reader endpoint for read-only connections for your Aurora cluster. This endpoint uses a load-balancing mechanism to help your cluster handle a query-intensive workload. The reader endpoint is the endpoint that you supply to applications that do reporting or other read-only operations on the cluster.",
      "The reader endpoint only load-balances connections to available Aurora Replicas in an Aurora DB cluster. It doesn't load-balance individual queries. If you want to load-balance each query to distribute the read workload for a DB cluster, open a new connection to the reader endpoint for each query.",
      "Each Aurora cluster has a single built-in reader endpoint, whose name and other attributes are managed by Aurora. You can't create, delete, or modify this kind of endpoint.",
      "Option B is wrong as Cluster endpoints helps provide a single endpoint to primary and standby instance.",
      "Because each Aurora cluster has a single built-in cluster endpoint, whose name and other attributes are managed by Aurora, you can't create, delete, or modify this kind of endpoint.",
      "You use the cluster endpoint when you administer your cluster, perform extract, transform, load (ETL) operations, or develop and test applications. The cluster endpoint connects to the primary instance of the cluster. The primary instance is the only DB instance where you can create tables and indexes, run INSERT statements, and perform other DDL and DML operations.",
      "Each Aurora cluster has a single built-in cluster endpoint, whose name and other attributes are managed by Aurora. You can't create, delete, or modify this kind of endpoint.",
      "The physical IP address pointed to by the cluster endpoint changes when the failover mechanism promotes a new DB instance to be the read-write primary instance for the cluster. If you use any form of connection pooling or other multiplexing, be prepared to flush or reduce the time-to-live for any cached DNS information. Doing so ensures that you don't try to establish a read-write connection to a DB instance that became unavailable or is now read-only after a failover.",
      "Option C is wrong as primary DB instance does not point to read replicas.",
      "Option D is wrong as Replica DB instance would have individual endpoints and load balancing needs to handled by the application."
    ],
    "id": 544,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Delete the manual snapshots.",
      "B.Set the retention period of the automated snapshots to 35 days.",
      "C.Choose to use Spot Instances instead of Reserved Instances.",
      "D.Choose to use Instance store volumes to store the cluster data. "
    ],
    "detail": "A company has a Redshift Cluster defined in AWS. The IT Operations team have ensured that both automated and manual snapshots are in place. Since the cluster is going to be run for a long duration of a couple of years, Reserved Instances have been purchased. There has been a recent concern on the cost being incurred by the cluster. Which of the following steps can be carried out to minimize the costs being incurred by the cluster?",
    "explanation": [
      "Correct answer is A as manual snapshots do not have any retention period and would be retained indefinitely unless deleted.",
      "Refer AWS documentation - Redshift Snapshots",
      "When you enable Amazon Redshift to automatically copy snapshots to another region, you specify the destination region where you want snapshots to be copied. In the case of automated snapshots, you can also specify the retention period that they should be kept in the destination region. After an automated snapshot is copied to the destination region and it reaches the retention time period there, it is deleted from the destination region, keeping your snapshot usage low. You can change this retention period if you need to keep the automated snapshots for a shorter or longer period of time in the destination region.",
      "The retention period that you set for automated snapshots that are copied to the destination region is separate from the retention period for automated snapshots in the source region. The default retention period for copied snapshots is seven days. That seven-day period only applies to automated snapshots. Manual snapshots are not affected by the retention period in either the source or destination regions, and they remain until you manually delete them.",
      "Option B is wrong as automation snapshots have a retention period of 35 days and they are automatically deleted beyond it.",
      "Option B is wrong as spot instances cannot be used for Redshift",
      "Option D is wrong as Redshift needs persistent storage and instance stores are not recommended."
    ],
    "id": 545,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Modify the Instance User Data property with a timeout interval.",
      "B.Increase the Auto Scaling Cooldown timer value.",
      "C.Enable the Auto Scaling cross zone balancing feature.",
      "D.Disable CloudWatch alarms till the application stabilizes. "
    ],
    "detail": "A company plans to use Auto Scaling groups to maintain the performance of their web application. How can they ensure that the scaling activity has sufficient time to stabilize without executing another scaling action?",
    "explanation": [
      "Correct answer is B as Auto Scaling cooldown time helps new instances launched by the auto scaling policy to gear up and start serving traffic, before any other auto scaling policy is implemented.",
      "Refer AWS documentation- Auto Scaling Cooldown",
      "The cooldown period is a configurable setting for your Auto Scaling group that helps to ensure that it doesn't launch or terminate additional instances before the previous scaling activity takes effect. After the Auto Scaling group dynamically scales using a simple scaling policy, it waits for the cooldown period to complete before resuming scaling activities. When you manually scale your Auto Scaling group, the default is not to wait for the cooldown period, but you can override the default and honor the cooldown period. If an instance becomes unhealthy, the Auto Scaling group does not wait for the cooldown period to complete before replacing the unhealthy instance."
    ],
    "id": 546,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Gateway-Cached volumes with snapshots scheduled to Amazon S3",
      "B.Gateway-Stored volumes with snapshots scheduled to Amazon S3",
      "C.Gateway-Virtual Tape Library with snapshots to Amazon S3",
      "D.Gateway-Virtual Tape Library with snapshots to Amazon Glacier "
    ],
    "detail": "A customer has a single 3-TB volume on-premises that is used to hold a large repository of images and print layout files. This repository is growing at 500 GB a year and must be presented as a single logical volume. The customer is becoming increasingly constrained with their local storage capacity and wants an off-site backup of this data, while maintaining low-latency access to their frequently accessed data. Which AWS Storage Gateway configuration meets the customer requirements?",
    "explanation": [
      "Key point here is the local storage capacity is constrained and low-latency access to their frequently accessed data",
      "Refer AWS documentation - Gateway Storage",
      "Correct answer is A Gateway Cache Volume"
    ],
    "id": 547,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Determine whether remote administrative access is performed securely.",
      "B.Verify that all Amazon Simple Storage Service (S3) bucket policies and ACLs correctly implement your security policies.",
      "C.Determine whether unnecessary users and services have been identified on all Amazon-published AMIs.",
      "D.Verify that AWS Trusted Advisor has identified and disabled all unnecessary users and services on your Amazon Elastic Compute Cloud (EC2) instances. "
    ],
    "detail": "To be prepared for a security assessment, an organization should implement which two configuration management practices? (Choose 2 answers)",
    "explanation": [
      "Correct answers are A & B as they target security issues with remote administrative access being secured and S3 policies are correctly defined.",
      "Option C is wrong as Amazon published AMIs are Amazon's responsibility",
      "Option D is wrong as Trusted Advisor would help only identify the issues but you need to act on the same."
    ],
    "id": 548,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2, because EBS volumes can scale to hold any amount of data and, when used with Auto Scaling, can be designed for fault tolerance and high availability",
      "B.Amazon Import/Export, because Amazon assists in migrating large amounts of data to Amazon S3",
      "C.Amazon Glacier, to keep costs low for storage and scale infinitely",
      "D.Amazon S3, because it provides unlimited amounts of storage data, scales automatically, is highly available, and durable "
    ],
    "detail": "You are working for a startup company that is building an application that receives large amounts of data. Unfortunately, current funding has left the start-up short on cash, cannot afford to purchase thousands of dollars of storage hardware, and has opted to use AWS. Which services would you implement in order to store a virtually unlimited amount of data without any effort to scale when demand unexpectedly increases?",
    "explanation": [
      "Correct answer is D as S3 would provide an unlimited storage as the demand increases as it is handled by AWS itself.",
      "Refer AWS documentation - S3 FAQs",
      "Amazon S3 provides a simple web service interface that you can use to store and retrieve any amount of data, at any time, from anywhere on the web. Using this web service, developers can easily build applications that make use of Internet storage. Since Amazon S3 is highly scalable and you only pay for what you use, developers can start small and grow their application as they wish, with no compromise on performance or reliability.",
      "Amazon S3 is also designed to be highly flexible. Store any type and amount of data that you want; read the same piece of data a million times or only for emergency disaster recovery; build a simple FTP application, or a sophisticated web application such as the Amazon.com retail web site. Amazon S3 frees developers to focus on innovation, not figuring out how to store their data."
    ],
    "id": 549,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon RDS",
      "C.Amazon EBS",
      "D.Amazon Redshift "
    ],
    "detail": "Which two AWS services provide out-of-the-box user configurable automatic backup-as-a-service and backup rotation options? Choose 3 answers",
    "explanation": [
      "Correct answers are B, C & D as both RDS & Redshift have automated backups.",
      "Refer AWS documentation - RDS FAQs & Redshift FAQs & EBS DLM",
      "Q: Do I need to enable backups for my DB Instance or is it done automatically?",
      "By default, Amazon RDS enables automated backups of your DB Instance with a 7 day retention period.",
      "Q: Do I need to enable backups for my data warehouse cluster or is it done automatically?By default, Amazon Redshift enables automated backups of your data warehouse cluster with a 1-day retention period.",
      "You can use Amazon Data Lifecycle Manager (Amazon DLM) to automate the creation, retention, and deletion of snapshots taken to back up your Amazon EBS volumes. Automating snapshot management helps you to:",
      "Option A is wrong as S3 has not automated backups feature."
    ],
    "id": 550,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Simple Notification Service ",
      "B.AWS Simple Workflow ",
      "C.AWS Simple Query Service ",
      "D.AWS Simple Queue Service "
    ],
    "detail": "A user has developed an application, which is required to send the data to a NoSQL database. The user wants to decouple the data sending such that the application keeps processing and sending data but does not wait for an acknowledgement of DB. Which of the below mentioned applications helps in this scenario?",
    "explanation": [
      "Correct answer is D as SQS allows you to develop durable, distributed and decoupled architectures. Producers and Consumers can be decoupled and they can work on their own handling capacity.",
      "Refer AWS documentation - SQS FAQs",
      "Amazon Simple Queue Service (Amazon SQS) offers reliable, highly-scalable hosted queues for storing messages while they travel between applications or microservices. Amazon SQS lets you move data between distributed application components and helps you decouple these components"
    ],
    "id": 551,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Source and destination buckets must have versioning enabled",
      "B.Source and destination buckets must have versioning disabled",
      "C.Source and destination buckets must be in different AWS Regions",
      "D.Source and destination buckets must be in different AWS Regions or different AZs",
      "E.S3 must have permissions to replicate objects from that source bucket to the destination bucket on your behalf "
    ],
    "detail": "An organization wants to setup cross region replication for compliance reasons. What are the requirements for setting up cross region replication? Choose 3 answers",
    "explanation": [
      "Correct answer are A, C & E.",
      "Refer AWS documentation - S3 Cross Region Replication",
      "Requirements for cross-region replication:"
    ],
    "id": 552,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Adding a bucket policy on the S3 bucket.",
      "B.Configuring lifecycle configuration rules on the S3 bucket.",
      "C.Creating an IAM policy for the S3 bucket.",
      "D.Enabling CORS on the S3 bucket. "
    ],
    "detail": "An application saves the logs to an S3 bucket. A user wants to keep the logs for one month for troubleshooting purposes, and then purge the logs. What feature will enable this?",
    "explanation": [
      "Correct answer is B as S3 Object Lifecycle management helps automated object transition across storage class and expiration as well.",
      "Refer AWS documentation - S3 Object Lifecycle management",
      "To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A \nlifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:",
      "Option A & C are wrong as they allow access control to S3 bucket and objects.",
      "Option D is wrong as CORS is for allowing cross domain calls to the S3 bucket"
    ],
    "id": 553,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an ELB to reroute traffic to a failover instance",
      "B.Create a secondary ENI that can be moved to a failover instance",
      "C.Use Route53 health checks to fail traffic over to a failover instance",
      "D.Assign a secondary private IP address to the primary ENI that can be moved to a failover instance "
    ],
    "detail": "You are managing a legacy application Inside VPC with hard coded IP addresses in its configuration. Which two mechanisms will allow the application to failover to new instances without the need for reconfiguration?",
    "explanation": [
      "Correct answers are B & D as the application is legacy and needs hard coded IP address you can use secondary ENI or secondary IP address.",
      "Refer AWS documentation - EC2 using ENI",
      "To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, \nyou can move the interface and/or secondary private IPv4 address to a standby instance.",
      "Option A & C are wrong as they would not allow to maintain a fixed hard coded IP address."
    ],
    "id": 554,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a primary routing policy.",
      "B.Configure a weighted routing policy.",
      "C.Configure a Multi-answer routing policy.",
      "D.Configure a failover routing policy. "
    ],
    "detail": "An architecture consists of the following: a) A primary and secondary infrastructure hosted in AWS b) Both infrastructures comprise ELB, Auto Scaling and EC2 resources How should Route 53 be configured to ensure proper failover in case the primary infrastructure was to go down?",
    "explanation": [
      "Correct answer is D as \nFailover routing lets you route traffic to a resource when the resource is healthy or to a different resource when the first resource is unhealthy. The primary and secondary records can route traffic to anything from an Amazon S3 bucket that is configured as a website to a complex tree of records.",
      "Refer AWS documentation - Route 53 Routing Policy"
    ],
    "id": 555,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EBS",
      "B.Amazon DynamoDB",
      "C.Amazon EC2 Instance Store",
      "D.Amazon SQS "
    ],
    "detail": "You are designing a scalable web application with stateless web servers. Which service or feature is well suited to store user session information?",
    "explanation": [
      "Correct answer is B as DynamoDB provides an ideal option to store user session information and provide scalable low latency access.",
      "Refer AWS Storage Options Whitepaper",
      "DynamoDB is ideal for existing or new applications that need a flexible NoSQL database with low read and write latencies, and the ability to scale storage and throughput up or down as needed without code changes or downtime.",
      "Use cases require a highly available and scalable database because downtime or performance degradation has an immediate negative impact on an organization’s business. for e.g. mobile apps, gaming, digital ad serving, live voting and audience interaction for live events, sensor networks, log ingestion, access control for web-based content, metadata storage for S3 objects, e-commerce shopping carts, and web session management"
    ],
    "id": 556,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.enable Multi-Factor Authentication (MFA) protected access",
      "B.enable Delete Protection on the ALB",
      "C.enabled Termination Protection on the ALB",
      "D.ALB does not provide any feature to prevent accidental deletion "
    ],
    "detail": "To protect your ALB from accidental deletion, you should",
    "explanation": [
      "Correct answer is B as ALB provides Deletion Protection option, which when enabled. protects ALB from accidental deletion.",
      "Refer AWS documentation - ELB Application Load Balancer",
      "Delete Protection - You can enable deletion protection on an Application Load Balancer to prevent it from being accidentally deleted."
    ],
    "id": 557,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create one NAT instance in a public subnet; create a route from the private subnet to the NAT gateway",
      "B.Create two NAT instances in a public subnet, create a route from the private subnet to each NAT gateway for fault tolerance",
      "C.Create two NAT instances in two separate public subnets, create a route from the private subnet to each NAT gateway for fault tolerance",
      "D.Create two NAT instances in two separate private subnets. "
    ],
    "detail": "A company needs to configure a NAT instance for its internal AWS applications to be able to download patches and package software. Currently, they are running a NAT instance that is using the floating IP scripting configuration to create fault tolerance for the NAT. The NAT instance needs to be built with fault tolerance in mind. What is the best way to configure the NAT instance with fault tolerance? Choose the correct answer from the options below",
    "explanation": [
      "Correct answer is C as for fault tolerance the NAT instances can be hosted in two separate subnets with a route for each private subnet to public subnet.",
      "Option A & B are wrong for fault tolerance the two NAT instances need to be created in separate subnets.",
      "Option D is wrong as NAT instances need to be created in public subnets"
    ],
    "id": 558,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Design graphical user interface interactions",
      "B.Manage user identification and authorization",
      "C.Store Web content",
      "D.Coordinate synchronous and asynchronous tasks, which are distributed, and fault tolerant. "
    ],
    "detail": "Amazon SWF is designed to help users",
    "explanation": [
      "Correct answer is D",
      "Refer AWS documentation - SWF",
      "Amazon Simple Workflow gives you the ability to build and run distributed, fault-tolerant applications that span multiple systems (cloud-based, on-premise, or both). SWF coordinates the flow of synchronous or asynchronous tasks (logical application steps) so that you can focus on your business and your application instead of having to worry about the infrastructure.",
      "Option B is wrong as IAM does it",
      "Option C is wrong as S3 can do it."
    ],
    "id": 559,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Security Group Inbound Rule: Protocol – TCP. Port Range – 22, Source 72.34.51.100/32",
      "B.Security Group Inbound Rule: Protocol – UDP, Port Range – 22, Source 72.34.51.100/32",
      "C.Network ACL Inbound Rule: Protocol – UDP, Port Range – 22, Source 72.34.51.100/32",
      "D.Network ACL Inbound Rule: Protocol – TCP, Port Range-22, Source 72.34.51.100/0 "
    ],
    "detail": "You are tasked with setting up a Linux bastion host for access to Amazon EC2 instances running in your VPC. Only clients connecting from the corporate external public IP address 72.34.51.100 should have SSH access to the host. Which option will meet the customer requirement?",
    "explanation": [
      "Correct answer is A as for connecting from external network to instances within VPC, the Bastion needs to allow access from 72.34.51.100/32 with TCP on port 22.",
      "Option D is wrong as Network ACL would not work as it would need a outbound rule as well, as NACL are stateless."
    ],
    "id": 560,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Physical security of AWS data centers and facilities",
      "B.Logical security of customer SSH private key material",
      "C.Patching of Amazon Elastic Compute Cloud hypervisors",
      "D.Decommissioning storage devices at end of life",
      "E.Encryption of traffic within a virtual private cloud",
      "F.Access control within a virtual private cloud "
    ],
    "detail": "Which of the following does AWS own under the shared security responsibility model? Choose 3 answers.",
    "explanation": [
      "Correct answers are A, C & D as AWS is responsible for Physical security of AWS data centers, hypervisors and decommissioning of storage devices.",
      "Refer AWS documentation - Shared Responsibility Model",
      "Option B, E and F are wrong as anything with and within the VPC is customer's responsibility like security of keys, VPC, instances and data traffic to VPC and instances."
    ],
    "id": 561,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.You can associate multiple subnets with the same Route Table. ",
      "B.You can associate multiple subnets with the same Route Table, but you can't associate a subnet with only one Route Table. ",
      "C.You can't associate multiple subnets with the same Route Table. ",
      "D.None of these. "
    ],
    "detail": "In regards to VPC, select the correct statement:",
    "explanation": [
      "Correct answer is A as multiple subnets can be associated with a same Route tables",
      "Refer AWS documentation - VPC Route Tables",
      "A route table contains a set of rules, called routes, that are used to determine where network traffic is directed.",
      "Each subnet in your VPC must be associated with a route table; the table controls the routing for the subnet. A subnet can only be associated with one route table at a time, but you can associate multiple subnets with the same route table."
    ],
    "id": 562,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Each subnet maps to a single Availability Zone",
      "B.A CIDR block mask of /25 is the smallest range supported",
      "C.Instances in a private subnet can communicate with the Internet only if they have an Elastic IP.",
      "D.By default, all subnets can route between each other, whether they are private or public",
      "E.Each subnet spans at least 2 Availability zones to provide a high-availability environment "
    ],
    "detail": "Which of the following are characteristics of Amazon VPC subnets? Choose 2 answers",
    "explanation": [
      "Correct answer are A & D as each subnet span within a single AZ and can route traffic between each other.",
      "Refer AWS documentation - VPC Subnets & VPC Route Tables",
      "Every route table contains a local route for communication within the VPC over IPv4.",
      "When you create a VPC, it spans all the Availability Zones in the region. After creating a VPC, you can add one or more subnets in each Availability Zone. When you create a subnet, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block. \nEach subnet must reside entirely within one Availability Zone and cannot span zones. Availability Zones are distinct locations that are engineered to be isolated from failures in other Availability Zones. By launching instances in separate Availability Zones, you can protect your applications from the failure of a single location. We assign a unique ID to each subnet.",
      "Option B is wrong as /28 is the smallest.",
      "You can assign a single CIDR block to a VPC. The allowed block size is between a /16 netmask and /28 netmask",
      "Option C is wrong as instances can communicate with themselves.",
      "Option E is wrong as a subnet spans a single AZ only"
    ],
    "id": 563,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Exponentially",
      "B.Incrementally",
      "C.EBS snapshots are not stored in the Amazon S3",
      "D.Decrementally "
    ],
    "detail": "How are the EBS snapshots saved on Amazon S3?",
    "explanation": [
      "Correct answer is B as EBS snapshots are incremental",
      "Refer AWS documentation - Create EBS Snapshot",
      "A point-in-time snapshot of an EBS volume, can be used as a baseline for new volumes or for data backup. If you make periodic snapshots of a volume, the snapshots are incremental—only the blocks on the device that have changed after your last snapshot are saved in the new snapshot. Even though snapshots are saved incrementally, the snapshot deletion process is designed so that you need to retain only the most recent snapshot in order to restore the entire volume."
    ],
    "id": 564,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D",
      "E",
      "F"
    ],
    "category": "saa",
    "choices": [
      "A.Use a HTTPS GET to the Amazon S3 bucket where the files are located.",
      "B.Restore by implementing a lifecycle policy on the Amazon S3 bucket.",
      "C.Make an Amazon Glacier Restore API call to load the files into another Amazon S3 bucket within four to six hours.",
      "D.Launch a new AWS Storage Gateway instance AMI in Amazon EC2, and restore from a gateway snapshot.",
      "E.Create an Amazon EBS volume from a gateway snapshot, and mount it to an Amazon EC2instance",
      "F.Launch an AWS Storage Gateway virtual iSCSI device at the branch office, and restore from a gateway snapshot "
    ],
    "detail": "A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. An event takes the link between the main and branch office offline. Which methods will enable the branch office to access their data? Choose 3 answers",
    "explanation": [
      "Correct answer are D, E & F as Storage Gateway volumes are only accessible from the AWS Storage Gateway and cannot be directly accessed using Amazon S3 APIs.",
      "Refer AWS documentation - Storage Gateway FAQs"
    ],
    "id": 565,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an IAM bucket policy to provide access for a week’s duration.",
      "B.Create a pre-signed URL for each profile which will last for a week’s duration.",
      "C.Create an S3 bucket policy to provide access for a week’s duration.",
      "D.Create an IAM role to provide access for a week’s duration. "
    ],
    "detail": "An application hosted in AWS allows users to upload videos to an S3 bucket. A user is required to be given access to upload some videos for a week based on the profile. How can be this be accomplished in the best way possible?",
    "explanation": [
      "Correct answer is B as S3 allows creating pre-signed urls with limited access for a limited period for users to upload objects to an S3 bucket.",
      "Refer AWS documentation - S3 Upload Object with PreSigned URL",
      "A pre-signed URL gives you access to the object identified in the URL, provided that the creator of the pre-signed URL has permissions to access that object. That is, if you receive a pre-signed URL to upload an object, you can upload the object only if the creator of the pre-signed URL has the necessary permissions to upload that object.",
      "All objects and buckets by default are private. The pre-signed URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. When you create a pre-signed URL, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (PUT for uploading objects), and an expiration date and time. The pre-signed URLs are valid only for the specified duration"
    ],
    "id": 566,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Responses to allowed inbound traffic are allowed to flow outbound regardless of outbound rules, and vice versa",
      "B.Using network ACLs, you can deny access from a specific IP range",
      "C.Keep network ACL rules simple and use a security group to restrict application level access",
      "D.NACLs are associated with a single Availability Zone "
    ],
    "detail": "Which of the following statements describes network ACLs? (Choose 2 answers)",
    "explanation": [
      "Correct answer are B & C as NACLs allow you to define Deny rules and Application level access is better controlled using Security groups.",
      "Refer AWS documentation - VPC NACLs",
      "Option A is wrong as NACLs are stateless and outbound is not allowed and needs to be defined explicitly.",
      "Option D is wrong as NACLs are associated with Subnet"
    ],
    "id": 567,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.AWS KMS",
      "B.HTTPS",
      "C.SFTP",
      "D.FTPS "
    ],
    "detail": "A company has asked a Solutions Architect to ensure that data is protected during data transfer to and from Amazon S3. Use of which service will protect the data in transit?",
    "explanation": [
      "Correct answer is B as S3 allows encryption of data in transit using HTTPS.",
      "Refer AWS documentation - S3 FAQs",
      "Q: How secure is my data in Amazon S3?",
      "Amazon S3 is secure by default. Upon creation, only the resource owners have access to Amazon S3 resources they create. Amazon S3 supports user authentication to control access to data. You can use access control mechanisms such as bucket policies and Access Control Lists (ACLs) to selectively grant permissions to users and groups of users. The Amazon S3 console highlights your publicly accessible buckets, indicates the source of public accessibility, and also warns you if changes to your bucket policies or bucket ACLs would make your bucket publicly accessible.",
      "You can securely upload/download your data to Amazon S3 via SSL endpoints using the HTTPS protocol. If you need extra security you can use the Server-Side Encryption (SSE) option to encrypt data stored at rest. You can configure your Amazon S3 buckets to automatically encrypt objects before storing them if the incoming storage requests do not have any encryption information. Alternatively, you can use your own encryption libraries to encrypt data before storing it in Amazon S3."
    ],
    "id": 568,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Elastic Load Balancing, Amazon EC2, and Auto Scaling",
      "B.Elastic Load Balancing, Amazon RDS with Multi-AZ, and Amazon S3 ",
      "C.Amazon RDS with Multi-AZ and Auto Scaling ",
      "D.Amazon EC2, Amazon DynamoDB, and Amazon S3 "
    ],
    "detail": "A company is building a two-tier web application to serve dynamic transaction-based content. The data tier is leveraging an Online Transactional Processing (OLTP) database. What services should you leverage to enable an elastic and scalable web tier?",
    "explanation": [
      "Correct answer is A as the question targets only enabling an elastic and scalable web tier, which can be achieved using ELB, Auto Scaling and EC2 instances.",
      "Option B & C are wrong as RDS is not needed.",
      "Option D is wrong as DynamoDB is not needed. Also need to scale EC2 instances. S3 would be useful only for static sites."
    ],
    "id": 569,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use instance memory to save session state.",
      "B.Use instance storage to save session state.",
      "C.Use EBS to save session state.",
      "D.Use ElastiCache to save session state.",
      "E.Use Glacier to save session slate. "
    ],
    "detail": "You have written an application that uses the Elastic Load Balancing service to spread traffic to several web servers. Your users complain that they are sometimes forced to login again in the middle of using your application, after they have already logged in. This is not behavior you have designed. What is a possible solution to prevent this happening?",
    "explanation": [
      "Correct answer is D as the reason for the user having to login in the application again. This might be cause the sticky session is lost due to the EC2 instance going down and being served by an another instance. Solution is to make the application stateless by storing session information externally like ElastiCache, DynamoDB or even RDS. Other options are not suitable for storing session state.",
      "Refer AWS Storage Options Whitepaper"
    ],
    "id": 570,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.EBS snapshots only save incremental changes from snapshot to snapshot",
      "B.EBS snapshots can be created in real-time without stopping an EC2 instance",
      "C.EBS snapshots can only be restored to an EBS volume of the same size or smaller",
      "D.EBS snapshots can only be restored and mounted to an instance in the same Availability Zone as the original EBS volume "
    ],
    "detail": "Amazon EBS snapshots have which of the following two characteristics? Choose 2 answers",
    "explanation": [
      "Correct answers are A & B as EBS snapshots are incremental and Snapshot can be taken real time however it will not be consistent and the recommended way is to stop or freeze the IO",
      "Option C is wrong as EBS snapshots can only be restored to an EBS volume with same or larger size.",
      "Refer AWS documentation - EBS restoring volume",
      "If you specify both a volume size and a snapshot ID, the size must be equal to or greater than the snapshot size.",
      "Option D is wrong as Snapshots are specific to Region and can be used to create a volume in any AZ and does not depend on the original EBS volume AZ"
    ],
    "id": 571,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B",
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Storing BLOB data.",
      "B.Managing web sessions",
      "C.Storing JSON documents",
      "D.Storing metadata for Amazon S3 objects",
      "E.Running relational joins and complex updates.",
      "F.Storing large amounts of infrequently accessed data. "
    ],
    "detail": "Which of the following are use cases for Amazon DynamoDB? Choose 3 answers",
    "explanation": [
      "Correct answer are B, C and D.",
      "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model and reliable performance make it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.",
      "Option A is wrong as S3 is best suited for blob storage",
      "Option E is wrong as RDS is best suited for relation join and complex queries",
      "While Amazon DynamoDB tackles the core problems of database scalability, management, performance, and reliability, it does not have all the functionality of a relational database. It does not support complex relational queries (e.g. joins) or complex transactions. If your workload requires this functionality, or you are looking for compatibility with an existing relational engine, you may wish to run a relational engine on Amazon RDS or Amazon EC2",
      "Option F is wrong as S3 or Glacier are best suited."
    ],
    "id": 572,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.CloudWatch",
      "B.DynamoDB",
      "C.Elastic Load Balancing",
      "D.ElastiCache",
      "E.Storage Gateway "
    ],
    "detail": "A company is developing a highly available web application using stateless web servers. Which services are suitable for storing session state data? (Select TWO)",
    "explanation": [
      "Correct answer are B & D as DynamoDB and ElastiCache serve best to store user session data and provide high performance key-value storage.",
      "Refer AWS Whitepaper - Architecting for the Cloud: AWS Best Practices",
      "Option A is wrong as CloudWatch is a monitoring service",
      "Option C is wrong as ELB is a load balancing service",
      "Option E is wrong as Storage Gateway is a storage service, but it is a hybrid storage service that enables on-premises applications to use cloud storage."
    ],
    "id": 573,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Enable MFA for privileged users ",
      "B.Create individual IAM users",
      "C.Keep rotating your secure access credentials at regular intervals ",
      "D.Create strong access key and secret access key and attach to the root account "
    ],
    "detail": "Which of the below mentioned options is not a best practice to securely manage the AWS access credentials?",
    "explanation": [
      "Correct answer is D as you should never use root account, except for billing. Best practice is to create a Admin account and generate access keys only if needed.",
      "Refer AWS documentation - IAM Best Practices"
    ],
    "id": 574,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Establish a hardware VPN over the internet between VPC-2 and the on-premises network.",
      "B.Establish a hardware VPN over the internet between VPC-1 and the on-premises network",
      "C.Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2",
      "D.Establish a new AWS Direct Connect connection and private virtual interface in a different AWS region than VPC-1.",
      "E.Establish a new AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1 "
    ],
    "detail": "A company has configured and peered two VPCs: VPC-1 and VPC-2. VPC-1 contains only private subnets, and VPC-2 contains only public subnets. The company uses a single AWS Direct Connect connection and private virtual interface to connect their on-premises network with VPC-1. Which two methods increase the fault tolerance of the connection to VPC-1? Choose 2 answers",
    "explanation": [
      "Key point here is to provide fault tolerance.",
      "Correct Answer is B & E as Direct Connect connections are not redundant and you need to provide fault tolerance either by setting up a second Direct Connect connection or using VPN. Also, the connection should be to the same VPC as even though the VPC are peered, you cannot connect from one VPC to other.",
      "Option A is wrong as Peered VPC does not support Edge to Edge Routing",
      "Option C is wrong as Peered VPC does not support Edge to Edge Routing",
      "Option D is wrong as need to be in the same region as VPC-1"
    ],
    "id": 575,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Serialize the image and store it in multiple DynamoDB tables",
      "B.Create an \"Images\" DynamoDB tablee to store the Image with a foreign key constraint to the \"Product\" table",
      "C.Add an image data type to the \"Product\" tablee to store the images in binary format",
      "D.Store the images in Amazon S3 and add an S3 URL pointer to the \"Product\" tablee item for each image "
    ],
    "detail": "Company C has recently launched an online commerce site for bicycles on AWS. They have a \"Product\" DynamoDB table that stores details for each bicycle, such as, manufacturer, color, price, quantity and size to display in the online store. Due to customer demand, they want to include an image for each bicycle along with the existing details. Which approach below provides the least impact to provisioned throughput on the \"Product\" table?",
    "explanation": [
      "Correct answer is D as DynamoDB is not meant to store images and S3 is best suited for it. So the approach should be to store the images in S3 and store only the pointer in DynamoDB.",
      "Refer AWS Storage Options Whitepaper",
      "BLOB data - If you plan on storing large (greater than 64 KB) BLOB data, such as digital video, images, or music, you’ll want to consider Amazon S3. However, Amazon DynamoDB still has a role to play in this scenario, for keeping track of metadata (e.g., item name, size, date created, owner, location, and so on) about your binary objects."
    ],
    "id": 576,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Key pair is not a region level concept; all the keys are available globally",
      "B.Use copy key command Line API to transfer key to different regions",
      "C.Using import key-pair feature using AWS Web Console",
      "D.Copy AMI of your EC2 machine between regions and start an instance from that AMI "
    ],
    "detail": "You have a massive social networking application which is already deployed on North Virginia region with around 100 EC2 instances, you want to deploy your application to multiple regions for better availability. You don't want to handle multiple key pairs and want to reuse existing key pairs from North Virginia region. How will you accomplish this?",
    "explanation": [
      "Correct answer is C as you can have your own keys and import them using console of command line.",
      "Refer AWS EC2 Bring Your Own Keypair: & Import Key Pair CLI",
      "Option A is wrong as key pairs have region level scope",
      "Option B is wrong as there is no copy key command but import key pair exists",
      "Option D is wrong as Copying AMI does not copy the key, but the key should be available for the AMI to work"
    ],
    "id": 577,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Previously created resources are kept but the stack creation terminates. ",
      "B.Previously created resources are deleted and the stack creation terminates. ",
      "C.The stack creation continues, and the final results indicate which steps failed. ",
      "D.CloudFormation templates are parsed in advance so stack creation is guaranteed to succeed. "
    ],
    "detail": "What happens, by default, when one of the resources in a CloudFormation stack cannot be created?",
    "explanation": [
      "Correct answer is B as the default behavior is to rollback the changes.",
      "Refer AWS documentation - CloudFormation FAQs",
      "Q: What happens when one of the resources in a stack cannot be created successfully?",
      "By default, the “automatic rollback on error” feature is enabled. This will cause all AWS resources that AWS CloudFormation created successfully for a stack up to the point where an error occurred to be deleted. This is useful when, for example, you accidentally exceed your default limit of Elastic IP addresses, or you don’t have access to an EC2 AMI you’re trying to run. This feature enables you to rely on the fact that stacks are either fully created, or not at all, which simplifies system administration and layered solutions built on top of AWS CloudFormation."
    ],
    "id": 578,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Nothing, there are no single points of failure in this architecture.",
      "B.Create and attach a second IGW to provide redundant internet connectivity.",
      "C.Create and configure a second Elastic Load Balancer to provide a redundant load balancer",
      "D.Create a second multi-AZ RDS instance in another Availability Zone and configure replication to provide a redundant database. "
    ],
    "detail": "An organization has configured a VPC with an Internet Gateway (IGW) pairs of public and private subnets (each with one subnet per Availability Zone), and an Elastic Load Balancer (ELB) configured to use the public subnets. The applications web tier leverages the ELB, Auto Scaling and a Multi-AZ RDS database instance. The organization would like to eliminate any potential single points of failure in this design. What step should you take to achieve this organization’s objective?",
    "explanation": [
      "Correct answer is A as there is no single point for failures as",
      "IGW, ELB are AWS managed and always Highly Available and scalable.",
      "ELB with a pair of public subnet + Auto Scaling with instances in multiple AZs help provide High Availability to the applications",
      "Multi AZ RDS provide High Availability to the database in case the primary fails it is automatically switched to the standby."
    ],
    "id": 579,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Web Tier",
      "B.RDS database",
      "C.NAT Instance",
      "D.Classic Elastic Load Balancer "
    ],
    "detail": "You have a three-tier web application (web, app, and data) in a single Amazon VPC. The web and app tiers, are configured with auto scaling, each span two Availability Zones, are in separate private subnets, and sit behind ELB Classic Load Balancers with two AZs. Instances in the private subnets access the internet through a NAT instance. The data tier is a Multi-AZ Amazon RDS MySQL database instance in database subnets. Which component is not highly available?",
    "explanation": [
      "Correct answer is C as NAT Instance is a single point of failure and is not configure to scale. All the other components are configured High Availability and span across multiple AZs.",
      "Option A is wrong as auto scaling spanning two Availability Zones provides HA.",
      "Option B is wrong as Multi-AZ RDS instance provides HA.",
      "Option D is wrong as ELB provides HA by spanning across 2 AZs."
    ],
    "id": 580,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Have the application fetch an access key from an Amazon S3 bucket at run time.",
      "B.Launch the application's Amazon EC2 instance with an IAM role.",
      "C.Encrypt an access key in the application source code.",
      "D.Enroll the instance in an Active Directory domain and use AD authentication. "
    ],
    "detail": "Your application must write to an SQS queue. Your corporate security policies require that AWS credentials are always encrypted and are rotated at least once a week. How can you securely provide credentials that allow your application to write to the queue?",
    "explanation": [
      "Correct answer is B as IAM roles are based on temporary security tokens, so they are rotated automatically.",
      "Refer AWS documentation - IAM Role",
      "Option A is wrong as It’s impossible to retrieve credentials from an S3 bucket if you don’t already have credentials for that bucket.",
      "Option C is wrong as Keys in the source code cannot be rotated (and are a very bad idea).",
      "Option D is wrong as Active Directory authorization will not grant access to AWS resources."
    ],
    "id": 581,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EFS ",
      "B.Amazon S3 ",
      "C.Amazon EBS ",
      "D.Amazon ElastiCache "
    ],
    "detail": "A Solutions Architect is architecting a workload that requires a performant object-based storage system that must be shared with multiple Amazon EC2 instances. Which AWS service meets this requirement?",
    "explanation": [
      "Correct answer is B as S3 is the only object based storage which can be shared across multiple EC2 instances.",
      "Refer AWS documentation - S3 FAQs",
      "Amazon S3 is object storage built to store and retrieve any amount of data from anywhere on the Internet. It’s a simple storage service that offers an extremely durable, highly available, and infinitely scalable data storage infrastructure at very low costs.",
      "Option A is wrong as EFS is a block based storage",
      "Option C is wrong as EBS is a block based storage and it cannot be shared across multiple EC2 instances",
      "Option D is wrong as ElastiCache is caching solution."
    ],
    "id": 582,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Throttling limit was reach on Elastic Beanstalk",
      "B.Throttling limit was reach on Method",
      "C.Application deployed on Elastic Beanstalk has responded with a 500 error",
      "D.Request limit was reach on the AWS account "
    ],
    "detail": "You use API Gateway to expose APIs with the underlying backend source being Elastic Beanstalk. After a recent software deployment, your users are getting Intermittent 429 HTTP response. Throttling limit on the stage seems fine. What would be the cause of the error response?",
    "explanation": [
      "Correct answer is D as API Gateway responds with any requests over the throttling limit will receive a 429 HTTP response. API Gateway check the limits in the order AWS Account Limit -&gt; Stage or Method.",
      "Refer AWS documentation - API Gateway",
      "Q: How can I protect my backend systems and applications from traffic spikes?",
      "Amazon API Gateway provides throttling at multiple levels including global and by service call. Throttling limits can be set for standard rates and bursts. For example, API owners can set a rate limit of 1,000 requests per second for a specific method in their REST APIs, and also configure Amazon API Gateway to handle a burst of 2,000 requests per second for a few seconds. Amazon API Gateway tracks the number of requests per second. Any requests over the limit will receive a 429 HTTP response. The client SDKs generated by Amazon API Gateway retry calls automatically when met with this response.",
      "Q: How are throttling rules applied?First. API Gateway checks against your AWS account limit. If the traffic is below the set account limit, API Gateway checks the limit you have set on a stage or method. If the traffic is below the stage limit, then API Gateway applies the usage plans limits you set on a per-API key basis."
    ],
    "id": 583,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.AWS SQS",
      "B.AWS Lambda",
      "C.AWS Kinesis",
      "D.AWS SNS "
    ],
    "detail": "You need to replicate API calls across two systems in real time. What tool should you use as a buffer and transport mechanism for API call events?",
    "explanation": [
      "Correct answer is C as AWS Kinesis is an event stream service. Streams can act as buffers and transport across systems for in-order programmatic events, making it ideal for replicating API calls across systems.",
      "Refer AWS documentation - Kinesis Data Streams FAQs",
      "Ability for multiple applications to consume the same stream concurrently. For example, you have one application that updates a real-time dashboard and another that archives data to Amazon Redshift. You want both applications to consume data from the same stream concurrently and independently."
    ],
    "id": 584,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "F"
    ],
    "category": "saa",
    "choices": [
      "A.Security Groups",
      "B.DNS",
      "C.ELB",
      "D.VPC subnet",
      "E.IGW",
      "F.NACL "
    ],
    "detail": "For AWS Security, from what services I can block incoming/outgoing IPs?",
    "explanation": [
      "Correct answer is F as only NACL allows to deny IP address",
      "Refer AWS documentation - VPC NACLs",
      "A network ACL has separate inbound and outbound rules, and each rule can either allow or deny traffic."
    ],
    "id": 585,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Change the RDS instance type to get more RAM ",
      "B.Scale the web server tier horizontally",
      "C.Change the storage type to provisioned IOPS",
      "D.Split the DB layer into separate RDS instance. "
    ],
    "detail": "A Solutions Architect notices slower response times from an application. The CloudWatch metrics on the MySQL RDS indicate Read IOPS are high and fluctuate significantly when the database is under load. How should the database environment be re-designed to resolve the IOPS fluctuation?",
    "explanation": [
      "Correct answer is C as the read IOPS are high, the database storage type must be upgraded to provisioned IOPS.",
      "Refer AWS documentation - RDS Provisioned IOPS",
      "For production application that requires fast and consistent I/O performance, we recommend Provisioned IOPS (input/output operations per second) storage. Provisioned IOPS storage is a storage type that delivers predictable performance, and consistently low latency. Provisioned IOPS storage is optimized for online transaction processing (OLTP) workloads that have consistent performance requirements. Provisioned IOPS helps performance tuning of these workloads.",
      "Option A is wrong as database memory is not an issue.",
      "Option B is wrong as web tier is not an issue.",
      "Option D is wrong as DB layer cannot be split into RDS instances."
    ],
    "id": 586,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role. Have the instances bootstrap get the certificate from Amazon S3 upon first boot.",
      "B.Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group Have the launched instances generate a certificate signature request with the instance’s assigned instance-id to the Key management service for signature.",
      "C.Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.",
      "D.Configure the launched instances to generate a new certificate upon first boot Have the Key management service poll the Auto Scaling group for associated instances and send new instances a certificate signature that contains the specific instance-id. "
    ],
    "detail": "An AWS customer is deploying an application that is composed of an Auto Scaling group of EC2 Instances. The customer’s security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x 509 certificate that contains the specific instance-id. In addition an x 509 certificates must be designed by the customer’s Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?",
    "explanation": [
      "Correct answer is C as certificate must be signed by the customers key management service and this is the only option. Using S3 won't have it unique, embedding in AMI wont make it unique, Generating a new certificate by itself would defeat the requirement of getting it signed by customers key management service.",
      "Option A is wrong as Accessing from S3 was fine but how can the file be unique when every time autoscaling generates different instances and instance-id.. Thats not predictable",
      "Option B is wrong as Embedding a certificate in AMI cannot make the certificate unique.",
      "Option D is wrong as As the EC2 instances must generate unique X.509 certificate and this must be specific to the instance id. The EC2 instance can generate the certificate itself BUT it is clearly mentioned that the certificate must be signed by the customers key management service and not self signed."
    ],
    "id": 587,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.By default, all requests are denied ",
      "B.An explicit allow overrides an explicit deny ",
      "C.An explicit allow overrides default deny ",
      "D.An explicit deny does not override an explicit allow ",
      "E.By default, all request are allowed "
    ],
    "detail": "Which of the following are correct statements with policy evaluation logic in AWS Identity and Access Management? Choose 2 answers.",
    "explanation": [
      "Correct answer are A & C as by default, all requests are denied and an explicit allow overrides the default deny.",
      "Explicit Deny &gt; Explicit Allow &gt; Default Deny",
      "Refer AWS documentation - IAM Policy Evaluation"
    ],
    "id": 588,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.12 Reserved instances and rest covered by On-Demand instances",
      "B.6 Reserved instances, 6 On-Demand instances, rest covered by Spot Instances",
      "C.6 Reserved instances, 6 Spot instances, rest covered by On-Demand instances",
      "D.12 Reserved instances and rest covered by Spot instances "
    ],
    "detail": "You run a web application where web servers on EC2 Instances are in an Auto Scaling group. Monitoring over the last 6 months shows that 6 web servers are necessary to handle the minimum load. During the day up to 12 servers are needed. Five to six days per year, the number of web servers required might go up to 15. What would you recommend to minimize costs while being able to provide high availability?",
    "explanation": [
      "Correct answer is A as 12 servers are in use in a predictable fashion, 6 always and 6 during the day it would be best to go for a Reserved instances to save cost and go for On Demand instances for rest depending on demand.",
      "Option B, C & D wrong as the spot instances would not work given the availability is not guaranteed as well as ability to handle sudden node shutdown."
    ],
    "id": 589,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.No. However, if you have 2 AWS accounts this can be done ",
      "B.No. API Gateway is not designed to support multiple running versions for APIs ",
      "C.Yes. API Gateway is designed to support a number of multiple running versions ",
      "D.Yes. However, API Gateway is designed to support only 2 versions at a time. "
    ],
    "detail": "You want to have multiple versions of your APIs in API Gateway running at the same time, as not all of your applications using the services can be migrated at once. Is this possible?",
    "explanation": [
      "Correct answer is C as API Gateway allows multiple versions and multiple stages for the APIs at the same time.",
      "Refer AWS documentation - API Gateway FAQs",
      "Q: Can I run multiple versions of the same REST API?",
      "Yes. Amazon API Gateway gives you the ability to clone an existing API. When you are ready to start working on the next major version of your API, you will be able to keep working on your version 1 and version 2 APIs simultaneously."
    ],
    "id": 590,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.primary public IP",
      "B.secondary private IP",
      "C.secondary public IP",
      "D.add on secondary IP "
    ],
    "detail": "To ensure failover capabilities, consider using a _____ for incoming traffic on a network interface.",
    "explanation": [
      "Correct answer is B to add a secondary private ip address.",
      "Refer AWS documentation EC2 using ENI",
      "To ensure failover capabilities, consider using a secondary private IPv4 for incoming traffic on a network interface. In the event of an instance failure, you can move the interface and/or secondary private IPv4 address to a standby instance."
    ],
    "id": 591,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.SSL Endpoints using HTTPS Protocol",
      "B.SSL Endpoints using HTTP Protocol",
      "C.HTTP Endpoints using HTTPS Protocol",
      "D.HTTP Endpoints using HTTP Protocol "
    ],
    "detail": "How can you securely upload or download data to/from S3?",
    "explanation": [
      "Correct answer is A as S3 allows secure upload and download of data using SSL endpoints using HTTPS protocol.",
      "Refer AWS documentation - S3 FAQs",
      "Q: How secure is my data in Amazon S3?",
      "You can securely upload/download your data to Amazon S3 via SSL endpoints using the HTTPS protocol. If you need extra security you can use the Server-Side Encryption (SSE) option to encrypt data stored at rest. You can configure your Amazon S3 buckets to automatically encrypt objects before storing them if the incoming storage requests do not have any encryption information. Alternatively, you can use your own encryption libraries to encrypt data before storing it in Amazon S3."
    ],
    "id": 592,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Store data in an EBS volume and create snapshots once a week.",
      "B.Store data in an S3 bucket and enable versioning.",
      "C.Store data in two S3 buckets in different AWS regions.",
      "D.Store data on EC2 instance storage. "
    ],
    "detail": "Company salespeople upload their sales figures daily. A Solutions Architect needs a durable storage solution for these documents that also protects against users accidentally deleting important documents. Which action will protect against unintended user actions?",
    "explanation": [
      "Correct answer is B as S3 versioning helps recover objects from accidental deletion or overwrite.",
      "Refer AWS documentation - S3 Versioning",
      "Versioning is a means of keeping multiple variants of an object in the same bucket. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. With versioning, you can easily recover from both unintended user actions and application failures.",
      "Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite",
      "Option A is wrong as data would still be lost for any changes committed since the previous snapshot.",
      "Option C is wrong as storing the data in 2 S3 buckets would provide slightly more protection, but a user could still delete the object from both buckets.",
      "Option D is wrong as instance storage is ephemeral and the data would be lost if the instance is stopped and started or terminated."
    ],
    "id": 593,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Set bucket policies to restrict deletes, and also enable versioning",
      "B.Build a secondary index of your keys to protect the data",
      "C.By default, versioning is enabled on a new bucket, so you don't have to worry about it",
      "D.Back up your bucket to a bucket owned by another AWS account for redundancy "
    ],
    "detail": "Which of the following methods gives you protection against accidental loss of data stored in Amazon S3? (Choose 2)",
    "explanation": [
      "Correct answer are A & D as you can prevent the deletion and create a backup of S3 data either by using versioning or by backing up the content in a different AWS account",
      "Refer to S3 Versioning",
      "Option B is wrong as there is no concept of secondary indexes in S3, but they exist in DynamoDB",
      "Option C is wrong as by default, versioning is not enabled."
    ],
    "id": 594,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Some of the new jobs coming in are malformed and unprocessable.",
      "B.The routing tables changed and none of the workers can process events anymore. ",
      "C.Someone changed the IAM Role Policy on the instances in the worker group and broke permissions to access the queue. ",
      "D.The scaling metric is not functioning correctly. "
    ],
    "detail": "You have an asynchronous processing application using an Auto Scaling Group and an SQS Queue. The Auto Scaling Group scales according to the depth of the job queue. The completion velocity of the jobs has gone down, the Auto Scaling Group size has maxed out, but the inbound job velocity did not increase. What is a possible issue?",
    "explanation": [
      "Correct answer is A as other options would cause the job to stop processing completely, the only reasonable option seems that some of the recent messages must be malformed and unprocessable.",
      "Option B is wrong as If changed, none of the jobs would be processed",
      "Option C is wrong as If IAM role changed no jobs would be processed",
      "Option D is wrong as scaling metric did work fine as the autoscaling caused the instances to increase"
    ],
    "id": 595,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Store the files in Amazon EBS and create a Lifecycle Policy to remove the files after 6 months.",
      "B.Store the files in Amazon S3 and create a Lifecycle Policy to remove the files after 6 months.",
      "C.Store the files in Amazon Glacier and create a Lifecycle Policy to remove the files after 6 months.",
      "D.Store the files in Amazon EFS and create a Lifecycle Policy to remove the files after 6 months. "
    ],
    "detail": "A company wants to store their documents in AWS. Initially, these documents will be used frequently, and after a duration of 6 months, they would not be needed anymore. How would you architect this requirement?",
    "explanation": [
      "Correct answer is B as S3 Object Lifecycle management helps automated object transition across storage class and expiration as well.",
      "Refer AWS documentation - S3 Object Lifecycle management",
      "To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A \nlifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:",
      "Option A, C & D are wrong as lifecycle policies do not exist for EBS, Glacier and EFS"
    ],
    "id": 596,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Manual scaling",
      "B.Scheduled Scaling",
      "C.Dynamic Scaling",
      "D.Run enough instances to handle peak capacity "
    ],
    "detail": "Your application's usage peaks at 90% during the hours of 9 AM and 10 AM everyday. All other hours require only 10% of the peak resources. What is the best way to scale your application so you're only paying for max resources during peak hours? Choose the correct answer",
    "explanation": [
      "Correct answer is B as the pattern is known Scheduled scaling can be used to meet the demand.",
      "Refer AWS documentation - Auto Scaling Scheduled Scaling",
      "Scaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application."
    ],
    "id": 597,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Prefix each object name with a random string.",
      "B.Use the STANDARD_IA storage class.",
      "C.Prefix each object name with the current data.",
      "D.Enable versioning on the S3 bucket.",
      "E.Use a sequential ID for the suffix. "
    ],
    "detail": "An application reads and writes objects to an S3 bucket. When the application is fully deployed, the read/write traffic is very high. How should the architect maximize the Amazon S3 performance?",
    "explanation": [
      "Correct answer is A as randomness helps distribute the objects across multiple partitions, hence improving the performance.",
      "Refer AWS documentation - S3 Performance",
      "Amazon S3 maintains an index of object key names in each AWS region. Object keys are stored in UTF-8 binary ordering across multiple partitions in the index. The key name dictates which partition the key is stored in. Using a sequential prefix, such as time stamp or an alphabetical sequence, increases the likelihood that Amazon S3 will target a specific partition for a large number of your keys, overwhelming the I/O capacity of the partition. If you introduce some randomness in your key name prefixes, the key names, and therefore the I/O load, will be distributed across more than one partition."
    ],
    "id": 598,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "B",
      "C",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.User SQS Server Side Encryption",
      "B.AWS ensures Authentication to restrict access as per policy defined",
      "C.Using HTTP over SSL",
      "D.Using root access",
      "E.Encrypt message before pushing into SQS "
    ],
    "detail": "In regard to Amazon SQS how can messages in your queues be secured? Choose 4",
    "explanation": [
      "Correct answer are A, B, C & E as with proper access controls, encryption before pushing the message and using HTTPs",
      "Refer AWS documentation - SQS FAQs",
      "Q: How can I secure the messages in my message queues?",
      "Authentication mechanisms ensure that messages stored in Amazon SQS message queues are secured against unauthorized access. You can control who can send messages to a message queue and who can receive messages from a message queue. For additional security, you can build your application to encrypt messages before they are placed in a message queue.",
      "Amazon SQS has its own resource-based permissions system that uses policies written in the same language as AWS Identity and Access Management (IAM) policies: for example, you can use variables, just like in IAM policies. For more information, see Amazon SQS Policy Examples in the Amazon SQS Developer Guide.",
      "Amazon SQS supports the HTTP over SSL (HTTPS) and Transport Layer Security (TLS) protocols. Most clients can automatically negotiate to use newer versions of TLS without any code or configuration change. Amazon SQS supports versions 1.0, 1.1, and 1.2 of the Transport Layer Security (TLS) protocol in all regions.",
      "Q: What are the benefits of server-side encryption (SSE) for Amazon SQS?",
      "Server-side encryption (SSE) lets you transmit sensitive data in encrypted queues. SSE protects the contents of messages in Amazon SQS queues using keys managed in the AWS Key Management Service (AWS KMS). SSE encrypts messages as soon as Amazon SQS receives them. The messages are stored in encrypted form and Amazon SQS decrypts messages only when they are sent to an authorized consumer."
    ],
    "id": 599,
    "saved_answer": null,
    "type": "Multiple Answer"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.An inbound rule allowing traffic from the security group attached to the ALB ",
      "B.An inbound rule allowing traffic from the network ACLs attached to the ALB ",
      "C.An outbound rule allowing traffic to the security group attached to the ALB ",
      "D.An outbound rule blocking all traffic to the Internet. "
    ],
    "detail": "A web application is running on Amazon EC2 instances behind an Elastic Load Balancing Application Load Balancer (ALB). The EC2 instances show no traffic, except for web request to the application. Based on these requirements, what security groups rules should be put on the Amazon EC2 instances?",
    "explanation": [
      "Correct answer is A as the EC2 instances need to allow traffic from ALB.",
      "Refer AWS documentation - VPC Security",
      "Option B is wrong as inbound ACLs would need outbound ACL rules as the ACLs are stateless.",
      "Options C & D are wrong as Security Groups are stateful and do not need an outbound rule for incoming traffic."
    ],
    "id": 600,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 / Amazon EC2",
      "B.NAT instance / NAT实例",
      "C.ELB Classic Load Balancer / ELB经典负载均衡器",
      "D.Amazon RDS / Amazon RDS"
    ],
    "detail": "An Internet-facing multi-tier web application must be highly available. An ELB Classic Load Balancer is deployed in front ofthe web tier. Amazon EC2 instances at the web application tier are deployed evenly across two Availability Zones. Thedatabase is deployed using RDS Multi-AZ. A NAT instance is launched for Amazon EC2 instances and database resources toaccess the Internet. These instances are not assigned with public IP addresses. Which component poses a potential singlepoint of failure in this architecture?面向Internet的多层Web应用程序必须高度可用。ELB Classic负载平衡器部署在Web层的前面。Web应用程序层的Amazon EC2实例跨两个可用区平均部署。使用RDS Multi-AZ部署数据库。将后动NAT实例，以供Amazon EC2实例和数据库资源访问Internet。这些实例未分配公共丨P地址。哪个组件在此体系结构中构成潜在的单点故障？",
    "explanation": [
      "NAT instance只部署了一台，有单点故障风险（用NAT Gateway更好一些），ELB Classic Load Balancer实现了跨区域的负载均衡。",
      "只有B是单点，其余都HA 了。"
    ],
    "id": 601,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Lambda@Edge / Lambda@Edge",
      "B.AWS Lambda / AWS Lambda",
      "C.Amazon API Gateway / Amazon API网关",
      "D.Amazon EC2 instances / Amazon EC2实例"
    ],
    "detail": "A Solutions Architect is designing a photo application on AWS. Every time a user uploads a photo to Amazon S3; theArchitect must insert a new item to a DynamoDB table.Which AWS - managed service is the BEST fit to insert the item?解决方案架构师正在AWS上设计照片应用程序。每次用户将照片上传到Amazon S3时，架构师都必须在DynamoDB表中插入一个新项目。哪种AWS托管服务最适合插入商品？",
    "explanation": [
      "Lambda@Edge是用于靠近客户的位置，只能的低延迟的处理HTTP苗求。根据题干所说的场景，B应该更合适。",
      "https://aws.amazon.com/blogs/machine-learning/build-your-own-face-recognition-service-using-amazon-rekognition/"
    ],
    "id": 602,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon SQS / 亚马逊SQS",
      "B.Amazon SNS / 亚马逊SNS",
      "C.Amazon ECS / 亚马逊ECS",
      "D.AWS STS / AWS STS"
    ],
    "detail": "An application relies on messages being sent and received in order. The volume will never exceed more than 300transactions each second. Which service should be used?应用程序依赖于按顺序发送和接收的消息。交易量绝不会超过每秒300笔交易。应该使用哪种服务？",
    "explanation": [
      "SQS是Simple Queue Service,正好用于消息队列的场景。SNS是Simple Notification Service,是用于通知和报警的一个服务,",
      "ECS是EC2 Container Sevice, STS是Security Token Service获得具有有限权限的临时凭证，用于访问AWS服务。"
    ],
    "id": 603,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Enable SSL on Amazon EC2 instances. / 在Amazon EC2实例上启用SSL",
      "B.Encrypt Amazon EBS volumes on Amazon EC2 instances. / 在Amazon EC2实例上加密Amazon EBS卷。",
      "C.Enable server-side encryption on Amazon S3. / 在Amazon S3上后用服务器端加密。",
      "D.Encrypt Amazon EC2 Instance Storage. / 加密Amazon EC2实例存储。"
    ],
    "detail": "A Solutions Architect is designing an application on AWS that uses persistent block storage. Data must be encrypted atrest.Which solution meets the requirement?解决方案架构师正在AWS上设计一个使用持久性块存储的应用程序。静态数据必须加密。哪种解决方案符合要求？",
    "explanation": [
      "https://aws.amazon.com/blogs/aws/protect-your-data-with-new-ebs-encryption/"
    ],
    "id": 604,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Host the website on an Amazon EC2 instance with ELB and Auto Scaling, and map a Route 53 alias record to the ELB / 使用ELB和Auto Scaling将网站托管在Amazon EC2实例上，并将Route 53别名记录映射到ELB终端节点。",
      "B.Host the website using AWS Elastic Beanstalk, and map a Route 53 alias record to the Beanstalk stack. / 使用AWS Elastic Beanstalk托管网站，并将Route 53别名记录映射到Beanstalk堆栈。",
      "C.Host the website on an Amazon EC2 instance, and map a Route 53 alias record to the public IP address of the Amazon / 在Amazon EC2实例上托管网站，并将Route 53别名记录映討到Amazon EC2实例的公共IP地址。",
      "D.Serve the website from an Amazon S3 bucket, and map a Route 53 alias record to the website endpoint. / 从Amazon S3存储桶提供网站服务，并将Route 53别名记录映討到网站终端节点。",
      "E.Create a Route 53 hosted zone, and set the NS records of the domain to use Route 53 name servers. / 创建一个Route S3托管区域，并设置域的NS记录以使用Route S3名称服务器。"
    ],
    "detail": "A company is launching a static website using the zone apex (mycompany.com). The company wants to use Amazon Route53 for DNS. Which steps should the company perform to implement a scalable and cost-effective solution? (Choose two.)—家公司正在使用区域顶点(mycompany.com)后动静态网站。该公司希望将Amazon Route 53用于DNS。公司应采取哪些步骤来实施可扩展且具有成本效益的解决方案？（选择两个。）",
    "explanation": [
      "C用了一台EC2,还用了Public IP,不是高可用"
    ],
    "id": 605,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Amazon Kinesis Firehouse delivery stream to store the data in Amazon S3. / 创建一个Amazon Kinesis Firehouse交付流，以将数据存储在Amazon $3中0",
      "B.Create an Auto Scaling group of Amazon EC2 servers behind ELBs to write the data into Amazon RDS. / 在ELB后面创建Amazon EC2服务器的Auto Scaling组，以将数据写入Amazon RDS。",
      "C.Create an Amazon SQS queue, and have the machines write to the queue. / 创建一个Amazon SQS队列，并使机器写入队列。",
      "D.Create an Amazon EC2 server farm behind an ELB to store the data in Amazon EBS Cold HDD volumes. / 在ELB后面创建一个Amazon EC2服务器场，以将数据存储在Amazon EBS Cold HDD卷中。"
    ],
    "detail": "A manufacturing company captures data from machines running at customer sites. Currently, thousands of machines senddata every 5 minutes, and this is expected to grow to hundreds of thousands of machines in the near future. The data islogged with the intent to be analyzed in the future as needed. What is the SIMPLEST method to store this streaming data atscale?一家制造公司从客户现场运行的机器捕获数据。当前，每5分钟有数干台计算机发送数据，并且在不久的将来，这一数字有望增长到数十万台。记录数据的目的是将来根据需要进行分析。大规模存储此流数据的SIMPLEST方法是什么？",
    "explanation": [
      "使用Firehouse和S3组合，接受大量的设备数据"
    ],
    "id": 606,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 / 亚马逊S3",
      "B.Amazon Aurora / 亚马逊极光",
      "C.Amazon DynamoDB / Amazon DynamoDB",
      "D.Amazon Redshift / 亚马逊 Redshift"
    ],
    "detail": "A bank is writing new software that is heavily dependent upon the database transactions for write consistency. Theapplication will also occasionally generate reports on data in the database, and will do joins across multiple tables. Thedatabase must automatically scale as the amount of data grows. Which AWS service should be used to run the database?一家银行正在编写新软件，该软件在很大程度上依赖于数据库事务以实现写入一致性。该应用程序有时还会生成有关数据库中数据的报告，并将跨多个表进行联接。数据库必须随着数据量的增长而自动扩展。应该使用哪种AWS服务来运行数据库？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 607,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Add rules to the security groups in each account. / 将规则添加到每个帐户中的安全组。",
      "B.Establish a VPC Peering connection between accounts. / 在帐户之间建立VPC对等连接。",
      "C.Configure Direct Connect in each account. / 在每个帐户中配置直接连接。",
      "D.Add a NAT Gateway to the data account. / 将NAT网关添加到数据帐户。"
    ],
    "detail": "A Solutions Architect is designing a new application that needs to access data in a different AWS account located within thesame region. The data must not be accessed over the Internet. Which solution will meet these requirements with theLOWEST cost?解决方案架构师正在设讨-新的应用程序\"该应用程序需要访问位于同_区域内的另fAWS账户中的数据.不得通过Internet访问数据.哪种解决方案将以最^氐的成本满足这些要求？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 608,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Upload directly to S3 using a pre-signed URL / 使用预先签名的URL直接上传到S3。",
      "B.Upload to a second bucket, and have a Lambda event copy the image to the primary bucket. / 上传到第二个存储桶，并执行Lambda事件，将图像复制到主存储桶。",
      "C.Upload to a separate Auto Scaling group of servers behind an ELB Classic Load Balancer, and have them write to the / 上传到ELB Classic负载均衡器后面的单独的Auto Scaling服务器组，然后将它们写入Amazon S3存储桶。",
      "D.Expand the web server fleet with Spot Instances to provide the resources to handle the images. / 使用竞价型实例扩展Web服务器机群，以提供处理图像的资源。"
    ],
    "detail": "A Solutions Architect is designing a mobile application that will capture receipt images to track expenses. The Architectwants to store the images on Amazon S3. However, uploading images through the web server will create too much traffic.What is the MOST efficient method to store images from a mobile application on Amazon S3?解决方案架构师正在设计一个移动应用程序，它将捕获收据图像以跟踪费用。架构师希望将图像存储在Amazon S3上。但是，通过Web服务器上传图像会产生过多的流量。在Amazon S3上从移动应用程序存储图像的最有效的方法是什么？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 609,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Create VPC flow logs on the subnet / 在子网上创建VPC流日志。",
      "B.Enable source destination check on private Amazon EC2 instances. / 在私有Amazon EC2实例上启用源目的地检查。",
      "C.Enable AWS CloudTrail logging and specify an Amazon S3 bucket for storing log files. / 启用AWS CloudTrai旧志记录并指定用于存储日志文件的Amazon S3存储桶。",
      "D.Create an Amazon CloudWatch log to capture packet information. / 创建一个Amazon Cloud Watch日志以捕获数据包信息。"
    ],
    "detail": "A company requires that the source, destination, and protocol of all IP packets be recorded when traversing a privatesubnet. What is the MOST secure and reliable method of accomplishing this goal.公司要求遍历专用子网时记录所有IP数据包的源，目的地和协议.什么是实现此目标的最安全可靠的方法.",
    "explanation": [
      "记录IP包的流动建议使用VPC flow logs"
    ],
    "id": 610,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B",
      "E"
    ],
    "category": "saa",
    "choices": [
      "A.Replace the Amazon EC2 reverse proxy with an ELB internal Classic Load Balancer. / 用ELB内部经典负载均衡器替换Amazon EC2反向代理。",
      "B.Add Auto Scaling to the Amazon EC2 backend fleet. / 将Auto Scaling添加到Amazon EC2后端舰队。",
      "C.Add Auto Scaling to the Amazon EC2 reverse proxy layer. / 将Auto Scaling添加到Amazon EC2反向代理层。",
      "D.Use t2 burstable instance types for the backend fleet. / 为后端队列使用t2可爆发实例类型。",
      "E.Replace both the frontend and reverse proxy layers with an ELB Application Load Balancer. / 用ELB应用程序负载平衡器替换前端和反向代理层。"
    ],
    "detail": "A Solutions Architect has a multi-layer application running in Amazon VPC. The application has an ELB Classic Load Balanceras the front end in a public subnet, and an Amazon EC2-based reverse proxy that performs content-based routing to twobackend Amazon EC2 instances hosted in a private subnet. The Architect sees tremendous traffic growth and is concernedthat the reverse proxy and current backend set up will be insufficient Which actions should the Architect take to achieve acost-effective solution that ensures the application automatically scales to meet traffic demand? (Select two.)解决方案架构师具有在Amazon VPC中运行的多层应用程序.该应用程序具有一个ELB Classic负载均衡器作为公共子网中的前端，以及一个基于Amazon EC2的反向代理，该代理执行基于内容的路由到私有子网中托管的两个后端Amazon EC2实例。架构师看到了巨大的流量增长，并担心反向代理和当前后端设劃夺不足.架构师应采取哪些措施来实现经济高效的解决方案，以确保应用程序自动扩展以满足流量需求？（选择两个）",
    "explanation": [
      "Answer is ['B', 'E']"
    ],
    "id": 611,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Change the Auto Scaling group's scale out event to scale based on network utilization. / 更改Auto Scaling组的向外扩展事件以根据网络利用率进行扩展。",
      "B.Create an Auto Scaling scheduled action to scale out the necessary resources at 8:30 AM every morning. / 创建一个Auto Scaling计划的操作，以在每天早上830 AM扩展必要的资源。",
      "C.Use Reserved Instances to ensure the system has reserved the right amount of capacity for the scaleup events. / 使用预留实例来确保系统为扩展事件预留了适当数量的容量。",
      "D.Permanently keep a steady state of instances that is needed at 9:00 AM to guarantee available resources, but leverage / 永久保持在9:00 AM需要实例的稳定状态，以保证可用资源，但要利用竞价型实例。"
    ],
    "detail": "A call center application consists of a three-tier application using Auto Scaling groups to automatically scale resources asneeded. Users report that every morning at 9:00 AM the system becomes very slow for about 15 minutes. A SolutionArchitect determines that a large percentage of the call center staff starts work at 9:00 AM; so Auto Scaling does not haveenough time to scale out to meet demand.How can the Architect fix the problem?呼叫中心应用程序由三层应用程序组成，这些应用程序使用Auto Scaling组来根据需要自动扩展资漏。用户报告说，系统每天早上9:00AM变得非常缓慢，持续约15分钟。解决方案架构师踊定大部分呼叫中心员工开始于9:00 AM,因此Auto Scaling没有足够的时间扩展以满足需求。架构师如何解决问题？",
    "explanation": [
      "要提前一段时间使用Auto Scaling Scheduled策略，在8: 30开始执行扩容，才能满足9电的需求。",
      "http://docs.aws.amazon.com/zh_ch/autoscaling/ec2/userguide/schedule_time.html"
    ],
    "id": 612,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Migrate the database to Amazon RDS. / 将数据库迁移到Amazon RDS。",
      "B.Set up DNS failover to a statistic website. / 设置DNS故障转移到统计网站。",
      "C.Use Auto Scaling to keep up with the demand. / 使用Auto Scaling满足需求。",
      "D.Use both a SQL and a NoSQL database in the design. / 在设计中同时使用SQL和NoSQL数据库。"
    ],
    "detail": "A company is launching a marketing campaign on their website tomorrow and expects a significant increase in traffic. Thewebsite is designed as a multi-tiered web architecture, and the increase in traffic could potentially overwhelm the currentdesign. What should a Solutions Architect do to minimize the effects from a potential failure in one or more of the tiers?—家公司明天将在其网站上开展市场营销活动，并预计访问量将大大増加。该网站被设计为多层Web架构，访问量的増长可能会淹没当前的设计。解决方案架构师应该怎么做才能最大程度地减少一个或多个层中潜在故障的影响？",
    "explanation": [
      "使用Auto Scaling来扩容，依据实际的情况"
    ],
    "id": 613,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Auto Scaling group to scale out based on average CPU usage. / 创建一个Auto Scaling组以根据平均CPU使用量进行扩展。",
      "B.Create an Amazon CloudFront distribution to pull static content from an Amazon S3 bucket. / 创建一个Amazon CloudFront发行版以从Amazon S3存储桶中提取静态内容。",
      "C.Leverage Reserved Instances to add additional capacity at a significantly lower price. / 利用预留实例以显着较低的价格添加额外的容量。",
      "D.Create a multi-region deployment using an Amazon Route 53 geolocation routing policy. / 使用Amazon Route 53地理位置路由策略创建多区域部署。"
    ],
    "detail": "A web application experiences high compute costs due to serving a high amount of static web content. How should the webserver architecture be designed to be the MOST cost-efficient?由于提供大量静态Web内容，Web应用程序会承受较高的计算成本.如何将Web服务器体系结构设计为最具成本效益？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 614,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Remove source/destination check on NAT instances. / 删除NAT实例上的源/目标检查。",
      "B.Launch a NAT gateway in each Availability Zone. / 在每个可用区中后动一个NAT网关。",
      "C.Use a mix of NAT instances and NAT gateway. / 混合使用NAT实例和NAT网关。",
      "D.Add an ELB Application Load Balancer in front of NAT gateway. / 在NAT网关的前面添加一个ELB应用程序负载平衡器。"
    ],
    "detail": "A Solutions Architect plans to migrate NAT instances to NAT gateway. The Architect has NAT instances with scripts tomanage high availability. What is the MOST efficient method to achieve similar high availability with NAT gateway?解决方案架构师计划将NAT实例迁移到NAT网关。Architec俱有带有脚本的NAT实例，以管理高可用性用NAT网关实现类似的高可用性的最有效的方法是什么？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 615,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Randomize a key name prefix. / 随机化一个键名前缀。",
      "B.Store the event data in separate buckets. / 将事件数据存储在单独的存储桶中。",
      "C.Randomize the key name suffix. / 随机化键名后缀。",
      "D.Use Amazon S3 Transfer Acceleration. / 使用Amazon S3传输加速。"
    ],
    "detail": "A Solutions Architect is designing a solution to store a large quantity of event data in Amazon S3. The Architect anticipatesthat the workload will consistently exceed 100 requests each second.What should the Architect do in Amazon S3 tooptimize performance ?解决方案架构师正在设计一种解决方案，以在Amazon S3中存储大量事件数据。架构师预计工作负载将每秒持续超过100个谙求。架构师应该在Amazon S3中做什么以优化性能？",
    "explanation": [
      "绐 S3 中的 Bucket 中的文件力□上 prefix,可以提升性能。官网：To support higher request rates, it is best to ensure some level",
      "of random distribution of keys, for example by including a hash as a prefix to key names.",
      "https://docs.aws.amazon.com/AmazonS3/latest/dev/request-rate-perf-considerations.htmI"
    ],
    "id": 616,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Store the archive in Amazon S3 Reduced Redundancy Storage. / 将档案存储在Amazon S3减少冗余存储中。",
      "B.Store the archive in Amazon Glacier and use standard retrieval for all content. / 将档案存储在Amazon Glacier中，并对所有内容使用标准检索。",
      "C.Store the archive in Amazon Glacier and pay the additional charge for expedited retrieval when needed. / 将档案存储在Amazon Glacier中，并在需要时支付加急检索的额外费用。",
      "D.Store the archive in Amazon S3 with a lifecycle policy to move this to S3 Infrequent Access after 30 days. / 使用生命周期策略将档案存储在Amazon S3中，以在30天后将其移至S3 Infrequent Access。"
    ],
    "detail": "A news organization plans to migrate their 20 TB video archive to AWS. The files are rarely accessed, but when they are, arequest is made in advance and a 3 to 5-hour retrieval time frame is acceptable. However, when there is a breaking newsstory, the editors require access to archived footage within minutes. Which storage solution meets the needs of thisorganization while providing the LOWEST cost of storage?—个新闻机构计划将其20 TB视濒档案迁移到AWS。很少访问文件，但是在访问文件时，可以提前提出苗求，并且可以接受3到5个小时的检索时间.但是，当有重大新闻报道时，编辑人员需要在几分钟之内访问存档的素材。哪种存储解决方案可满足该组织的需求，同时提供鑛的存储成本？",
    "explanation": [
      "原则上来说，Glacier是比S3肯定要便宜的，Glacier—般是用于存储冷数据的，即不会经常使用和访问的数据，Glacier—般是使用磁",
      "带库来存储数据的，硬件价格低廉，但传输速度非常慢，只有MB级别的速度，还原已归档对象时可用检索选项有",
      "Expedited/Standard/Bulk等选项，其中Expedited属于加速检索，单个存储对象小于等于250 MB的，使用加速检索访问的数据通",
      "常在1到5分钟内可用。Standard 3-5小时，Bulk 5-12小时。"
    ],
    "id": 617,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Assign Elastic IP addresses to the database instances. / 为数据库实例分配弹性IP地址。",
      "B.Allow Internet traffic on the private subnet through the network ACL. / 允许通过网络ACL在专用子网上进行Internet通信。",
      "C.Use a NAT Gateway. / 使用NAT网关。",
      "D.Use an egress-only Internet Gateway. / 使用仅出口 Internet网关。"
    ],
    "detail": "A Solutions Architect is building a multi-tier website. The web servers will be in a public subnet, and the database serverswill be in a private subnet. Only the web servers can be accessed from the Internet. The database servers must have Internetaccess for software updates. Which solution meets the requirements?解决方案架构师正在构建一个多层网站。Web服务器将在公共子网中，而数据库服务器将在私有子网中。只能从Internet访问Web服务器。数据库服务器必须具有丨ntemet访问权限才能进行软件更新。哪种解决方案符合要求？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 618,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an 1AM access and secret key, and store it in the Lambda function. / 创建一个1AM访问和密钥，并将其存储在Lambda函数中。",
      "B.Create an 1AM role to the Lambda function with permissions to list all Amazon RDS instances. / 为Lambda函数创建一个1AM角色，并具有列出所有Amazon RDS实例的权限。",
      "C.Create an 1AM role to Amazon RDS with permissions to list all Amazon RDS instances. / 创建具有列出所有Amazon RDS实例权限的Amazon RDS的1AM角色。",
      "D.Create an 1AM access and secret key, and store it in an encrypted RDS database. / 创建一个I AM访问和密钥，并将其存储在加密的RDS数据库中。"
    ],
    "detail": "A Solutions Architect is designing a Lambda function that calls an API to list all running Amazon RDS instances. How shouldthe request be authorized?解决方案架构师正在设计一个Lambda函数，该函数调用API以列出所有正在运行的Amazon RDS实例.该谙求如何授权？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 619,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Change the Amazon EC2 instant types. / 更改Amazon EC2即时类型。",
      "B.Change the EBS volume type to Provisioned IOPS. / 将EBS卷类型更改为Provisioned IOPS。",
      "C.Stop the Amazon EC2 instance and provision IOPS for the EBS volume. / 停止Amazon EC2实例并为EBS卷配置IOPS。",
      "D.Enable an API Gateway to change the endpoints for the Amazon EC2 instances. / 启用API网关以更改Amazon EC2实例的终端节点。"
    ],
    "detail": "A Solutions Architect is building an application on AWS that will require 20,000 IOPS on a particular volume to support amedia event. Once the event ends, the IOPS need is no longer required. The marketing team asks the Architect to build theplatform to optimize storage without incurring downtime.How should the Architect design the platform to meet theserequirements?解决方案架构师正在AWS上构建一个应用程序，在特定卷上需要20,000 IOPS才能支持媒体事件。事件结束后，将不再需要IOPS。市场团队要求构架师构建平台以优化存储而不会导致停机。构架师应如何设计平台以满足这些要求？",
    "explanation": [
      "题干说了，是要提升IOPS,那么B就是最优选项。"
    ],
    "id": 620,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 / 亚马逊S3",
      "B.Amazon DynamoDB / 亚马逊 DynamoDB",
      "C.Amazon Kinesis / 亚马逊运动",
      "D.Amazon EFC / 亚马逊EFC"
    ],
    "detail": "A Solutions Architect is building a new feature using a Lambda to create metadata when a user uploads a picture to AmazonS3. All metadata must be indexed.Which AWS service should the Architect use to store this metadata?当用户将图片上传到Amazon S3时，解决方案架构师需要使用Lambda创建元数据来构建新功能.所有元数据都必须建立索弓I,架构师应该使用哪种AWS服务来存储此元数据？",
    "explanation": [
      "存取metadata,使用DynamoDB是推荐的。"
    ],
    "id": 621,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Move some Amazon EC2 instances to a subnet in a different way. / 以其他方式将某些Amazon EC2实例移动到子网。",
      "B.Move the website to Amazon S3. / 将网站移至Amazon S3。",
      "C.Change the ELB to an Application Load Balancer. / 将ELB更改为Application Load Balancer。",
      "D.Move some Amazon EC2 instances to a subnet in the same Availability Zone. / 将一些Amazon EC2实例移动到同一可用区中的子网中。"
    ],
    "detail": "An interactive, dynamic website runs on Amazon EC2 instances in a single subnet behind an ELB Classic Load Balancer.Which design changes will make the site more highly available?一个交互式的动态网站在ELB Classic负载均衡器后面的单个子网中的Amazon EC2实例上运行.那些设计更改将使站点更加可用？",
    "explanation": [
      "B不能支持动态网站，C没有提高高可用，D在同一AZ也没提高高可用，用排除法答题。A,放到不同的AZ,然后做ELB实现高可用。"
    ],
    "id": 622,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Add a Step Scaling policy. / 添加一个逐步扩展策略。",
      "B.Add a Dynamic Scaling policy. / 添加一个动态扩展策略。",
      "C.Add a Scheduled Scaling action. / 添加一个计划扩展操作。",
      "D.Add Amazon EC2 Spot Instances. / 添加Amazon EC2竞价型实例。"
    ],
    "detail": "An e-commerce application is hosted in AWS. The last time a new product was launched, the application experienced aperformance issue due to an enormous spike in traffic. Management decided that capacity must be doubled the week afterthe product is launched.Which is the MOST efficient way for management to ensure that capacity requirements are met?电子商务应用程序托管在AWS中。上一次发布新产品时由于流量激增，该应用程序遇到了性能问题。管理层决定在产品推出后的一周内必须将资源容量提高一倍。管理最有效的方式来确保满足容量要求？",
    "explanation": [
      "这道题挨踢茶馆和我们的考证交流群大神和考友们均认为选C,故本题答案更改为C。原始答案选b"
    ],
    "id": 623,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Store an access key on the Amazon EC2 instance with rights to the Dynamo DB table. / 将访问密钥存储在具有Dynamo DB表权限的Amazon EC2实例上。",
      "B.Attach an 1AM user to the Amazon EC2 instance / 将1AM用户附加到Amazon EC2实例。",
      "C.Create an 1AM role with permissions to write to the DynamoDB table. / 创建一个具有写入DynamoDB表权限的1AM角色6",
      "D.Attach an 1AM role to the Amazon EC2 instance. / 将1AM角色附加到Amazon EC2实例。",
      "E.Attach an 1AM policy to the Amazon EC2 instance. / 将1AM策略附加到Amazon EC2实例。"
    ],
    "detail": "A Solutions Architect is designing a web application that is running on an Amazon EC2 instance. The application stores datain DynamoDB. The Architect needs to secure access to the DynamoDB table. What combination of steps does AWSrecommend to achieve secure authorization? (Select two.)解决方案架构师正在设计一个在Amazon EC2实例上运行的Web应用程序.该应用程序将数据存储在DynamoDB中.构架师需要保护对DynamoDB表的访问。AWS建议采取哪种步骤组合来实现安全授权？（选择两个）",
    "explanation": [
      "Answer is ['C', 'D']"
    ],
    "id": 624,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "B",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Ensure that CloudTrail is enabled. / 确保已启用CloudTrail。",
      "B.Create a custom CloudWatch metric to monitor the API for data access. / 创建一个自定义CloudWatch指标以监视API的数据访问。",
      "C.Configure CloudWatch alarms for any metrics the support team requires. / 为支持团队需要的任何指标配置CloudWatch警报。",
      "D.Ensure that detailed monitoring for the EC2 instances is enabled. / 确保对EC2实例后用了详细监视。",
      "E.Create an application to export and save CloudWatch metrics for longer term trending analysis. / 创建一个应用程序以导出和保存CloudWatch指标，以进行长期趋势分析。"
    ],
    "detail": "A Solutions Architect is about to deploy an API on multiple EC2 instances in an Auto Scaling group behind an ELB. Thesupport team has the following operational requirements:\"!. They get an alert when the requests per second go over 50, 0002. They get an alert when latency goes over 5 seconds 3. They can validate how many times a day users call the APIrequesting highlysensitive data .Which combination of steps does the Architect need to take to satisfy these operationalrequirements?(Select two.)解决方案架构师即将在ELB后面的Auto Scaling组中的多个EC2实例上部署API。支持团队具有以下操作要求：1当每秒庙求超过50,000时，他们会收到警报2当延迟超过5秒时，他们会收到警报3他们可以验证用户一天调用API庙求高敏感数据的次数构架师需要采取哪些步骤来满足这些操作要求？（选择两个）",
    "explanation": [
      "对于CloudTrai丨来说，完全没必要，这是记录行为的日志，和这个题干压根没关系。CloudWatch来监控API数据是很有效的。C实",
      "P示上没必要，只是有几个选项要监控而已。D是需要后用的，因为默认的CloudWatch其实监控项目不多，因为根据EC2是要触发",
      "Auto Scaling的，所以D需要选上。E也没说一定要。"
    ],
    "id": 625,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Amazon S3 bucket and store all of the documents in this bucket. / 创建一个Amazon S3存储桶，并将所有文档存储在此存储桶中。",
      "B.Create an Amazon EBS volume and allow multiple users to mount that volume to their EC2 instance (s). / 创建一个Amazon EBS卷，并允许多个用户将该卷装载到他们的EC2实例。",
      "C.Use Amazon Glacier to store all of the documents. / 使用Amazon Glacier存储所有文档。",
      "D.Create an Amazon Elastic File System (Amazon EFS) to store and share the documents. / 创建一个Amazon Elastic File System (Amazon EFS)来存储和共享文档0"
    ],
    "detail": "A media company asked a Solutions Architect to design a highly available storage solution to serve as a centralizeddocument store for their Amazon EC2 instances. The storage solution needs to be POSIXcompliant； scale dynamically, andbe able to serve up to 100 concurrent EC2 instances.Which solution meets these requirements?一家媒体公司要求解决方案构架师设计一个高度可用的存储解决方案，以用作其Amazon EC2实例的集中式文档存储.该存储解决方案必须符合P0SIX的要求，可以动态扩展，并能够服务于100个并发EC2实例.那些解决方案符合这些要求？",
    "explanation": [
      "用于 sharing 0勺存储，EFS —定是优于 S3 的0 https://aws.amazon.com/efs/enterprise-applications/"
    ],
    "id": 626,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Auto Scaling group / Auto Scaling组",
      "B.AWS CIoudTrail / AWS CIoudTrail",
      "C.ELB Classic Load Balancer / ELB经典负载均衡器",
      "D.Amazon DynamoDB / 亚马逊 DynamoDB",
      "E.Amazon ElastiCache / 亚马逊 ElastiCache"
    ],
    "detail": "A Solution Architect has a two-tier application with a single Amazon EC2 instance web server and Amazon RDS MySQLMulti-AZ DB instances. The Architect is re-architecting the application for high availability by adding instances in a secondAvailability Zone.Which additional services will improve the availability of the application ? (Choose two.)解决方案架构师具有两层应用程序，其中包含一个Amazon EC2实例Web服务器和Amazon RDS MySQL Multi-AZ数据库实例.架构师通过在第二个可用区中添加实例来重新构建应用程序以实现高可用性.哪些附加服务将提高应用程序的可用性？（选择两个）",
    "explanation": [
      "典型的高可用和延伸性能方案，即 Auto Scaling + ELBa https://aws.amazon.com/premiumsupport/knowledge-",
      "center/potentia 卜 account-compromise/"
    ],
    "id": 627,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use AWS Key Management Service and move the encrypted data to Amazon S3. / 使用AWS Key Management Service并将加密的数据移至Amazon S3。",
      "B.Use an application-specific encryption API with AWS server-side encryption. / 将特定于应用程序的加密API与AWS服务器端加密一起使用。",
      "C.Use encrypted EBS storage volumes with AWS-managed keys. / 使用带有AWS托管密钥的加密EBS存储卷。",
      "D.Use third-party tools to encrypt the EBS data volumes with Key Management Service Bring Your Own Keys. / 使用第三方工具通过密钥管理服务自带密钥来加密EBS数据卷。"
    ],
    "detail": "A company is migrating its data center to AWS. As part of this migration, there is a three-tier web application that has strictdata-at-rest encryption requirements. The customer deploys this application on Amazon EC2 using Amazon EBS, and nowmust provide encryption at-rest. How can this requirement be met without changing the application ?一家公司正在将其数据中心迁移到AWS。作为此迁移的一部分，有一个三层Web应用程序，它具有严格的静态数据加密要求。客户使用Amazon EBS在Amazon EC2上部署了该应用程序，现在必须提供静态加密。如何在不更改应用程序的情况下满徐此要求？",
    "explanation": [
      "对EBS加密，首选KMS,也就是C。"
    ],
    "id": 628,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Store the AWS Access Key ID/Secret Access Key combination in software comments. / 将AWS Access Key ID /秘密访问密钥组合存储在软件注释中。",
      "B.Assign an 1AM user to the Amazon EC2 instance. / 将1AM用户分配给Amazon EC2实例。",
      "C.Assign an 1AM role to the Amazon EC2 instance. / 将1AM角色分配给Amazon EC2实例。",
      "D.Enable multi-factor authentication for the AWS root account. / 为AWS根帐户启用多因素身份验证。"
    ],
    "detail": "A Solutions Architect is developing software on AWS that requires access to multiple AWS services, including an AmazonEC2 instance. This is a security sensitive application, and AWS credentials such as Access Key ID and Secret Access Key needto be protected and cannot be exposed anywhere in the system. What security measure would satisfy these requirements ?解决方案架构师正在AWS上开发软件，该软件访问多个AWS服务，包括Amazon EC2实例。这是一个安全敏感的应用程序，AWS凭证(例如访问密钥丨D和秘密访问密钥)需要受到保护，并且不能在系统中的ffl可位置公开.哪种安全措施可以满足这些要求？",
    "explanation": [
      "AWS服务之间的ffi可访问一定是使用1AM Role的"
    ],
    "id": 629,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Migrate the data on the Amazon EBS volume to an SSD-backed volume. / 将Amazon EBS卷上的数据迁移到SSD支持的卷上。",
      "B.Change the EC2 instance type to one with EC2 instance store volumes. / 使用EC2实例存储卷将EC2实例类型更改为一种。",
      "C.Migrate the data on the EBS volume to provisioned IOPS SSD (io1). / 将数据迁移到预置IOPS SSD的EBS卷",
      "D.Change the EC2 instance type to one with burstable performance. / 将EC2实例类型更改为具有爆发性能的实例类型。"
    ],
    "detail": "An AWS workload in a VPC is running a legacy database on an Amazon EC2 instance. Data is stored on a 200GB AmazonEBS (gp2) volume. At peak load times, logs show excessive wait time. What solution should be implemented to improvedatabase performance using persistent storage ?VPC中的AWS工作负载正在Amazon EC2实例上运行旧数据库。数据存储在200GB的Amazon EBS (gp2)卷上。在高峰负载时间，日志显示过多的等待时间。应该使用哪种解决方案来使用持久性存储来提高数据库性能？",
    "explanation": [
      "https://docs.aws.amazon.com/aws-technical-content/latest/oracle-database-aws-best-practices/architecting-for-security-",
      "and-performance.html"
    ],
    "id": 630,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Kinesis Stream / Amazon Kinesis Stream",
      "B.Amazon SQS standard queue / Amazon SQS标准队列",
      "C.Amazon SQS FIFO queue / Amazon SQS FIFO队列",
      "D.AWS CloudTrail trail / AWS CloudTrai丨追踪"
    ],
    "detail": "A company's website receives 50, 000 requests each second, and the company wants to use multiple applications to analyzethe navigation patterns of the users on their website so that the experience can be personalized. What can a SolutionsArchitect use to collect page clicks for the website and process them sequentially for each user ?公司的网站每秒接收50,000个谙求，并且公司希望使用多个应用程序来分析用户在其网站上的导航模式，以便可以个性化体验.解决方案架构师可以使用什么来收集网站的页面点击并为每个用户顺序处理？",
    "explanation": [
      "实时抓取数据，然后分析，那么 AWS Kinesis Stream 是很好的选择。https://aws.amazon.com/blogs/aws/arnazon-kinesis-real-",
      "time-processing-of-streamed-data/"
    ],
    "id": 631,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon Auror",
      "B.Amazon Redshift",
      "C.Amazon DynamoDB",
      "D.Amazon RDS MySQL"
    ],
    "detail": "A company wants to migrate a highly transactional database to AWS. Requirements state that the database has more than 6TB of data and will grow exponentially. Which solution should a Solutions Architect recommend ?一家公司希望将高度事务处理的数据库迁移到AWS。需求表明数据库具有超过6 TB的数盘，并且将成倍增长。解决方案构架师应建议哪种解决方案？",
    "explanation": [
      "如果是全新的数据库的数据迁移，S卩么建议使用Aurora,因为Aurora是AWS的亲儿子，会有很多优惠，性能上并不会比MySQL差",
      "太多。但如果之前是使用MySQL的话，建议新的RDS依然保持MySQL。https://aws.amazon.com/dms/"
    ],
    "id": 632,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Security group rule that allows inbound Internet traffic for port 443. / 安全组规则，允许端口443的入站Internet通信。",
      "B.Security group rule that denies all inbound Internet traffic except port 443. / 安全组规则，拒绝端口443以外的所有入站Internet流量。",
      "C.Network ACL rule that allows port 443 inbound and all ports outbound for Internet traffic. / 网络ACL规则，允许端口443入站，所有端口出站以进行Internet通信。",
      "D.Security group rule that allows Internet traffic for port 443 in both inbound and outbound. / 安全组规则，该规则允许入站和出站的端口443的Internet通信。",
      "E.Network ACL rule that allows port 443 for both inbound and outbound for all Internet traffic. / 网络ACL规则，允许所有Internet流量的入站和出站都使用端口443。"
    ],
    "detail": "A company hosts a two-tier application that consists of a publicly accessible web server that communicates with a privatedatabase. Only HTTPS port 443 traffic to the web server must be allowed from the Internet. Which of the following optionswill achieve these requirements ? (Choose two.)公司托管一个两层应用程序，该应用程序由与私有数据库进行通信的可公开访问的Web服务器组成。必须仅从Internet允许到Web服务器的HTTPS端口443通信.以下哪个选项可以满足这些要求？（选择两个）",
    "explanation": [
      "本题之前选ae,更正为ac的理由如下。Security group是stateful,inbound放了，outbound自然放，所以A对的。B错，security",
      "group之有allow,没有deny。C对，因为outbound不只是去443,还有其他端口，比如80。用途：打补丁，github拉repo, docker",
      "image, nat gw也需要通过igw出去等等。选项e,E在做一个假设，并且忽略了ACL是有状态的，因此端口443可以打开入站，但出站，可",
      "以从不同的端口回答。网络ACL上的入站443是给定的，但是网络ACL是无状态的，因此需要进行配置。在这种情况下，Web服务器会",
      "响应一定范围的端口，因此要求它们全部都是开放的，而不是像答案E所述的那样简单地为443。"
    ],
    "id": 633,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Create an Auto Scaling group with a minimum of one instance and a maximum of two instances, then use an Application / 创建一个最少包含一个实例，最多两个实例的Auto Scaling组，然后使用Application Load Balancer平衡流量。",
      "B.Recreate the API using Amazon API Gateway and use AWS Lambda as the service backend. / 使用Amazon API Gateway重新创建API,并将AWS Lambda用作服务后端。",
      "C.Create an Auto Scaling group with a maximum of two instances, then use an Application Load Balancer to balance the / 创建一个最多包含两个实例的Auto Scaling组，然后使用Application Load Balancer平衡流量。",
      "D.Recreate the API using Amazon API Gateway and integrate the new API with the existing backend service. / 使用Amazon API Gateway重新创建API,并将新API与现有后端服务集成。"
    ],
    "detail": "A customer owns a simple API for their website that receives about 1,000 requests each day and has an average responsetime of 50 ms. It is currently hosted on one c4.large instance.Which changes to the architecture will provide high availabilityat the LOWEST cost?客户拥有一个简单的网站API,每天可接收约1,000个谙求，平均响应时间为50毫秒。它当前托管在一个c4.large实例上。对体系结构进行哪些更改将以®氏的成本提供高可用性？",
    "explanation": [
      "用Lambda和API Gateway成本最低"
    ],
    "id": 634,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.VPC peering connection. / VPC对等连接。",
      "B.NAT gateway / NAT网关",
      "C.VPC endpoint / VPC端点",
      "D.AWS Direct Connect / AWS直接连接"
    ],
    "detail": "A Solutions Architect is designing an Amazon VPC. Applications in the VPC must have private connectivity to AmazonDynamoDB in the same AWS Region. The design should route DynamoDB traffic through:解决方案架构师正在设计Amazon VPC. VPC中的应用程序必须具有与同一AWS区域中的Amazon DynamoDB的专用连接。设计应通过以下方式路由DynamoDB通信：",
    "explanation": [
      "https://aws.amazon.com/blogs/database/how-to-configure-a-private-network-environment-for-amazon-dynamodb-using-",
      "vpc-endpoints/"
    ],
    "id": 635,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EFS",
      "B.Amazon S3",
      "C.Amazon EBS",
      "D.Amazon ElastiCache"
    ],
    "detail": "A Solutions Architect is architecting a workload that requires a performant object-based storage system that must be sharedwith multiple Amazon EC2 instances. Which AWS service meets this requirement ?解决方案架构师正在设计一种工作负载，该工作负载需要一个高性能的基于对象的存储系统，该系统必须与多个Amazon EC2实例共享。哪项AWS服务满足此要求？",
    "explanation": [
      "这道题之前选a,但是在整理解释时发现选b更为合适，因为A选项，EFS是Elastic File System的简称，是文件存储服务，可以给多个",
      "EC2-lnstancesshare使用，但不是对象存储，而S3—般是一个存储网络区域，如SAN,当然可以给多个EC2-lnstances来访问，它",
      "是基于对象存储的方式来存储数据的，所以符合题干意思。EBS是Elastic Block Storage,也是基于块的存储，一般用作昔通磁盘，如",
      "果需要share,在云中无法操作，可以额外配置软件实现。对于ElasticCache,它是基于缓存的技术，不是什么存储系统。因此这道题",
      "的答案更改为b"
    ],
    "id": 636,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3",
      "B.Amazon EFS",
      "C.Amazon EBS",
      "D.Cached Volumes"
    ],
    "detail": "A Solutions Architect is developing a solution for sharing files in an organization. The solution must allow multiple users toaccess the storage service at once from different virtual machines and scale automatically. It must also support file-levellocking. Which storage service meets the requirements of this use case?解决方案架构师正在开发一种用于在组织中共享文件的解决方案。该解决方案必须允许多个用户同时从不同的虚拟机访问存储服务并自动扩展.它还必须支持文件级锁定.哪种存储服务符合该用例的要求？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 637,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 instance storage / Amazon EC2实例存储",
      "B.Amazon EBS General Purpose SSD (gp2) storage / Amazon EBS通用SSD (gp2)存储",
      "C.Amazon S3 / Amazon S3",
      "D.Amazon EBS Provision IOPS SSD (io1) storage / Amazon EBS Provisioning l〇PS SSD (io1)存储"
    ],
    "detail": "A company runs a legacy application with a single-tier architecture on an Amazon EC2 instance. Disk I/O is low, withoccasional small spikes during business hours. The company requires the instance to be stopped from 8 PM to 8 AM daily.Which storage option is MOST appropriate for this workload ?—家公司在Amazon EC2实例上运行具有单层架构的旧版应用程序。磁盘I/O较低，在工作时间内偶尔会有小峰值。公司要求将实例从每天的晚上8点停止到早上8点。哪种存储选项最适合此工作负载？",
    "explanation": [
      "对于app来说，一般是使用General Purpose SSD的。"
    ],
    "id": 638,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Use AWS 1AM authorization and add least-privileged permissions to each respective 1AM role. / 使用AWSIAM授权并将最低特权添加到每个相应的1AM角色。",
      "B.Use an API Gateway custom authorizer to invoke an AWS Lambda function to validate each user's identity. / 使用API??网关自定义授权者调用AWS Lambda函数以验证每个用户的身份。",
      "C.Use Amazon Cognito user pools to provide built-in user management. / 使用Amazon Cognito用户池提供内置的用户管理。",
      "D.Use Amazon Cognito user pools to integrate with external identity providers. / 使用Amazon Cognito用户池与外部身份提供商进行集成。"
    ],
    "detail": "As part of securing an API layer built on Amazon API gateway, a Solutions Architect has to authorize users who are currentlyauthenticated by an existing identity provider. The users must be denied access for a period of one hour after threeunsuccessful attempts. How can the Solutions Architect meet these requirements ?作为保护基于Amazon API网关构建的API层的一部分，解决方案架构师必须授权当前由现有身份提供商进行身份验证的用户。在三次失败的尝试之后，必须拒绝用户一小时的访问权限.解决方案构架师如何满足这些要求？",
    "explanation": [
      "对于AWS API Gateway的权限管控来说，可以借助Lambda来做身份验证，这是一种推荐的方式。"
    ],
    "id": 639,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Redesign the website to use Amazon API Gateway, and use AWS Lambda to deliver content. / 重新设计网站以使用Amazon API Gateway,并使用AWS Lambda交付内容。",
      "B.Add server instances using Amazon EC2 and use Amazon Route 53 with a failover routing policy. / 使用Amazon EC2添加服务器实例，并将Amazon Route 53与故障转移路由策略一起使用。",
      "C.Serve the images and videos via an Amazon CloudFront distribution created using the news site as the origin. / 通过以新闻网站为来源创建的Amazon CloudFront发行版为图像和视频提供服务。",
      "D.Use Amazon ElasticCache for Redis for caching and reducing the load requests from the origin. / 使用Amazon ElasticCache for Redis缓存和减少来自源的负载苗求。"
    ],
    "detail": "An organization runs an online media site, hosted on-premises. An employee posted a product review that contained videosand pictures. The review went viral and the organization needs to handle the resulting spike in website traffic. What actionwould provide an immediate solution ?一个组织运行一个本地托管的在线媒体站点。一个员工发布了包含视濒和图片的产品评论。审査迅速传播，组织需要处理由此带来的网站流量激增。采取什么措施可以立即解决？",
    "explanation": [
      "CloudFront + S3,实现缓存。"
    ],
    "id": 640,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Use the AWS CLI to create queues using AWS 1AM Access Keys. / 使用AWS CU通过AWS 1AM访问密钥创建队列。",
      "B.Write a script to create the Amazon SQS queue using AWS Lambda. / 编写脚本以使用AWS Lambda创建Amazon SQS队列。",
      "C.Use AWS Elastic Beanstalk to automatically create the Amazon SQS queues. / 使用AWS Elastic Beanstalk自动创建Amazon SQS队列。",
      "D.Use AWS CIoudFormation Templates to manage the Amazon SQS queue creation. / 使用AWS CloudFormation模板来管理Amazon SQS队列创建。"
    ],
    "detail": "A client notices that their engineers often make mistakes when creating Amazon SQS queues for their backend system.Which action should a Solutions Architect recommend to improve this process ?客户注意到，他们的工程师在为其后端系统创建Amazon SQS队列时经常犯错误.解决方案架构师应该建议采取哪个措施来改进此过程",
    "explanation": [
      "CloudFormation是基础架构即代码的方式，也就是使用模板，按葫芦画瓢来部署所有的应用。",
      "https://docs.aws.amazon.com/AWSSimpleQueueService/Iatest/SQSDeveloperGuide/sqs-create-queue.html#create-queue-",
      "cloudformation"
    ],
    "id": 641,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.One public subnet for the load balancer tier, one public subnet for the front-end tier, and one private subnet for the / 一个 个公共子网用于负载均衡器层，一个公共子网用于前端层，一个私有子网用于后端层。",
      "B.One shared public subnet for all tiers of the application. / —个共享的公用子网，用于应用程序的所有层。",
      "C.One public subnet for the load balancer tier and one shared private subnet for the application tiers. / 一个公共子网用于负载均衡器层， 一个共享私有子网用于应用程序层。",
      "D.One shared private subnet for all tiers of the application. / —个共享的专用子网，用于应用程序的所有层。"
    ],
    "detail": "A development team is building an application with front-end and backend application tiers. Each tier consists of AmazonEC2 instances behind an ELB Classic Load Balancer. The instances run in Auto Scaling groups across multiple AvailabilityZones. The network team has allocated the 10.0.0.0/24 address space for this application. Only the front-end load balancershould be exposed to the Internet. There are concerns about the limited size of the address space and the ability of each tierto scale. What should the VPC subnet design be in each Availability Zone ?开发团队正在构建具有前端和后端应用程序层的应用程序。每个层由位于ELB经典负载均衡器后面的Amazon EC2实例组成。实例在多个可用区中的Auto Scaling组中运行.网络团队已为此应用程序分配了 10.0.0.0/24地址空间.仅前端负载平衡器应暴露于Internet.人们担心地址空间的大小以及每个层的扩展能力。每个可用区中的VPC子网设计应该是什么？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 642,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.An Amazon EC2 instance store local SSD volume. / Amazon EC2实例存储本地SSD卷。",
      "B.An Amazon EBS provisioned IOPS SSD volume. / Amazon EBS预置的IOPS SSD卷。",
      "C.An Amazon EBS throughput optimized HDD volume. / Amazon EBS吞吐量优化的HDD卷。",
      "D.An Amazon EBS general purpose SSD volume. / Amazon EBS通用SSD卷。"
    ],
    "detail": "A Solutions Architect must select the storage type for a big data application that requires very high sequential I/O. The datamust persist if the instance is stopped. Which of the following storage types will provide the best fit at the LOWEST cost forthe application ?解决方案架构师必须为需要非常高的顺序I/O的大擞据应用程序选择存储类型。如果实例停止，则数据必须保留。以下哪种存储类型将以®氐的成本为该应用程序提供最合适的存储方式？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 643,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Using security groups that the security groups of the other application / 使用安全组，即其他应用程序的安全组",
      "B.Using security groups that the application server's IP addresses / 使用应用程序服务器的IP地址指定的安全组",
      "C.Using Network Access Control Lists to allow/deny traffic based on application IP addresses / 使用网络访问控制列表根据应用程序IP地址允许/拒绝流量",
      "D.Migrating the applications to separate subnets from each other / 将应用程序迁移到彼此独立的子网"
    ],
    "detail": "Two Auto Scaling applications, Application A and Application B, currently run within a shared set of subnets. A SolutionsArchitect wants to make sure that Application A can make requests to Application B, but Application B should be deniedfrom making requests to Application A. Which is the SIMPLEST solution to achieve this policy ?当前，两个Auto Scaling应用程序（应用程序A和应用程序B)在一组共享的子网中运行。解决方案架构师希望确保应用程序A可以向应用程序B发出苗求，但是应拒绝应用程序B向应用程序A发出苗求。哪种SIMPLEST解决方案可实现此政策？",
    "explanation": [
      "Answer is ['A']"
    ],
    "id": 644,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Create EBS snapshots directly from one region to another. / 直接从一个区域到另一个区域创建EBS快照。",
      "B.Move the data to an Amazon S3 bucket and enable cross-region replication. / 将数据移至Amazon S3存储桶并后用跨区域复制",
      "C.Create EBS snapshots and then copy them to the desired region. / 创建EBS快照，然后将其复制到所需的区域。",
      "D.Use a script to copy data from the current Amazon EBS volume to the destination Amazon EBS volume. / 使用脚本将数据从当前Amazon EBS卷复制到目标Amazon EBS卷。"
    ],
    "detail": "A Solution Architect is designing an application that uses Amazon EBS volumes. The volumes must be backed up to adifferent region. How should the Architect meet this requirement?解决方案架构师正在设计使用Amazon EBS卷的应用程序。卷必须备份至其他区域。架构师应如何满足此要求？",
    "explanation": [
      "复制快照的方式肯定比直接复制数据快多了，然后跨区域执行，很方便。EBS快照不能直接从一个区域上产出到另一个区域。"
    ],
    "id": 645,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon SNS / Amazon SNS",
      "B.AWS STS / AWS STS",
      "C.Amazon SQS / 亚马逊SQS",
      "D.Amazon Route 53 / 亚马逊Route 53",
      "E.AWS Glue / AWS Glue"
    ],
    "detail": "Legacy applications currently send messages through a single Amazon EC2 instance, which then routes the messages to theappropriate destinations. The Amazon EC2 instance is a bottleneck and single point of failure, so the company would like toaddress these issues. Which services could address this architectural use case?(Choose two.)旧版应用程序当前通过单个Amazon EC2实例发送消息，然后将其路由到适当的目的地。Amazon EC2实例是一个瓶颈和单点故障，因此该公司希望解决这些问题。哪些服务可以解决此架构用例？（选择两个。）",
    "explanation": [
      "Answer is ['A', 'C']"
    ],
    "id": 646,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon EC2 Spot Instances / Amazon EC2竞价型实例",
      "B.On-Demand Amazon EC2 Instances / 按需Amazon EC2实例",
      "C.Scheduled Reserved Instances / 预定的预留实例",
      "D.Dedicated Amazon EC2 Instances / 专用Amazon EC2实例"
    ],
    "detail": "A Solutions Architect needs to design an architecture for a new, mission-critical batch processing billing application. Theapplication is required to run Monday, Wednesday, and Friday from 5 AM to 11 AM. Which is the MOST cost - effectiveAmazon EC2 pricing model ?解决方案构架师需要为新的关键任务批处理计费应用程序设计体系结构。该应用程序必须在周一，周三和周五的凌晨5点至上午11点运行。哪种是最具成本效益的Amazon EC2定价模型？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 647,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Change the Amazon EC2 instance to compute optimized. / 更改Amazon EC2实例以进行优化计算。",
      "B.Launch a second Amazon EC2 instance to monitor the health of the first. / 后动另一个Amazon EC2实例以监视第一个实例的运行状况。",
      "C.Trigger a Lambda function when a new object is uploaded. / 上载新对象时触发Lambda函数。",
      "D.Initially copy the images to an attached Amazon EBS volume. / 最初将图像复制到附加的Amazon EBS卷。"
    ],
    "detail": "A workload consists of downloading an image from an Amazon S3 bucket, processing the image, and moving it to anotherAmazon S3 bucket. An Amazon EC2 instance runs a scheduled task every hour to perform the operation. How should aSolutions Architect redesign the process so that it is highly available ?工作负载包括从Amazon S3存储桶下载映像，处理该映像并将其移至另一个Amazon S3存储桶。Amazon EC2实例每小时运行一次计划任务以执行该操作。解决方案构架师应如何重新设计流程以使其高度可用？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 648,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Configure a NAT gateway in a public subnet and route all traffic to Amazon Kinesis through the NAT gateway. / 在公共子网中酉3置NAT网关，并将所有流量通过NAT网关路由到Amazon Kinesis。",
      "B.Configure a gateway VPC endpoint for Kinesis and route all traffic to Kinesis through the gateway VPC endpoint. / 为Kinesis配置网关VPC端点，并通过网关VPC端点将所有流量路由到Kinesis。",
      "C.Configure an interface VPC endpoint for Kinesis and route all traffic to Kinesis through the gateway VPC endpoint. / 为Kinesis配置接DVPC端点，并通过网关VPC端点将所有流量路由到Kinesis。",
      "D.Configure an AWS Direct Connect private virtual interface for Kinesis and route all traffic to Kinesis through the virtual / 为Kinesisgg置一个AWS Direct Connect私有虚拟接口，并通过该虚拟接口将所有流量路由到Kinesis。"
    ],
    "detail": "An application is running on an Amazon EC2 instance in a private subnet. The application needs to read and write data ontoAmazon Kinesis Data Streams, and corporate policy requires that this traffic should not go to the internet. How can theserequirements be met ?应用程序正在私有子网中的Amazon EC2实例上运行。该应用程序需要在Amazon Kinesis Data Streams上读取和写入数据，并且公司策略要求该流量不应进入互联网。如何满足这些要求？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 649,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon S3 / 亚马逊S3",
      "B.Amazon Glacier / 亚马逊Glacier",
      "C.Amazon EFS / Amazon EFS",
      "D.AWS Storage Gateway / AWS Storage Gateway"
    ],
    "detail": "A Solutions Architect is building an application that stores object data. Compliance requirements state that the data storedis immutable. Which service meets these requirements ?解决方案构架师正在构建一个存储对象数据的应用程序，合规性要求指出，存储的数据是不可变的。哪些服务符合这些要求？",
    "explanation": [
      "存储在Amazon Glacier中的数据是不可变的，这意味着在创建存档后便无法对其进行更新。这确保了诸如遵从性和法规记录之类的数",
      "据在归档后不会被更改。https://aws.amazon.com/glacier/features/"
    ],
    "id": 650,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Set a CORS configuration. / 设置CORS配置。",
      "B.Set a bucket policy to encrypt all Amazon S3 objects. / 设置存储桶策略以加密所有Amazon S3对象。",
      "C.Enable default encryption on the bucket. / 在存储桶上启用默认加密。",
      "D.Set permission for users. / 为用户设置权限。"
    ],
    "detail": "A Solutions Architect is defining a shared Amazon S3 bucket where corporate applications will save objects. How can theArchitect ensure that when an application uploads an object to the Amazon S3 bucket, the object is encrypted ?解决方案构架师正在定义一个共享的Amazon S3存储桶，企业应用程序将在其中存储对象。架构师如何确保当应用程序将对象上传到Amazon S3存储桶时，该对象已加密？",
    "explanation": [
      "https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/"
    ],
    "id": 651,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.AWS Application Load Balancer / AWS应用程序负载平衡器",
      "B.Amazon CloudFront / 亚马逊 CloudFront",
      "C.Amazon Classic Load Balancer / 亚马逊经典负载均衡器",
      "D.Amazon Route 53 / 亚马逊Route 53"
    ],
    "detail": "An application tier currently hosts two web services on the same set of instances, listening on different ports. Which AWSservice should a Solutions Architect use to route traffic to the service based on the incoming request path ?应用程序当前在同一组实例上托管两个Web服务，侦听不同的端口。解决方案架构师应使用哪种AWS服务根据传入的谙求路径将流量路由到该服务？",
    "explanation": [
      "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/tutorial-load-balancer-routing.html"
    ],
    "id": 652,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Amazon RDS",
      "B.Amazon Redshift",
      "C.Amazon DynamoDB",
      "D.Amazon S3"
    ],
    "detail": "A data analytics startup company asks a Solutions Architect to recommend an AWS data store options for indexed data. Thedata processing engine will generate and input more than 64 TB of processed data every day, with item sizes reaching up to300 KB. The startup is flexible with data storage and is more interested in a database that requires minimal effort to scalewith a growing dataset size. Which AWS data store service should the Architect recommend ?一家数据分析初创公司谙解决方案构架师为索引数据库推荐一个AWS数据存储选项。数据处理引擎每天将生成和输入超过64TB的已处理数据，项目大小可达300KB,该后动具有灵活的数据存储功能，并且对数据库的兴趣更小，该数据库需要最少的箱力即可随数据集大小的增长而扩张。构架师应该推荐哪种AWS数据存储服务？",
    "explanation": [
      "Answer is ['C']"
    ],
    "id": 653,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "A",
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Create a bastion host that authenticates users against the corporate directory. / 创建一个堡垒主机，以根据公司目录对用户进行身份验证。",
      "B.Create a bastion host with security group rules that only allow traffic from the corporate network. / 使用仅允许来自公司网络的流量的安全组规则创建堡垒主机。",
      "C.Attach an 1AM role to the bastion host with relevant permissions. / 使用相关权限将1AM角色附加到堡垄主机。",
      "D.Configure the web servers' security group to allow SSH traffic from a bastion host. / 配置Web服务器的安全组以允许来自堡垄主机的SSH通信。",
      "E.Deny all SSH traffic from the corporate network in the inbound network ACL. / 在入站网络ACL中拒绝来自公司网络的所有SSH流量。"
    ],
    "detail": "A Solutions Architect needs to allow developers to have SSH connectivity to web servers. The requirements are as follows:-Limit access to users origination from the corporate network.-Web servers cannot have SSH access directly from the Internet. - Web servers reside in a private subnet.Which combination of steps must the Architect complete to meet these requirements ? (Choose two.)解决方案构架师需要允许开发人员与Web服务器建立SSH连接。要求如下：-限制对来自公司网络的用户的访问。-Web服务器不能直接从Internet进行SSH访问-Web服务器驻留在专用子网中。构架师必须完成哪些步骤组合才能满足这些要求？（选择两个）",
    "explanation": [
      "Answer is ['A', 'D']"
    ],
    "id": 654,
    "saved_answer": null,
    "type": "Multiple Answers"
  },
  {
    "answer": [
      "A"
    ],
    "category": "saa",
    "choices": [
      "A.Continuously replicate the production database server to Amazon RDS. Use AWS CloudFormation to deploy the / 连续将生产数据库服务器复制到Amazon RDS。如有必要，使用AWS CloudFormation部署应用程序和任彳可其他服务器。",
      "B.Continuously replicate the production database server to Amazon RDS. Create one application load balancer and register / 将生产数据库服务器连续复制到Amazon RDS。创建一个应用程序负载平衡器并注册本地服务器。如果本地应用程序已关闭，则配置",
      "C.Use a scheduled Lambda function to replicate the production database to AWS. Use Amazon Route 53 health checks to / 使用预定的Lambda函数将生产数据库复制到AWS。如果生产不正常，谙使用Amazon Route 53运行状况检查将应用程序自动部署到",
      "D.Use a scheduled Lambda function to replicate the production database to AWS. Register on-premises servers to an Auto / 使用预定的Lambda函数将生产数据库复制到AWS。如果生产不可用，则将本地服务器注册到Auto Scaling组，并部署应用程序和其"
    ],
    "detail": "A Solutions Architect needs to use AWS to implement pilot light disaster recovery for a three-tier web application hosted inan on-premises datacenter.Which solution allows rapid provision of working, fully - scaled production environment ?解决方案构架师需要使用AWS来为本地数据中心中托管的三层Web应用程序实施轻型灾难恢复。哪种解决方案可以快速提供可工作的、全面的生产环境？",
    "explanation": [
      "Answer is ['A']"
    ],
    "id": 655,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "D"
    ],
    "category": "saa",
    "choices": [
      "A.Place an elastic load balancer in front of the Amazon S3 bucket to distribute the load during peak hours. / 在Amazon S3存储桶的前面放置一个弹性负载平衡器，以在高峰时段分配负载。",
      "B.Cache the web content with Amazon CIoudFront and use all Edge locations for content delivery. / 使用Amazon CloudFront缓存Web内容，并将所有Edge位置用于内容交付。",
      "C.Replicate the bucket in eu-west-1 and use an Amazon Route 53 failover routing policy to determine which bucket it / 在eu-west-1中复制存储桶，并使用Amazon Route 53故障转移路由策略来确定应将苗求提供绐哪个存储桶。",
      "D.Use an Amazon Route 53 weighted routing policy for the CIoudFront domain name to distribute the GET request / 对CIoudFront域名使用Amazon Route 53加权路由策略，以直接在CIoudFront和Amazon S3存储桶之间分配GET谙求。"
    ],
    "detail": "A company is using an Amazon S3 bucket located in us-west-2 to serve videos to their customers. Their customers arelocated all around the world and the videos are requested a lot during peak hours. Customers in Europe complain aboutexperiencing slow downloaded speeds, and during peak hours, customers in all locations report experiencing HTTP 500errors. What can a Solutions Architect do to address these issues?—家公司正在使用位于us-west-2的Amazon S3存储桶向其客户提供视频。他们的客户遍布世界各地，高峰时段经常需要视频。欧洲的客户抱怨下载速度慢，在高峰时段，所有位置的客户都报告遇到HTTP 500错误。解决方案架构师可以做什么来解决这些问题？",
    "explanation": [
      "为什么不是B? Cloudfront不是任何加速都最快，如果访问者离S3最近，router53可以判断出直接去S3,不用去CDN绕行"
    ],
    "id": 656,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "B"
    ],
    "category": "saa",
    "choices": [
      "A.Change the RDS instance type to get more RAM. / 更改RDS实例类型以获得更多的RAM。",
      "B.Change the storage type to Provisioned IOPS. / 将存储类型更改为\"Provisioned IOPS\"。",
      "C.Scale the web server tier horizontally. / 水平缩放Web服务器层。",
      "D.Split the DB layer into separate RDS instances. / 将数据库层拆分为单独的RDS实例。"
    ],
    "detail": "A Solutions Architect notices slower response times from an application. The CloudWatch metrics on the MySQL RDSindicate Read IOPS are high and fluctuate significantly when the database is under load.How should the database environment be re - designed to resolve the IOPS fluctuation ?解决方案构架师注意到应用程序的响应时间变慢。MySQL RDS上的CloudWatch指标表明，读取IOPS很高，并且在数据库负载时会出现明显波动。应如何重新设计数据库环境以解决丨OPS波动？",
    "explanation": [
      "Answer is ['B']"
    ],
    "id": 657,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.an external service to ping the VPN endpoint from outside the VPC. / 外部服务，用于从VPC外部ping VPN端点。",
      "B.AWS CIoudTrail to monitor the endpoint. / AWS CloudTrail监视端点。",
      "C.the CloudWatch TunnelState Metric. / CloudWatch TunnelState指标。",
      "D.an AWS Lambda function that parses the VPN connection logs. / 解析VPN连接日志的AWS Lambda函数。"
    ],
    "detail": "A Solutions Architect is designing a solution that includes a managed VPN connection. To monitor whether the VPNconnection is up or down, the Architect should use:解决方案架构师正在设计一个包含托管VPN连接的解决方案。要监视VPN连接是打开还是关闭，架构师应使用：",
    "explanation": [
      "https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/monitoring-cIoudwatch-vpn.html"
    ],
    "id": 658,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Auto Scaling / 自动缩放",
      "B.Amazon SQS / 亚马逊SQS",
      "C.Amazon ElastiCache / Amazon ElastiCache",
      "D.ELB Application Load Balancer / ELB应用程序负载平衡器"
    ],
    "detail": "A social networking portal experiences latency and throughput issues due to an increased number of users. Applicationservers use very large datasets from an Amazon RDS database, which creates a performance bottleneck on thedatabase.Which AWS service should be used to improve performance?由于用户数量增加，社交网络□户网站会遇延迟和吞吐量问题。应用程序服务器使用来自Amazon RDS数据库的非常大的数据集，这在数据库上造成了性能瓶颈。应该使用哪种AWS服务来提高性能？",
    "explanation": [
      "提供缓存方案，解决性能瓶颈。数据库的性能瓶颈，笫一，可以増加read replica,笫二，扩大instance type,第三，ElastiCache,",
      "笫四，可以调整Cluster。"
    ],
    "id": 659,
    "saved_answer": null,
    "type": "Multiple Choice"
  },
  {
    "answer": [
      "C"
    ],
    "category": "saa",
    "choices": [
      "A.Use a NAT Instance. / 使用一个NAT实例。",
      "B.Use a NAT Gateway. / 使用NAT网关。",
      "C.Use a VPC endpoint, / 使用VPC端色",
      "D.Use a Virtual Private Gateway. / 使用虚拟专用网关。"
    ],
    "detail": "A Solutions Architect is designing network architecture for an application that has compliance requirements. The applicationwill be hosted on Amazon EC2 instances in a private subnet and will be using Amazon S3 for storing data. The compliancerequirements mandate that the data cannot traverse the public Internet.What is the MOST secure way to satisfy thisrequirement ?解决方案架构师正在为具有合规性要求的应用程序设计网络体系结构。该应用程序将托管在私有子网中的Amazon EC2实例上，并将使用Amazon S3存储数据。遵从性要求要求数据不能穿越公共Internet。满足此要求的最安全的方法是什么？",
    "explanation": [
      "https://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/"
    ],
    "id": 660,
    "saved_answer": null,
    "type": "Multiple Choice"
  }
]
module.exports = questions