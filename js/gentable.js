//TODO HEADER COMMENT

// start executing code once the DOM is ready
$(document).ready(function() {
  // when the submit event occurs, call this function
  $("#ranges").submit(function() {

    var multiplier_start   = $("#multiplierStart").val();
    var multiplier_end     = $("#multiplierEnd").val();
    var multiplicand_start = $("#multiplicandStart").val();
    var multiplicand_end   = $("#multiplicandEnd").val();

    console.log("ier start " + multiplier_start);
    console.log("ier end " + multiplier_end);
    console.log("and start " + multiplicand_start);
    console.log("and end " + multiplicand_end);

    // select and clear any table that might already be on page.
    var table = $("#tbl1 tbody");
    table.empty();


    // create a top row
    table.append($("<tr id='first'>"));
    $("#first").append($("<td>")); //add blank td
    for (var i = multiplicand_start; i <= multiplicand_end; i++) {
      $("#first").append($("<td>").text(i));
    }

    // compute results and insert into table
    for (var i = multiplier_start; i <= multiplier_end; i++) {
      var cur_row = $("<tr>");
      for (var j = multiplicand_start; j <= multiplicand_end; j++) {
        cur_row.append($("<td>").text(i * j));
      }
      table.append(cur_row);
    }

    // add the column of input values
    var dropped_first_row = $("#tbl1 tbody tr").slice(1);
    for (var i = multiplier_start; i <= multiplier_end; i++) {
      var cur_row = dropped_first_row[i - multiplier_start];
      $(cur_row).prepend($("<td>").text(i));
    }

  });
});
