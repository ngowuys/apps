local function media_title(name, val)
  local filename = mp.get_property('path', '')
  local mediatitle = mp.get_property("media-title", "")
  mp.msg.info(mediatitle)
  mp.msg.info(string.len(mediatitle))
  mp.msg.info(filename)
  mp.msg.info(string.len(filename))
  --if mediatitle == "" then mp.set_property("force-media-title", "NoTitle") end
  if string.len(mediatitle) >= 200 then mp.set_property("force-media-title", "NoTitle") end
  if string.len(filename) >= 200 then mp.set_property("force-media-title", "NoTitle") end
end

mp.observe_property("media-title", "string", media_title)
--mp.observe_property("force-media-title", "string", media_title)