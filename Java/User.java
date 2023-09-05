/**
 * Created by Руслан on 30.05.2017.
 */
import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {


    private String username;
    private String email;
    private String password;
    private Date birthday;
    private int age;

    public User(String username, String email, String password, Date birthday,
                int age) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.age = age;
    }

    public void printInfo() {
        System.out.println("username: " + username);
        System.out.println("email: " + email);
        System.out.println("password: " + password);
        System.out.println("birthday: " + birthday);
        System.out.println("age: " + age);
    }

    // getters and setters

}