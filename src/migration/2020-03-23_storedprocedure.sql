/**
Points actions:
  - read_article , share_article, watch_video
  - add_points, deduct_points
*/

DELIMITER //
CREATE PROCEDURE getTotalPointsRead()
BEGIN
    SELECT SUM(points) AS total_read FROM rewards_transactions WHERE action ='read_article';
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getTotalPointsShare()
BEGIN
    SELECT SUM(points) AS total_share FROM rewards_transactions WHERE action ='share_article';
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE getTotalPointsWatch()
BEGIN
    SELECT SUM(points) AS total_watched FROM rewards_transactions WHERE action ='watch_video';
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getTotalPointsRedeemed()
BEGIN
    SELECT SUM(points) AS total_redeemed FROM rewards_transactions WHERE action ='deduct_points';
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE getLast3Days()
BEGIN
    SELECT createdAt, SUM(points) AS sum FROM rewards_transactions
    WHERE action='add_points' AND createdAt >= ( CURDATE() - INTERVAL 3 DAY ) GROUP BY DAY(createdAt);
END //
DELIMITER ;




DELIMITER //
CREATE PROCEDURE getMedianPoint()
BEGIN
  SELECT AVG(median.balance) AS median_value
  FROM (
    SELECT points.balance, @rownum:=@rownum+1 as `row_number`, @total_rows:=@rownum
      FROM points_storages points, (SELECT @rownum:=0) r
      WHERE points.balance is NOT NULL
      ORDER BY points.balance ASC
  ) as median
  WHERE median.row_number IN ( FLOOR((@total_rows+1)/2), FLOOR((@total_rows+2)/2) );
END //
DELIMITER ;
