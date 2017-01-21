// Code goes here

console.log('hello world!');
console.log(global_music);

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    var instrument_y_offset = 0;
    for (c = 0; c < global_music.instruments.length; c++) { // traverse the instrucments
      var instrument = global_music.instruments[c];
      var channel_y_offset = 0;
      for (i = 0; i < instrument.channels.length; i++) { // traverse the channels
        channel_y_offset+=global_music.top_padding;
        var channel = instrument.channels[i];
        var channel_x_offset = 0;
        for (j = 0; j < channel.data.length; j++){ // traverse the time signatures
          var note = channel.data[j];
          var note_width = global_music.quarter_size.x*note.weight
          ctx.fillStyle = "rgba({0},{1},{2},{3})".format(channel.rgb[0],channel.rgb[1],channel.rgb[2],note.type);
          ctx.fillRect(channel_x_offset, channel_y_offset+instrument_y_offset, note_width, global_music.quarter_size.y);
          ctx.strokeStyle = "rgba({0},{1},{2},{3})".format(global_music.stroke_style[0],global_music.stroke_style[1],global_music.stroke_style[2],global_music.stroke_style[3]);
          ctx.lineWidth = global_music.line_width;
          ctx.strokeRect(channel_x_offset, channel_y_offset+instrument_y_offset, note_width, global_music.quarter_size.y);

          channel_x_offset+=note_width;
        }
        channel_y_offset+=(global_music.quarter_size.y+global_music.bottom_padding);
      }
      instrument_y_offset+=global_music.instrument_padding;
    }
  }
}
