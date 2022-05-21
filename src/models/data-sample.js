const student = {
  studentId: "20172943",
  name: "Nguyễn Thị Nguyệt Ánh",
  class: "Công nghệ thông tin 11-K62",
  halfGrade: "7.5",
  signature: " ",
  note: " ",
};

const students = [...new Array(95)].map((_) => student);

const dataSample = {
  semester: "20202",
  unit: "Trường Công nghệ Thông tin và Truyền thông",
  teacher: "Nguyễn Văn A",
  courseId: "IT3930",
  courseName: "Project II",
  eduProgram: "KSCQ - Bộ môn HTTT (K62 trở đi)",
  classType: "ĐA",
  classId: "QT 705358",
  group: "Nhóm 1",
  students,
  managerId: "demo-account@hust.edu.vn",
  examinerId: "demo-account@hust.edu.vn",
  bureauId: "demo-account@hust.edu.vn",
  departmentId: "demo-account@hust.edu.vn",
};

const placeholders = [{ email: "demo-account@hust.edu.vn", pageIndex: 4, x: 0, y: 0, width: 285, height: 75, fieldName: "demo-account", pageHeight: 1200 }];
