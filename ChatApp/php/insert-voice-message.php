<?php
session_start();
include_once "config.php";

if(isset($_FILES['audio']) && isset($_POST['incoming_id'])){
    $outgoing_id = $_SESSION['unique_id'];
    $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
    
    $file_name = time() . '_' . $_FILES['audio']['name'];
    $file_tmp = $_FILES['audio']['tmp_name'];
    $file_destination = '../uploads/' . $file_name;
    
    if(move_uploaded_file($file_tmp, $file_destination)){
        $sql = mysqli_query($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg, is_voice_message) 
                                    VALUES ({$incoming_id}, {$outgoing_id}, '{$file_name}', 1)");
        if($sql){
            echo json_encode(["status" => "success"]);
        } else {
            echo json_encode(["status" => "error", "error" => "Failed to insert message into database"]);
        }
    } else {
        echo json_encode(["status" => "error", "error" => "Failed to upload file"]);
    }
} else {
    echo json_encode(["status" => "error", "error" => "Invalid request"]);
}
?>