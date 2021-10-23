create table dbmatriculas.department (
id_department int unsigned auto_increment primary key,
name varchar(50) NOT NULL
);

create table dbmatriculas.person (
id_person int unsigned auto_increment primary key,
identification_number varchar(30) unique NOT NULL,
name varchar(25) NOT NULL,
last_name varchar(25) NOT NULL,
second_last_name varchar(25),
city varchar(30) NOT NULL,
direction varchar(50) NOT NULL,
phone_number varchar(25),
date_born date NOT NULL,
gender enum('M','F') NOT NULL,
person_type enum('teacher','student') NOT NULL,
password varchar(15) NOT NULL
);

create table dbmatriculas.teacher (
id_teacher int unsigned auto_increment primary key,
id_department int unsigned NOT NULL,

foreign key(id_teacher) references dbmatriculas.person(id_person),
foreign key(id_department) references  dbmatriculas.department(id_department)
);

create table dbmatriculas.grades (
id_grade int unsigned auto_increment primary key,
name varchar(100) 	NOT NULL
);

create table dbmatriculas.couse (
id_course int unsigned auto_increment primary key,
name varchar(100) 	NOT NULL,
credit int unsigned NOT NULL,
type enum('basic','required','optional')NOT NULL,
course tinyint unsigned not null,
semestre tinyint unsigned not null,
id_teacher int unsigned,
id_grade int unsigned ,

foreign key(id_teacher) references dbmatriculas.teacher(id_teacher),
foreign key(id_grade) references dbmatriculas.grades(id_grade)
);

create table dbmatriculas.course_escolar (
id_course_escolar int unsigned auto_increment primary key,
start_year year NOT NULL,
end_year year NOT NULL
);

create table dbmatriculas.student_course (
id_student int unsigned,
id_course int unsigned,
id_course_escolar int  unsigned,
primary key(id_student,id_course,id_course_escolar),
foreign key (id_student) references dbmatriculas.person(id_person),
foreign key (id_course) references dbmatriculas.couse(id_course),
foreign key (id_course_escolar) references dbmatriculas.course_escolar(id_course_escolar)
);

