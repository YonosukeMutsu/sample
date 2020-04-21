<?php

$nums = [];
for($i = 0; $i < 5; $i++){
  $col = range($i * 15 + 1, $i * 15 + 15);
  shuffle($col);
  $nums[$i] = array_slice($col, 0 , 5);
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>bingo</title>
</head>
<body>
  <div class='container'>
    <table>
      <?php for($i = 0; $i < 5; $i++) : ?>
        <tr>
        <?php for($j = 0; $j < 5; $j++) : ?>
        <td>
          <?php echo $nums[$j][$i]; ?>
        </td>
        <?php endfor ; ?>
        </tr>
        <?php endfor; ?>
      </table>
  </div> 
</body>
</html>