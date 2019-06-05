

// ----------------------------
// Collection structure for accounts
// ----------------------------
db.getCollection("jokes").drop();
db.createCollection("jokes");

// ----------------------------
// Documents of accounts
// ----------------------------
db.getCollection("jokes").insert([ { _id: ObjectId("5c7f8aa859b51f9a83a280d6"), title: "dfdf", content: "123456", image: 'baidu.com', createdBy: ISODate("2019-02-22T03:57:35.595Z") , createdAt : ISODate("2019-02-22T03:57:35.595Z") } ]);

db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of accounts
// ----------------------------

db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead687c"), username: "猪戒1", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead687d"), username: "猪戒2", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead687e"), username: "猪戒3", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead687f"), username: "猪戒4", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6880"), username: "猪戒5", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6881"), username: "猪戒6", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6882"), username: "猪戒7", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6883"), username: "猪戒8", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6884"), username: "猪戒9", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6885"), username: "猪戒10", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
db.getCollection("users").insert([ { _id: ObjectId("5cd0080ef80ef6dc8ead6886"), username: "猪戒11", email: "12306@email.com", createdAt: ISODate("2019-02-22T03:57:35.595Z"), updatedAt: ISODate("2019-02-22T03:57:35.595Z"),picture:'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg' } ]);
