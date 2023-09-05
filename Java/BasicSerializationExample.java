/**
 * Created by Руслан on 30.05.2017.
 */
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Date;


public class BasicSerializationExample {
    static final String file = "user.txt";

    static void serialize(User user) {
        try {
            FileOutputStream fos = new FileOutputStream(file);
            ObjectOutputStream outputStream = new ObjectOutputStream(fos);
            outputStream.writeObject(user);
            outputStream.close();
        } catch (IOException ex) {
            System.err.println(ex);
        }
    }

    static User deserialize() {
        User savedUser = null;

        try {
            FileInputStream fis = new FileInputStream(file);
            ObjectInputStream inputStream = new ObjectInputStream(fis);
            savedUser = (User) inputStream.readObject();
            inputStream.close();
        } catch (IOException | ClassNotFoundException ex) {
            System.err.println(ex);
        }

        return savedUser;
    }

    public static void main(String[] args) {
        String username = "ruslan";
        String email = "ruslankobrin@gmail.com";
        String password = "pass";
        Date birthDay = new Date();
        int age = 30;

        User newUser = new User(username, email, password, birthDay, age);

        serialize(newUser);

        User deseriaUser = deserialize();

        if (deseriaUser != null) {
            deseriaUser.printInfo();
        }
    }
}