export const config = {
  'username': "postgres",
  'password': "postgres",
  'database': "postgres",
  'host': "mfxgh.ctro59ddrr4v.us-east-1.rds.amazonaws.com",
  'dialect': 'postgres',
  'aws_region': "us-east-1",
  'aws_profile': "default",
  'aws_media_bucket': "arn:aws:s3:::mfxgh",
  'url': "http://localhost:8100",
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};